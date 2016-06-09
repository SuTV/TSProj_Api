var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Answer) {
    // enable some endpoints
    enableAllMethods(Answer, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Answer.observe('before save', function(ctx, next) {        
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });

    Answer.afterRemote('findById', function(ctx, result, next) {
      result.isCorrectAnswer = result.isCorrect;
      next();
    });
};
