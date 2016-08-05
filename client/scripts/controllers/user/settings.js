app.controller('UserSettingsCtrl', ['$scope', '$q', '$rootScope', '$uibModal', '$state', '$translate', '$mdToast', 'FileUploader', 'ATTACHMENT_PREFIX_USER', 'Container', 'User', 'Course',
                    function($scope, $q, $rootScope, $uibModal, $state, $translate, $mdToast, FileUploader, ATTACHMENT_PREFIX_USER, Container, User, Course) {

  $scope.user = {};
  $scope.croppedImage = '';
  $scope.image = $rootScope.currentUserAvatar ? $rootScope.currentUserAvatar : null;

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

    return $state.go('app.home');
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

  $scope.createUserContainerIfNotExist = function() {
    if(!$scope.user.userContainerName) {
      $scope.user.userContainerName = ATTACHMENT_PREFIX_USER + $scope.user.id;
    }

    // check and create container if not existing
    Container.getContainer({container: $scope.user.userContainerName},
      function(data) {
        // container is existing
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
          Container.createContainer({name: $scope.user.userContainerName},
            function(data) {
              $translate(['action.ok', 'message.container.create.successed']).then(function(translations) {
                var toast = $mdToast.simple()
                                    .content(translations['message.container.create.successed'])
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
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
              });
          });
        } else {
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
        }
    });
  };

  // create a uploader with options
  var uploader = $scope.uploader = new FileUploader({
    scope: $scope, // to automatically update the html. Default: $rootScope
    queueLimit: 1,
    url: $rootScope.getUploadUrl($scope.user.userContainerName)
  });

  // ADDING FILTERS
  uploader.filters.push({
      name: 'fFileLimit',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        return this.queue.length < 1;
      }
  });

  $scope.initUploader = function() {
    // reset userContainerName in uploader
    $scope.uploader.url = $rootScope.getUploadUrl($scope.user.userContainerName);

    // Add a item to the queue
    if ($scope.user.avatarFileName) {
      $scope.uploader.queue.push({
          file: {
              name: $scope.user.avatarFileName
          },
          progress: 100,
          isUploaded: true,
          isSuccess: true
      });
    }
  };

  /**
   * Show preview with cropping
   */
  uploader.onAfterAddingFile = function(item) {
    $scope.croppedImage = '';
    var reader = new FileReader();
    reader.onload = function(event) {
      $scope.$apply(function(){
        $scope.image = event.target.result;
      });
    };
    reader.readAsDataURL(item._file);
  };

  /**
   * Upload Blob (cropped image) instead of file.
   * @see
   *   https://developer.mozilla.org/en-US/docs/Web/API/FormData
   *   https://github.com/nervgh/angular-file-upload/issues/208
   */
  uploader.onBeforeUploadItem = function(item) {
    var blob = dataURItoBlob($scope.croppedImage);
    item._file = blob;
  };

  /**
   * Converts data uri to Blob. Necessary for uploading.
   * @see
   *   http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
   * @param  {String} dataURI
   * @return {Blob}
   */
  var dataURItoBlob = function(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var array = [];
    for(var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: mimeString});
  };

  uploader.onSuccessItem = function(item, response, status, headers) {
    //console.info('Success', response, status, headers);
    $scope.$broadcast('uploadCompleted', item);
  };

  uploader.onErrorItem = function(item, response, status, headers) {
    //console.info('Error', response, status, headers);
    $translate('action.ok').then(function(ok) {
        var toast = $mdToast.simple()
                            .content(response.error.message)
                            .action(ok)
                            .highlightAction(false)
                            .position('bottom left');

        $mdToast.show(toast).then(function() {
          // click OK
        });
    });
  };

  uploader.onCompleteItem = function(item, response, status, headers) {
    //console.info('Complete', response, status, headers);
    if(status === 200) {
      var avatarInfo = {
        userContainerName: response.result.files.file[0].container,
        avatarFileName: response.result.files.file[0].name
      };

      // delete file if exist
      if($scope.user.userContainerName && $scope.user.avatarFileName) {
        $scope.deleteAvatar($scope.user.avatarFileName).then(function() {
          $scope.updateAvatarInfo(avatarInfo).then(function() {
            $translate(['action.ok', 'message.user.avatar.upload.successed']).then(function(translations) {
                var toast = $mdToast.simple()
                                    .content(translations['message.user.avatar.upload.successed'])
                                    .action(translations['action.ok'])
                                    .highlightAction(false)
                                    .position('bottom left');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
          });
        });
      } else {
        $scope.updateAvatarInfo(avatarInfo).then(function() {
          $translate(['action.ok', 'message.user.avatar.upload.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.user.avatar.upload.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
        });
      }
    } else {
      $translate(['action.ok', 'message.user.avatar.upload.failed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.user.avatar.upload.failed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left');

          $mdToast.show(toast).then(function() {
            // click OK
          });
      });
    }    
  };

  $scope.updateAvatarInfo = function(avatarInfo) {
    var deferred = $q.defer();
    // update user info
    User.prototype$updateAttributes({id: $scope.user.id}, avatarInfo,
      function(data) {
        $rootScope.currentUserData.userContainerName = $scope.user.userContainerName = data.userContainerName;
        $rootScope.currentUserData.avatarFileName = $scope.user.avatarFileName = data.avatarFileName;

        $rootScope.updateAvatar();

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

  $scope.deleteAvatar = function(fileName) {
    var deferred = $q.defer();
    Container.removeFile({container: $scope.user.userContainerName, file: fileName},
      function(data) {
        $translate(['action.ok', 'message.user.avatar.delete.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.user.avatar.delete.successed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });

        deferred.resolve(data);
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode === 404 || (res.data.error.status === 500 && res.data.error.code === 'ENOENT')) {
          deferred.resolve(res);
        } else {
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
        }
    });

    return deferred.promise;
  };

  $scope.removeFile = function(item) {
    if(item.isUploaded && item.isSuccess) {
      //index of the file in the list is - item.$index
      $scope.deleteAvatar(item.file.name).then(function() {
        var avatarInfo = {
          avatarFileName: ''
        };

        $scope.updateAvatarInfo(avatarInfo);
      });
    }

    //item.remove();
    uploader.queue.splice(item.$index, 1);

    $scope.croppedImage = '';
    $scope.image = null;
  };

  $scope.updateUserInfo = function() {
    User.prototype$updateAttributes({id: $scope.user.id}, $scope.user,
      function(data) {
        $scope.user = data;
        
        $rootScope.currentUserData.firstName = data.firstName;
        $rootScope.currentUserData.lastName = data.lastName;
        $rootScope.currentUserData.phone = data.phone;
        $rootScope.currentUserData.userContainerName = data.userContainerName;
        $rootScope.currentUserData.avatarFileName = data.avatarFileName;
        $rootScope.currentUserData.username = data.username;
        $rootScope.currentUserData.email = data.email;

        $translate(['action.ok', 'message.user.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.user.edit.successed'])
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
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.loadUserDetails().then(function() {
    $scope.createUserContainerIfNotExist();
    $scope.initUploader();
  });

}]);