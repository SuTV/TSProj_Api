app.controller('CreateEditQuestionModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'QUESTION_TYPES', 'Exam', 'Question', 'examId', 'questionData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, QUESTION_TYPES, Exam, Question, examId, questionData) {
  
  $scope.questionTypes = QUESTION_TYPES;
  $scope.question = {
  	examId: questionData && questionData.examId ? questionData.examId : examId,
    content: questionData && questionData.content ? questionData.content : '',
    sortNumber: questionData && questionData.sortNumber ? questionData.sortNumber : 0,
    questionType: questionData && questionData.questionType ? questionData.questionType : $scope.questionTypes[0].val,
    isAnswerYesOrTrue: questionData ? questionData.isAnswerYesOrTrue : false
  };

  $scope.isEdit = questionData && questionData.id ? true : false;

  $scope.createQuestion = function () {
  	Exam.prototype$__create__questions({id: examId}, $scope.question,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.question.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.question.create.successed'])
	                            .action(translations['action.ok'])
	                            .highlightAction(false)
	                            .position('bottom left');

	        $mdToast.show(toast).then(function() {
	          // click OK
	        });
      	});
      }, function(res) {
        $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#createEditQuestionHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editQuestion = function () {
    Question.prototype$updateAttributes({id: questionData.id}, $scope.question,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.question.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.question.edit.successed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });
      }, function(res) {
        $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#createEditQuestionHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.setAnswerYesOrTrue = function(val) {
    $scope.question.isAnswerYesOrTrue = val;
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);