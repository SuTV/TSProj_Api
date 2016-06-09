var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Attachment) {
    // enable some endpoints
    enableAllMethods(Attachment, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Attachment.observe('before save', function(ctx, next) {      
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });

    Attachment.increaseDownloadCount = function(id, cb) {
        try {
            if(id) {
                Attachment.findById(id, function(err, attachment) {
                    if (err) {
                        cb(err);
                    } else {
                        if(attachment) {
                            attachment.downloadCount += 1;
                            attachment.save(function(err) {
                                if (err) {
                                    cb(err);
                                } else {
                                    cb(null, attachment);
                                }
                            });
                        } else {
                            var error = new Error('Data not found.');
                              error.statusCode = error.status = 404;
                            cb(error);
                        }
                    }
                });
            } else {
                var error = new Error('id is required.');
                error.statusCode = error.status = 400;
                cb(error);
            }
        } catch (err) {
            cb(err);
        }
    };

    Attachment.remoteMethod(
        'increaseDownloadCount', 
        {
          accepts: [
            {arg: 'id', type: 'string', required: true, description: 'Attachment id.'}
          ],
          returns: {arg: 'data', type: 'attachment', root: true},
          http: {path: '/:id/increaseDownloadCount', verb: 'get'},
          description: 'Increase download count, plus 1.'
        }
    );
};
