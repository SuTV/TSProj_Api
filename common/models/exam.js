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

    Exam.observe('loaded', function(ctx, next) {
        var examId = ctx.instance ? ctx.instance.id : ctx.data.id;

        Exam.app.models.Question.count({'examId': examId}, function(err, totalCount) {
            if (err) next(err);

            if(ctx.instance) {
                ctx.instance.totalQuestions = totalCount;
            } else {
                ctx.data.totalQuestions = totalCount;
            }

            next();
        });
    });
};
