app.controller('HomeCtrl', ['$scope', '$rootScope', '$q', '$uibModal', '$state', '$translate', '$mdToast', 'PAGING_LIMIT', 'Course', 'Streamline', 'User',
                    function($scope, $rootScope, $q, $uibModal, $state, $translate, $mdToast, PAGING_LIMIT, Course, Streamline, User) {
  
  $scope.skip = 0;
  $scope.pagingLimit = PAGING_LIMIT;
  $scope.currentPage = 1;
  $scope.courses = [];
  $scope.streamlines = [];
  $scope.users = [];
  $scope.isLoadingData = true;
  $scope.reachedLast = false;

  $scope.dateTimeNow = new Date();

  $scope.paging = function(skipValue) {
    Course.find({filter : {order: 'created DESC',limit: $scope.pagingLimit, skip: skipValue, include: ['category', 'user', {courseTags: 'tag'}]}},function(data) {
        if(data && data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            $scope.courses.push(data[i]);
          }
        }

        if(data.length < $scope.pagingLimit) {
          $scope.reachedLast = true;
        }

        $scope.isLoadingData = false;
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
  };

  $scope.nextPage = function() {
    if($scope.reachedLast) return;
    if($scope.isLoadingData) return;
    $scope.isLoadingData = true;

    $scope.currentPage++;
    $scope.skip += $scope.pagingLimit;
    $scope.paging($scope.skip);
  };

  // load courses
  $scope.paging($scope.skip);

  $scope.openCreateCourseModal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createCourseModalContent.html',
      controller: 'CreateEditCourseModalCtrl',
      size: 'lg',
      resolve: {
        courseData: function () {
          return null;
        }
      }
    });

    modalInstance.result.then(function (createdCourse) {
      $state.go('app.course', {id: createdCourse.id});
    }, function () {
      // dismissed
    });
  };

  $scope.loadStreamlines = function() {
    var whereClause = {or: [{type: 1}, {and: [{type: {neq: 1}}, {endTime: {gte: new Date()}}]}]};
    Streamline.find({filter : {where: whereClause, order: ['type DESC', 'startTime ASC', 'endTime ASC'], include: [{course: ['user']}]}},function(data) {
        $scope.streamlines = data;
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
  };

  $scope.loadStreamlines();

  $scope.loadTopUsers = function() {
    User.find({filter : {where: {isSystemAdmin: {neq: true}}, order: ['totalPoint DESC', 'created ASC']}},function(data) {
        $scope.users = data;
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
  };

  $scope.loadTopUsers();

  $scope.reloadCourseData = function(courseId) {
    var deferred = $q.defer();
    Course.findById({id: courseId, filter : {include: ['category', 'user', {courseTags: 'tag'}]}},function(data) {
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

  $scope.likeCourse = function(courseId, liked, currentReactionData, courseIndex) {
    $rootScope.doLikeCourse(courseId, liked, currentReactionData).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course by index
        $scope.courses[courseIndex] = courseData;
      });
    });
  };

  $scope.favorCourse = function(courseId, favored, currentReactionData, courseIndex) {
    $rootScope.doFavorCourse(courseId, favored, currentReactionData).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course by index
        $scope.courses[courseIndex] = courseData;
      });
    });
  };

  $scope.joinCourse = function(courseId, joined, currentReactionData, ev, courseIndex) {
    $rootScope.doJoinCourse(courseId, joined, currentReactionData, ev).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course by index
        $scope.courses[courseIndex] = courseData;
      });
    });
  };
}]);