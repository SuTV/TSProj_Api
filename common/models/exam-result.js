var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(ExamResult) {
    // disable some endpoints
    enableAllMethods(ExamResult, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    ExamResult.observe('before save', function(ctx, next) {        
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
