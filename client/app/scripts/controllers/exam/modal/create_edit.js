app.controller('CreateEditExamModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', '$filter', 'Course', 'Lecture', 'Exam', 'courseData', 'lectureData', 'examData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, $filter, Course, Lecture, Exam, courseData, lectureData, examData) {
  $scope.exam = {
  	title: examData && examData.title ? examData.title : '',
    courseId: courseData && courseData.id ? courseData.id : null,
    lectureId: lectureData && lectureData.id ? lectureData.id : null,
  	description: examData && examData.description ? examData.description : '',
    lengthInMinutes: 15,
    startTime: examData && examData.startTime ? new Date(examData.startTime) : (new Date()),
    endTime: examData && examData.endTime ? new Date(examData.endTime) : (new Date())
  };

  $scope.isEdit = examData ? true : false;
  $scope.startDate = $scope.exam.startTime; //$filter('date')($scope.exam.startTime, 'dd-MM-yyyy');
  $scope.endDate = $scope.exam.endTime; //$filter('date')($scope.exam.endTime, 'dd-MM-yyyy');

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
      $scope.exam.startTime.setFullYear($scope.startDate.getFullYear());
      $scope.exam.startTime.setMonth($scope.startDate.getMonth());
      $scope.exam.startTime.setDate($scope.startDate.getDate());
    } else {
      var dateArr = $scope.startDate.split('-');

      $scope.exam.startTime.setFullYear(parseInt(dateArr[2]));
      $scope.exam.startTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.exam.startTime.setDate(parseInt(dateArr[0]));
    }

    if($scope.endDate instanceof Date) {
      $scope.exam.endTime.setFullYear($scope.endDate.getFullYear());
      $scope.exam.endTime.setMonth($scope.endDate.getMonth());
      $scope.exam.endTime.setDate($scope.endDate.getDate());
    } else {
      var dateArr = $scope.endDate.split('-');

      $scope.exam.endTime.setFullYear(parseInt(dateArr[2]));
      $scope.exam.endTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.exam.endTime.setDate(parseInt(dateArr[0]));
    }
  };

  $scope.createExam = function () {
    $scope.rebuildTime();

    if(courseData && courseData.id) {
      Course.prototype$__create__exams({id: courseData.id}, $scope.exam,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.exam.create.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.exam.create.successed'])
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
                                  .parent('#createEditExamHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
      });
    } else if(lectureData && lectureData.id) {
      Lecture.prototype$__create__exams({id: lectureData.id}, $scope.exam,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.exam.create.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.exam.create.successed'])
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
                                  .parent('#createEditExamHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
      });
    }
  	
  };

  $scope.editExam = function () {
    $scope.rebuildTime();

    Exam.prototype$updateAttributes({id: examData.id}, $scope.exam,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.exam.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.exam.edit.successed'])
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
                                .parent('#createEditExamHolderId');

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