app.controller('ExamDetailsCtrl', ['$scope', '$rootScope', '$q', '$uibModal', '$state', '$mdToast', '$translate', '$stateParams', '$mdDialog', 'LoopBackAuth', 'Exam', 'Plan', 'Question', 'Answer',
                           function($scope, $rootScope, $q, $uibModal, $state, $mdToast, $translate, $stateParams, $mdDialog, LoopBackAuth, Exam, Plan, Question, Answer) {
  
  $scope.exam = {};
  $scope.currentExamResult = {};
  $scope.isSubmitted = false;
  $scope.answerList = [];
  $scope.course = {};
  $scope.lecture = {};
  $scope.questions = [];
  $scope.isStarted = false;
  $scope.isLoading = true;
  $scope.totalRightAnswers = null;

  var pathname = window.location.pathname;
  var examIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 3) {
      examIdParam = pathnameArr[3];
    }
  }

  if(!examIdParam) {
    $translate(['action.ok','message.exam.not_found']).then(function(translations) {
      var toast = $mdToast.simple()
                          .content(translations['message.exam.not_found'])
                          .action(translations['action.ok'])
                          .highlightAction(false)
                          .position('bottom left');

      $mdToast.show(toast).then(function() {
        // click OK
      });
    });

    window.location.href = '/';
  }

  $scope.loadExamDetails = function() {
    var deferred = $q.defer();
    Exam.findById({id: examIdParam, filter: {include: ['course', 'lecture']}},function(data) {
        $scope.exam = data;

        deferred.resolve(data);
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode) {
          $state.go('404');
        }

        $translate('action.ok').then(function(ok) {
          var toast = $mdToast.simple()
                              .content(res.data.error.message)
                              .action(ok)
                              .highlightAction(false)
                              .position('bottom left');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });

        deferred.reject(res);
      });

    return deferred.promise;
  };

  function getIndexInAnswerList(questionId) {
    if($scope.answerList.length > 0) {
      for (var i = 0; i < $scope.answerList.length; i++) {
        if($scope.answerList[i].questionId === questionId) {
          return i;
        }
      }
    }

    return null;
  }

  $scope.getAnswerByQuestion = function(questionId) {
    if($scope.answerList.length > 0) {
      for (var i = 0; i < $scope.answerList.length; i++) {
        if($scope.answerList[i].questionId === questionId) {
          return $scope.answerList[i];
        }
      }
    }

    return null;
  };

  $scope.isSelectedAnswer = function(answerIds, answerId) {
    if(answerIds && answerIds.length > 0) {
      for (var i = 0; i < answerIds.length; i++) {
        if(answerIds[i] === answerId) {
          return true;
        }
      }
    }

    return false;
  };

  $scope.selectAnswer = function(questionId, questionType, answerId, isAnswerYesOrTrue) {
    // build object to save into answer list
    var answer = {
      questionId: questionId,
      questionType: questionType,
    };

    var currentIndex = getIndexInAnswerList(questionId);

    if((questionType === 0 || questionType === 1) && answerId) {
      // check if muti choice question
      if(questionType === 1) {
        var answerIdArr = [];
        if(currentIndex !== null) {
          // get current answer id list
          var currentAnswerIdArr = $scope.answerList[currentIndex].answerIds;
          if(currentAnswerIdArr && currentAnswerIdArr.length > 0) {
            var isRemove = false;
            for (var i = 0; i < currentAnswerIdArr.length; i++) {
              if(currentAnswerIdArr[i] === answerId) {
                isRemove = true;
              } else {
                answerIdArr.push(currentAnswerIdArr[i]);
              }
            }

            if(!isRemove) {
              answerIdArr.push(answerId);
            }
          } else {
            answerIdArr.push(answerId);
          }
        } else {
          answerIdArr.push(answerId);
        }

        answer.answerIds = answerIdArr;
      } else {
        answer.answerId = answerId;
      }
    } else if ((questionType === 2 || questionType === 3) && (isAnswerYesOrTrue === true || isAnswerYesOrTrue === false)) {
      answer.isAnswerYesOrTrue = isAnswerYesOrTrue === true;
    }

    if(answer && answer.questionId && (answer.answerId || answer.answerIds || answer.isAnswerYesOrTrue === true || answer.isAnswerYesOrTrue === false)) {
      if(currentIndex !== null) {
        $scope.answerList[currentIndex] = answer;
      } else {
        $scope.answerList.push(answer); 
      }
    }
  };

  $scope.getTotalRightAnswers = function() {
    if($scope.answerList.length > 0 && $scope.questions.length > 0) {
      var totalCount = 0;
      for (var i = 0; i < $scope.answerList.length; i++) {
        for (var j = 0; j < $scope.questions.length; j++) {
          if($scope.questions[j].id === $scope.answerList[i].questionId) {
            if ($scope.answerList[i].questionType === 0) {
              for (var z = 0; z < $scope.questions[j].answers.length; z++) {
                if($scope.questions[j].answers[z].id === $scope.answerList[i].answerId && $scope.questions[j].answers[z].isCorrect === true) {
                  totalCount++;
                  break;
                }
              }
            } else if ($scope.answerList[i].questionType === 1) {
              var totalRightAnswersMultiple = 0;

              var ringtAnswerIds = [];

              for (var x = 0; x < $scope.questions[j].answers.length; x++) {
                if($scope.questions[j].answers[x].isCorrect === true) {
                  ringtAnswerIds.push($scope.questions[j].answers[x].id);
                }
              }

              for (var y = 0; y < $scope.answerList[i].answerIds.length; y++) {
                if(ringtAnswerIds.length > 0) {
                  for (var z = 0; z < ringtAnswerIds.length; z++) {
                    if(ringtAnswerIds[z] === $scope.answerList[i].answerIds[y]) {
                      totalRightAnswersMultiple++;
                      break;
                    }
                  }
                }
                
              }

              if(totalRightAnswersMultiple > 0 && ringtAnswerIds.length > 0 && totalRightAnswersMultiple === ringtAnswerIds.length) {
                totalCount++;
              }
            } else if($scope.answerList[i].questionType === 2 || $scope.answerList[i].questionType === 3) {
              if($scope.answerList[i].isAnswerYesOrTrue === $scope.questions[j].isAnswerYesOrTrue) {
                totalCount++;
              }
            }

            break;
          }
        }
      }

      return totalCount;
    }

    return null;
  }

  $scope.loadMyCurrentExamResult = function() {
    var deferred = $q.defer();
    Exam.prototype$__get__examResults({id: $scope.exam.id, filter: {where: {userId: LoopBackAuth.currentUserId, examId: $scope.exam.id}}},function(data) {
        if(data.length > 0) {
          $scope.currentExamResult = data[0];
          $scope.isSubmitted = true;
          $scope.answerList = JSON.parse(data[0].result);
        }

        deferred.resolve(data);
      }, function(res) {
        $translate('action.ok').then(function(ok) {
          var toast = $mdToast.simple()
                              .content(res.data.error.message)
                              .action(ok)
                              .highlightAction(false)
                              .position('bottom left');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });

        deferred.reject(res);
      });

    return deferred.promise;
  };

  $scope.loadPlanWithCourseInfo = function(planId) {
    Plan.findById({id: planId, filter: {include: ['course']}},function(data) {
      $scope.course = data.course;
      $scope.isLoading = false;
      if($rootScope.isMyOwnData($scope.course.userId) || ($rootScope.isAuthenticated && $scope.isSubmitted)) {
        $scope.loadQuestions(false);
      }
    }, function(res) {
      if(res.data.error.status === 404 || res.data.error.statusCode) {
        $state.go('app.home');
      }

      $translate('action.ok').then(function(ok) {
        var toast = $mdToast.simple()
                            .content(res.data.error.message)
                            .action(ok)
                            .highlightAction(false)
                            .position('bottom left');

        $mdToast.show(toast).then(function() {
          // click OK
        });
      });
    });
  };

  $scope.loadQuestions = function(isStartExam) {
    Exam.prototype$__get__questions({id: $scope.exam.id, filter: {include: ['answers']}},
      function(data) {
        $scope.questions = data;
        $scope.totalRightAnswers = $scope.getTotalRightAnswers();
        
        if(isStartExam) {
          $scope.isStarted = true;

          $translate(['action.ok', 'message.exam.start.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.exam.start.successed'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
        }
      }, function(res) {
        $translate('action.OK').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.startExam = function(ev) {
    if($rootScope.isAuthenticated && LoopBackAuth.currentUserId) {
      $translate(['action.yes', 'action.no', 'message.exam.start.dialog_title', 'message.exam.start.dialog_content', 'message.exam.start.dialog_label']).then(function(trans) {
        var confirm = $mdDialog.confirm()
          .title(trans['message.exam.start.dialog_title'])
          .content(trans['message.exam.start.dialog_content'])
          .ariaLabel(trans['message.exam.start.dialog_label'])
          .ok(trans['action.yes'])
          .cancel(trans['action.no'])
          .targetEvent(ev);

        $mdDialog.show(confirm).then(function() {
          // start exam
          $scope.loadQuestions(true);
        }, function() {
          // click no
        });
      });
    } else {
      $rootScope.openSigninModal(false, null);
      $translate(['action.ok', 'message.login.required']).then(function(translations) {
        var toast = $mdToast.simple()
                            .content(translations['message.login.required'])
                            .action(translations['action.ok'])
                            .highlightAction(false)
                            .position('bottom left');

        $mdToast.show(toast).then(function() {
          // click OK
        });
      });
    }
  };

  $scope.submitAnswers = function() {
    if($rootScope.isAuthenticated && LoopBackAuth.currentUserId && !$rootScope.isMyOwnData($scope.course.userId) && !$scope.isSubmitted) {
      var examResult = {
        examId: $scope.exam.id,
        userId: LoopBackAuth.currentUserId,
        result: JSON.stringify($scope.answerList)
      };

      Exam.prototype$__create__examResults({id: $scope.exam.id}, examResult,
        function(data) {
          $translate(['action.ok', 'message.exam.submit.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.exam.submit.successed'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: true
          });
        }, function(res) {
          $translate('action.ok').then(function(ok) {
              var toast = $mdToast.simple()
                                  .content(res.data.error.message)
                                  .action(ok)
                                  .highlightAction(false)
                                  .position('bottom left');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
      });
    }
  };

  $scope.openEditExamModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditExamModalContent.html',
      controller: 'CreateEditExamModalCtrl',
      size: 'lg',
      resolve: {
        courseData: function () {
          return $scope.exam.courseId && $scope.exam.course && $scope.exam.course.id ? $scope.exam.course : null;
        },
        lectureData: function () {
          return $scope.exam.lectureId && $scope.exam.lecture && $scope.exam.lecture.id ? $scope.exam.lecture : null;
        },
        examData: function () {
          return $scope.exam;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadExamDetails();
    }, function () {
      // dismissed
    });
  };

  $scope.deleteExam = function(ev) {
    $translate(['action.yes', 'action.no', 'message.exam.delete.dialog_title', 'message.exam.delete.dialog_content', 'message.exam.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.exam.delete.dialog_title'])
        .content(trans['message.exam.delete.dialog_content'])
        .ariaLabel(trans['message.exam.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete exam
        Exam.deleteById({id: $scope.exam.id},
          function(data) {
            if($scope.exam.courseId) {
              $state.go('app.course', {id: $scope.exam.courseId});
            } else if($scope.exam.lectureId) {
              $state.go('app.lecture', {id: $scope.exam.lectureId});
            }

            $translate(['action.ok', 'message.exam.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.exam.delete.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left');

              $mdToast.show(toast).then(function() {
                // click OK
              });
            });
          }, function(res) {
            $translate('action.OK').then(function(ok) {
                var toast = $mdToast.simple()
                                    .content(res.data.error.message)
                                    .action(ok)
                                    .highlightAction(false)
                                    .position('bottom left');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
        });
      }, function() {
        // click no
      });
    });
  };

  $scope.openCreateEditQuestionModal = function(questionData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createCreateEditQuestionModalContent.html',
      controller: 'CreateEditQuestionModalCtrl',
      size: 'lg',
      resolve: {
        examId: function () {
          return $scope.exam.id;
        },
        questionData: function () {
          return questionData;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadQuestions(false);
    }, function () {
      // dismissed
    });
  };

  $scope.deleteQuestion = function(ev, questionId) {
    $translate(['action.yes', 'action.no', 'message.question.delete.dialog_title', 'message.question.delete.dialog_content', 'message.question.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.question.delete.dialog_title'])
        .content(trans['message.question.delete.dialog_content'])
        .ariaLabel(trans['message.question.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete question
        Question.deleteById({id: questionId},
          function(data) {
            $scope.loadQuestions(false);

            $translate(['action.ok', 'message.question.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.question.delete.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left');

              $mdToast.show(toast).then(function() {
                // click OK
              });
            });
          }, function(res) {
            $translate('action.OK').then(function(ok) {
                var toast = $mdToast.simple()
                                    .content(res.data.error.message)
                                    .action(ok)
                                    .highlightAction(false)
                                    .position('bottom left');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
        });
      }, function() {
        // click no
      });
    });
  };

  $scope.openCreateEditAnswerModal = function(questionId, answerData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createCreateEditAnswerModalContent.html',
      controller: 'CreateEditAnswerModalCtrl',
      size: 'lg',
      resolve: {
        questionId: function () {
          return questionId;
        },
        answerData: function () {
          return answerData;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadQuestions(false);
    }, function () {
      // dismissed
    });
  };

  $scope.deleteAnswer = function(ev, answerId) {
    $translate(['action.yes', 'action.no', 'message.answer.delete.dialog_title', 'message.answer.delete.dialog_content', 'message.answer.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.answer.delete.dialog_title'])
        .content(trans['message.answer.delete.dialog_content'])
        .ariaLabel(trans['message.answer.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete answer
        Answer.deleteById({id: answerId},
          function(data) {
            $scope.loadQuestions(false);

            $translate(['action.ok', 'message.answer.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.answer.delete.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left');

              $mdToast.show(toast).then(function() {
                // click OK
              });
            });
          }, function(res) {
            $translate('action.OK').then(function(ok) {
                var toast = $mdToast.simple()
                                    .content(res.data.error.message)
                                    .action(ok)
                                    .highlightAction(false)
                                    .position('bottom left');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
        });
      }, function() {
        // click no
      });
    });
  };

  $scope.loadExamDetails().then(function() {
    $scope.loadMyCurrentExamResult().then(function() {
      if($scope.exam.course && $scope.exam.course.id) {
        $scope.course = $scope.exam.course;
        $scope.isLoading = false;
        if($rootScope.isMyOwnData($scope.course.userId) || ($rootScope.isAuthenticated && $scope.isSubmitted)) {
          $scope.loadQuestions(false);
        }
      } else if (!$scope.exam.course && $scope.exam.lecture && $scope.exam.lecture.id) {
        $scope.lecture = $scope.exam.lecture;
        // get course info from lecture -> plan
        $scope.loadPlanWithCourseInfo($scope.exam.lecture.planId);
      }
    });
  });

  $scope.startTimer = function (){
    $scope.$broadcast('timer-start');
  };

  $scope.startTimer();

}]);