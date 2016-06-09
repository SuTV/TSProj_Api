var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Exam) {
    // disable some endpoints
    enableAllMethods(Exam, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Exam.observe('before save', function(ctx, next) {        
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
