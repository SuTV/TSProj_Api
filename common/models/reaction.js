var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Reaction) {
    // disable some endpoints
    enableAllMethods(Reaction, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Reaction.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
