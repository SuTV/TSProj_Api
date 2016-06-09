var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Plan) {
    // disable some endpoints
    enableAllMethods(Plan, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Plan.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
