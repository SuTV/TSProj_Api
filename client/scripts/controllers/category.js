app.controller('CategoryCtrl', ['$scope', '$rootScope', '$location', '$q', '$uibModal', '$state', '$translate', '$mdToast', 'PAGING_LIMIT', 'Course',
                    function($scope, $rootScope, $location, $q, $uibModal, $state, $translate, $mdToast, PAGING_LIMIT, Course) {
  
  $scope.skip = 0;
  $scope.pagingLimit = PAGING_LIMIT;
  $scope.currentPage = 1;
  $scope.courses = [];
  $scope.isLoadingData = true;
  $scope.reachedLast = false;

  var pathname = window.location.pathname;
  var categoryIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 3) {
      categoryIdParam = pathnameArr[3];
      $rootScope.currentCategoryId = categoryIdParam;
    }
  }

  if(!categoryIdParam) {
    $translate(['action.ok','message.category.id_required']).then(function(translations) {
      var toast = $mdToast.simple()
                          .content(translations['message.category.id_required'])
                          .action(translations['action.ok'])
                          .highlightAction(false)
                          .position('bottom left');

      $mdToast.show(toast).then(function() {
        // click OK
      });
    });

    window.location.href = '/';
  }

  $scope.paging = function(skipValue) {
    Course.find({filter : {where: {categoryId: categoryIdParam}, order: 'created DESC',limit: $scope.pagingLimit, skip: skipValue, include: ['category', 'user', {courseTags: 'tag'}]}},function(data) {
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
    return $scope.paging($scope.skip);
  };

  // load courses
  $scope.paging($scope.skip);

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