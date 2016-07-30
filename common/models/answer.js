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

    function filterIsCorrectField(ctx, next, userId, examId) {
        var allowToView = false;

        var currentContext = loopback.getCurrentContext();
        var currentUser = currentContext && currentContext.get('currentUser');
        if(currentUser) {
            allowToView = currentUser.id === userId;
        }

        // check current exam result
        Answer.app.models.ExamResult.count({'userId': userId, 'examId': examId}, function(err, totalCount) {
            if (err) next(err);

            allowToView = allowToView || totalCount > 0;

            if(!allowToView) {
                if(ctx.instance) {
                    ctx.instance.unsetAttribute('isCorrect');
                } else {
                    delete ctx.data.isCorrect;
                }
            }

            next();
        });
    };

    Answer.observe('loaded', function(ctx, next) {

        var questionId = ctx.instance ? ctx.instance.questionId : ctx.data.questionId;

        // get question
        Answer.app.models.Question.findOne({id: questionId}, function(err, question) {
            if(err) next(err);

            if(question && question.examId) {
                // get exam
                Answer.app.models.Exam.findOne({where: {id: question.examId}, include: ['course', 'lecture']}, function(err, exam) {
                    if(err) next(err);

                    exam = exam.toObject();

                    if(exam && exam.courseId && exam.course) {
                        return filterIsCorrectField(ctx, next, exam.course.userId, exam.id);
                    } else if(exam.lectureId && exam.lecture) {
                        // get plan
                        Answer.app.models.Plan.findOne({where: {id: exam.lecture.planId}, include: ['course']}, function(err, plan) {
                            if(err) next(err);

                            if(plan && plan.courseId && plan.course) {
                                return filterIsCorrectField(ctx, next, plan.course.userId, exam.id);
                            } else {
                                next(new Error('could not find plan'));
                            }
                        });
                    } else {
                        next(new Error('could not find exam'));
                    }
                });
            } else {
                next(new Error('could not find question'));
            }
        });
    });
};
