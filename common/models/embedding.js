var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Embedding) {
    // enable some endpoints
    enableAllMethods(Embedding, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Embedding.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
