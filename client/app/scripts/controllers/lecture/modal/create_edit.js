app.controller('CreateEditLectureModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'Plan', 'Lecture', 'planId', 'lectureData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, Plan, Lecture, planId, lectureData) {
  $scope.lecture = {
  	title: lectureData ? lectureData.title : '',
  	planId: lectureData ? lectureData.planId : planId,
  	description: lectureData ? lectureData.description : '',
    content: lectureData ? lectureData.content : '',
    sortNumber: lectureData ? lectureData.sortNumber : 0
  };

  $scope.isEdit = lectureData ? true : false;

  $scope.createLecture = function () {
  	Plan.prototype$__create__lectures({id: planId}, $scope.lecture,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.lecture.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.lecture.create.successed'])
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
                                .parent('#createEditLectureHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editLecture = function () {
    Lecture.prototype$updateAttributes({id: lectureData.id}, $scope.lecture,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.lecture.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.lecture.edit.successed'])
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
                                .parent('#createEditLectureHolderId');

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