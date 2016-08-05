app.controller('CreateEditPlanModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', '$filter', 'Course', 'Plan', 'courseData', 'planData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, $filter, Course, Plan, courseData, planData) {
  $scope.plan = {
  	title: planData ? planData.title : '',
    courseId: courseData.id,
  	description: planData ? planData.description : '',
    startTime: planData ? new Date(planData.startTime) : (new Date()),
    endTime: planData ? new Date(planData.endTime) : (new Date())
  };

  $scope.isEdit = planData ? true : false;
  $scope.startDate = $scope.plan.startTime; //$filter('date')($scope.plan.startTime, 'dd-MM-yyyy');
  $scope.endDate = $scope.plan.endTime; //$filter('date')($scope.plan.endTime, 'dd-MM-yyyy');

  $scope.openDtStart = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.dtStartOpened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    class: 'datepicker'
  };

  $scope.openDtEnd = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.dtEndOpened = true;
  };

  $scope.rebuildTime = function() {
    // build time
    if($scope.startDate instanceof Date) {
      $scope.plan.startTime.setFullYear($scope.startDate.getFullYear());
      $scope.plan.startTime.setMonth($scope.startDate.getMonth());
      $scope.plan.startTime.setDate($scope.startDate.getDate());
    } else {
      var dateArr = $scope.startDate.split('-');

      $scope.plan.startTime.setFullYear(parseInt(dateArr[2]));
      $scope.plan.startTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.plan.startTime.setDate(parseInt(dateArr[0]));
    }

    if($scope.endDate instanceof Date) {
      $scope.plan.endTime.setFullYear($scope.endDate.getFullYear());
      $scope.plan.endTime.setMonth($scope.endDate.getMonth());
      $scope.plan.endTime.setDate($scope.endDate.getDate());
    } else {
      var dateArr = $scope.endDate.split('-');

      $scope.plan.endTime.setFullYear(parseInt(dateArr[2]));
      $scope.plan.endTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.plan.endTime.setDate(parseInt(dateArr[0]));
    }
  };

  $scope.createPlan = function () {
    $scope.rebuildTime();

  	Course.prototype$__create__plans({id: courseData.id}, $scope.plan,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.plan.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.plan.create.successed'])
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
                                .parent('#createEditPlanHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editPlan = function () {
    $scope.rebuildTime();

    Plan.prototype$updateAttributes({id: planData.id}, $scope.plan,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.plan.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.plan.edit.successed'])
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
                                .parent('#createEditPlanHolderId');

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