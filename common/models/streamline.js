var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Streamline) {
    // disable some endpoints
    enableAllMethods(Streamline, ['upsert', 'create', 'updateAll', 'count']);
    
    Streamline.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
