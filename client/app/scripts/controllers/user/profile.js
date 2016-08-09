app.controller('UserProfileCtrl', ['$scope', '$q', '$uibModal', '$state', '$translate', '$mdToast', 'PAGING_LIMIT', 'User', 'Course',
                    function($scope, $q, $uibModal, $state, $translate, $mdToast, PAGING_LIMIT, User, Course) {
  
  $scope.user = {};
  $scope.skip = 0;
  $scope.pagingLimit = PAGING_LIMIT;
  $scope.currentPage = 1;
  $scope.courses = [];
  $scope.isLoadingData = false;
  $scope.reachedLast = false;
  $scope.isFirstLoad = true;

  var pathname = window.location.pathname;
  var userIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 3) {
      userIdParam = pathnameArr[3];
    }
  }

  if(!userIdParam) {
    $translate(['action.ok','message.user.id_required']).then(function(translations) {
      var toast = $mdToast.simple()
                          .content(translations['message.user.id_required'])
                          .action(translations['action.ok'])
                          .highlightAction(false)
                          .position('bottom left');

      $mdToast.show(toast).then(function() {
        // click OK
      });
    });

    window.location.href = '/';
  }

  // get user info
  $scope.loadUserDetails = function() {
    var deferred = $q.defer();
    User.findById({id: userIdParam},function(data) {
        $scope.user = data;

        deferred.resolve(data);
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

        deferred.reject(res);
      });

    return deferred.promise;
  };

  $scope.paging = function(skipValue) {
    if(!$scope.isFirstLoad) {
      if($scope.pagingLimit !== PAGING_LIMIT + 1) {
        $scope.pagingLimit++;
      }
    }

    Course.find({filter : {where: {userId: userIdParam}, order: 'created DESC',limit: $scope.pagingLimit, skip: skipValue, include: ['category', 'user']}},function(data) {
        if(data && data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            $scope.courses.push(data[i]);
          }
        }

        if(data.length < $scope.pagingLimit) {
          $scope.reachedLast = true;
        }

        $scope.isLoadingData = false;
        if($scope.isFirstLoad) {
          $scope.isFirstLoad = false;
        }
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

  $scope.loadUserDetails().then(function() {
    // load courses
    $scope.paging($scope.skip);
  });

}]);