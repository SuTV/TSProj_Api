var loopback = require('loopback');
var enableAllMethods = require('../utils/model.js').enableAllMethods;

module.exports = function(Question) {
    // disable some endpoints
    enableAllMethods(Question, ['find', 'upsert', 'create', 'updateAll', 'count']);
    
    Question.observe('before save', function(ctx, next) {
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });

    Question.afterRemote('findById', function(ctx, result, next) {
      result.answerYesOrTrue = result.isAnswerYesOrTrue;
      next();
    });
};
