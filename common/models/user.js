var config = require('../../server/config.json');
var loopback = require("loopback");
var path = require('path');
//var disableAllMethods = require('../utils/model.js').disableAllMethods;

module.exports = function(user) {
    // validations
    user.validatesLengthOf('password', {min: 4, message: {min: 'Password is too short'}});
    
    // enable some endpoints
    //disableAllMethods(user, []);
    
    //send verification email after registration
    // user.afterRemote('create', function(context, user, next) {
    //     var options = {
    //         type: 'email',
    //         to: user.email,
    //         from: 'noreply@domain.com',
    //         subject: 'Thanks for registering.',
    //         template: path.resolve(__dirname, '../../server/views/tpl/mail/verify.ejs'),
    //         redirect: 'auth/verified',
    //         user: user
    //     };

    //     user.verify(options, function(err, response) {
    //         if (err) return next(err);
            
    //         return next();
    //     });
    // });

    //send password reset link when requested
    user.on('resetPasswordRequest', function(info) {
        var mailContent = {url:config.webClientResetPasswordUrl, accessToken:info.accessToken.id}; 
        var renderer = loopback.template(path.resolve(__dirname, '../../server/views/tpl/mail/reset-password.ejs'));
        var mailBody = renderer(mailContent);

        user.app.models.Email.send({
            to: info.email,
            from: info.email,
            subject: 'Password reset',
            html: mailBody
        }, function(err) {
            if (err) return err;
        });
    });
    
    user.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });

    user.requestNewPassword = function(options, access_token, cb) {
        try {
            if(!options) {
                var error = new Error('options is required.');
                error.statusCode = error.status = 400;
                cb(error);
            } else if (options && (!options.password || !options.confirmation) ) {
                var error = new Error('password and confirmation field are required.');
                error.statusCode = error.status = 400;
                cb(error);
            } else if (options && options.password && options.confirmation && options.password !== options.confirmation ) {
                var error = new Error('password and confirmation field are not equal.');
                error.statusCode = error.status = 400;
                cb(error);
            } else {
                var currentContext = loopback.getCurrentContext();
                var currentUser = currentContext && currentContext.get('currentUser');
                if(!currentUser) {
                    var error = new Error('Invalid access_token.');
                    error.statusCode = error.status = 400;
                    cb(error);
                }
                // update password
                currentUser.updateAttribute('password', options.password, function(err, updatedUser) {
                    if (err) {
                        cb(err);
                    }
                    
                    cb(null, updatedUser);
                });
            }
        } catch (err) {
            cb(err);
        }
    }
     
    user.remoteMethod(
        'requestNewPassword', 
        {
          isStatic: true,
          accepts: [
            {arg: 'options', type: 'object', http: { source: 'body' }, required: true, description: 'New password info.'},
            {arg: 'access_token', type: 'string', http: { source: 'req' }, required: true, description: 'Received accessToken.'}
          ],
          returns: {arg: 'data', type: 'user', root: true},
          http: {path: '/requestNewPassword', verb: 'post'},
          description: 'Request new password for user who received password reset email.'
        }
    );
};
