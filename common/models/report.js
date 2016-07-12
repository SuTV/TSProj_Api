var loopback = require('loopback');

module.exports = function(Report) {
    Report.observe('before save', function(ctx, next) {      
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};