var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Lecture) {
    // disable some endpoints
    enableAllMethods(Lecture, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Lecture.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });
};
