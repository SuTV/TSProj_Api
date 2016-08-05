app.controller('CreateEditAnswerModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'Question', 'Answer', 'questionId', 'answerData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, Question, Answer, questionId, answerData) {
  $scope.answer = {
  	questionId: answerData ? answerData.questionId : questionId,
    content: answerData ? answerData.content : '',
    isCorrect: answerData ? answerData.isCorrect : false,
    sortNumber: answerData ? answerData.sortNumber : 0
  };

  $scope.isEdit = answerData && answerData.id ? true : false;

  $scope.createAnswer = function () {
  	Question.prototype$__create__answers({id: questionId}, $scope.answer,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.answer.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.answer.create.successed'])
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
                                .parent('#createEditAnswerHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editAnswer = function () {
    Answer.prototype$updateAttributes({id: answerData.id}, $scope.answer,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.answer.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.answer.edit.successed'])
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
                                .parent('#createEditAnswerHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);