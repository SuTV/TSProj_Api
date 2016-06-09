var loopback = require('loopback');

module.exports = function(Category) {
    Category.observe('before save', function(ctx, next) {
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
