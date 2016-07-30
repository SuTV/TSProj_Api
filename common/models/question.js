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

    function filterIsAnswerYesOrTrueField(ctx, next, userId, examId) {
        var allowToView = false;

        var currentContext = loopback.getCurrentContext();
        var currentUser = currentContext && currentContext.get('currentUser');
        if(currentUser) {
            allowToView = currentUser.id === userId;
        }

        // check current exam result
        Question.app.models.ExamResult.count({'userId': userId, 'examId': examId}, function(err, totalCount) {
            if (err) next(err);

            allowToView = allowToView || totalCount > 0;

            if(!allowToView) {
                if(ctx.instance) {
                    ctx.instance.unsetAttribute('isAnswerYesOrTrue');
                } else {
                    delete ctx.data.isAnswerYesOrTrue;
                }
            }

            next();
        });
    };

    Question.observe('loaded', function(ctx, next) {
        var examId = ctx.instance ? ctx.instance.examId : ctx.data.examId;

        // get exam
        Question.app.models.Exam.findOne({where: {id: examId}, include: ['course', 'lecture']}, function(err, exam) {
            if(err) next(err);

            exam = exam.toObject();

            if(exam && exam.courseId && exam.course) {
                return filterIsAnswerYesOrTrueField(ctx, next, exam.course.userId, examId);
            } else if(exam.lectureId && exam.lecture) {
                // get plan
                Question.app.models.Plan.findOne({where: {id: exam.lecture.planId}, include: ['course']}, function(err, plan) {
                    if(err) next(err);

                    if(plan && plan.courseId && plan.course) {
                        return filterIsAnswerYesOrTrueField(ctx, next, plan.course.userId, examId);
                    } else {
                        next(new Error('could not find plan'));
                    }
                });
            } else {
                next(new Error('could not find exam'));
            }
        });        
    });
};
