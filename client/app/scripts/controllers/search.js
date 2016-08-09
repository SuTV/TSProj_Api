app.controller('SearchCtrl', ['$scope', '$rootScope', '$q', '$stateParams', '$uibModal', '$state', '$translate', '$mdToast', 'PAGING_LIMIT', 'Course',
                    function($scope, $rootScope, $q, $stateParams, $uibModal, $state, $translate, $mdToast, PAGING_LIMIT, Course) {
  
  $scope.skip = 0;
  $scope.pagingLimit = PAGING_LIMIT;
  $scope.currentPage = 1;
  $scope.courses = [];
  $scope.isLoadingData = true;
  $scope.reachedLast = false;
  $scope.currentSelectedCategoryName = '';
  $scope.currentSelectedCategoryId = '';
  $scope.searchBy = $stateParams.q ? $stateParams.q : '';

  $scope.textSearchAll = '';
  $translate('option.all').then(function(all) {
    $scope.textSearchAll = all;
    $scope.currentSelectedCategoryName = $scope.textSearchAll;
  });

  $scope.paging = function(skipValue, name, categoryId) {
    // caculate inputted params
    var whereClause = {};
    if(categoryId && categoryId.trim().length > 0 && (!name || name.trim().length === 0) ) {
      whereClause = {categoryId: categoryId};
    } else if (!categoryId && name && name.trim().length > 0) {
      whereClause = {or: [{name: {like: name}}, {description: {like: name}}]};
    } else if (categoryId && categoryId.trim().length > 0 && name && name.trim().length > 0) {
      whereClause = {and: [{categoryId: categoryId}, {or: [{name: {like: name}}, {description: {like: name}}]}]};
    }

    Course.find({filter : {where: whereClause, order: 'created DESC',limit: $scope.pagingLimit, skip: skipValue, include: ['category', 'user', {courseTags: 'tag'}]}},function(data) {
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
    return $scope.paging($scope.skip, $scope.searchBy, $scope.currentSelectedCategoryId);
  };

  $scope.resetParams = function() {
    $scope.courses = [];
    $scope.skip = 0;
    $scope.currentPage = 1;
    $scope.isLoadingData = true;
    $scope.reachedLast = false;
  };

  $scope.chooseCategory = function(categoryId) {
    if(categoryId) {
      for (var i = 0; i < $rootScope.categories.length; i++) {
        if($rootScope.categories[i].id === categoryId) {
          $scope.currentSelectedCategoryId = categoryId;
          $scope.currentSelectedCategoryName = $rootScope.categories[i].name;
          break;
        }
      }
    } else {
      $scope.currentSelectedCategoryId = '';
      $scope.currentSelectedCategoryName = $scope.textSearchAll;
    }

    $scope.resetParams();    
    return $scope.paging($scope.skip, $scope.searchBy, categoryId);
  };

  $scope.doSearch = function() {
    $scope.resetParams();
    return $scope.paging($scope.skip, $scope.searchBy, $scope.currentSelectedCategoryId);
  };

  // load courses
  $scope.paging($scope.skip, $stateParams.name, null);

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