app.controller('CourseStreamlinesCtrl', ['$scope', '$sce', '$q', '$uibModal', '$state', '$mdToast', '$translate', '$stateParams', '$mdDialog', 'Course',  
                             function($scope, $sce, $q, $uibModal, $state, $mdToast, $translate, $stateParams, $mdDialog, Course) {
  $scope.course = {};
  $scope.streamlines = [];
  $scope.selectedStreamline = {};

  var pathname = window.location.pathname;
  var courseIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 4) {
      courseIdParam = pathnameArr[4];
    }
  }

  if(!courseIdParam) {
    $translate(['action.ok','message.course.id_required']).then(function(translations) {
      var toast = $mdToast.simple()
                          .content(translations['message.course.id_required'])
                          .action(translations['action.ok'])
                          .highlightAction(false)
                          .position('bottom left');

      $mdToast.show(toast).then(function() {
        // click OK
      });
    });

    window.location.href = '/';
  }

  $scope.loadCourseDetails = function() {
    var deferred = $q.defer();
    Course.findById({id: courseIdParam, filter : {include: ['category', 'user']}},function(data) {
        $scope.course = data;

        deferred.resolve(data);
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
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

  $scope.openCreateEditStreamlineModal = function(streamlineData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditStreamlineModalContent.html',
      controller: 'CreateEditStreamlineModalCtrl',
      size: 'lg',
      resolve: {
        courseId: function () {
          return $scope.course.id;
        },
        streamlineData: function () {
          return streamlineData;
        }
      }
    });

    modalInstance.result.then(function (savedPlan) {
      $scope.loadCourseStreamlines();
    }, function () {
      // dismissed
    });
  };

  $scope.deleteStreamline = function(ev, streamlineId) {
    $translate(['action.yes', 'action.no', 'message.streamline.delete.dialog_title', 'message.streamline.delete.dialog_content', 'message.streamline.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.streamline.delete.dialog_title'])
        .content(trans['message.streamline.delete.dialog_content'])
        .ariaLabel(trans['message.streamline.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete delete
        Course.prototype$__destroyById__streamlines({id: $scope.course.id, fk: streamlineId},
          function(data) {
            // reload streamlines
            $scope.loadCourseStreamlines();

            $translate(['action.ok', 'message.streamline.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.streamline.delete.successed'])
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

  $scope.loadCourseStreamlines = function() {
    var whereClause = {or: [{type: 1}, {and: [{type: {neq: 1}}, {endTime: {gte: new Date()}}]}]};
    Course.prototype$__get__streamlines({id: courseIdParam, filter : {where: whereClause, order: ['type DESC', 'startTime ASC', 'endTime ASC']}},function(data) {
        $scope.streamlines = data;

        if(data.length === 0) {
          return $state.go('app.course', {id: $scope.course.id});
        }

        if((!$scope.selectedStreamline || ($scope.selectedStreamline && !$scope.selectedStreamline.id)) && data.length > 0) {
          if(!$stateParams.streamlineId) {
            $scope.selectedStreamline = data[0];
          } else if($stateParams.streamlineId) {
            var isSelected = false;
            for (var i = 0; i < data.length; i++) {
              if($stateParams.streamlineId === data[i].id) {
                $scope.selectedStreamline = data[i];
                isSelected = true;
                break;
              }
            }

            if(!isSelected) {
              $scope.selectedStreamline = data[0];
            }
          }
        } else if($scope.selectedStreamline && $scope.selectedStreamline.id && data.length > 0) {
          var isSelected = false;
          for (var i = 0; i < data.length; i++) {
            if($scope.selectedStreamline.id === data[i].id) {
              $scope.selectedStreamline = data[i];
              isSelected = true;
              break;
            }
          }

          if(!isSelected) {
            $scope.selectedStreamline = data[0];
          }
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

  $scope.selectStreamline = function(streamlineData) {
    $scope.selectedStreamline = streamlineData;
  };

  $scope.getItemClass = function(streamlineId) {
    if($scope.selectedStreamline && $scope.selectedStreamline.id && $scope.selectedStreamline.id === streamlineId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  };

  $scope.getTrustHtml = function(input) {
    return $sce.trustAsHtml(input);
  };

  $scope.loadCourseDetails().then(function() {
    $scope.loadCourseStreamlines();
  });

}]);