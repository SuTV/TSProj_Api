var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Comment) {
    // enable some endpoints
    enableAllMethods(Comment, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Comment.observe('before save', function(ctx, next) {
        if(ctx.isNewInstance) {
            var currentContext = loopback.getCurrentContext();
            var currentUser = currentContext && currentContext.get('currentUser');
            if(currentUser) {
                // add userId
                ctx.instance.userId = currentUser.id;
            }
        }
        
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
