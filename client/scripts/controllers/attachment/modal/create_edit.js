app.controller('CreateEditAttachmentModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'FileUploader', 'LoopBackAuth', 'API_DOMAIN', 'ATTACHMENT_PREFIX_COURSE', 'ATTACHMENT_PREFIX_LECTURE', 'Container', 'Attachment', 'Course', 'Lecture', 'attachmentData', 'courseId', 'lectureId', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, FileUploader, LoopBackAuth, API_DOMAIN, ATTACHMENT_PREFIX_COURSE, ATTACHMENT_PREFIX_LECTURE, Container, Attachment, Course, Lecture, attachmentData, courseId, lectureId) {
  $scope.attachment = {
  	name: attachmentData ? attachmentData.name : '',
  	description: attachmentData ? attachmentData.description : '',
    containerName: attachmentData ? attachmentData.containerName : '',
    fileName: attachmentData ? attachmentData.fileName : '',
    fileSize: attachmentData ? attachmentData.fileSize : 0,
    fileType: attachmentData ? attachmentData.fileType : '',
    courseId: courseId && courseId.trim().length > 0 ? courseId : null,
    lectureId: lectureId && lectureId.trim().length > 0 ? lectureId : null
  };

  $scope.isEdit = attachmentData && attachmentData.id ? true : false;

  if(courseId && courseId.trim().length > 0) {
    $scope.attachment.containerName = ATTACHMENT_PREFIX_COURSE + courseId;
  } else if (lectureId && lectureId.trim().length > 0) {
    $scope.attachment.containerName = ATTACHMENT_PREFIX_LECTURE + lectureId;
  }

  // check and create container if not existing
  Container.getContainer({container: $scope.attachment.containerName},
    function(data) {
      // container is existing
    }, function(res) {
      if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
        Container.createContainer({name: $scope.attachment.containerName},
          function(data) {
            $translate(['action.ok', 'message.container.create.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.container.create.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left')
                                  .parent('#createEditAttachmentHolderId');

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
                                    .parent('#createEditAttachmentHolderId');

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
                              .position('bottom left')
                              .parent('#createEditAttachmentHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });
      }
  });

  $scope.isEdit = attachmentData && attachmentData.id ? true : false;

  $scope.createAttachment = function () {
    if(courseId && courseId.trim().length > 0) {
    	Course.prototype$__create__attachments({id: courseId}, $scope.attachment,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.attachment.create.successed']).then(function(translations) {
  	        var toast = $mdToast.simple()
  	                            .content(translations['message.attachment.create.successed'])
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
                                  .parent('#createEditAttachmentHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
        	});
      });
    } else if (lectureId && lectureId.trim().length > 0) {
      Lecture.prototype$__create__attachments({id: lectureId}, $scope.attachment,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.attachment.create.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.attachment.create.successed'])
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
                                  .parent('#createEditAttachmentHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
      });
    }
  };

  $scope.editAttachment = function () {
    Attachment.prototype$updateAttributes({id: attachmentData.id}, $scope.attachment,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.attachment.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.attachment.edit.successed'])
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
                                .parent('#createEditAttachmentHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  // create a uploader with options
  var uploader = $scope.uploader = new FileUploader({
    scope: $scope, // to automatically update the html. Default: $rootScope
    queueLimit: 1,
    url: API_DOMAIN + '/api/containers/' + $scope.attachment.containerName + '/upload?access_token=' + LoopBackAuth.accessTokenId
  });

  // ADDING FILTERS
  uploader.filters.push({
      name: 'fFileLimit',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        return this.queue.length < 1;
      }
  });

  // Add a item to the queue
  if ($scope.isEdit) {
    uploader.queue.push({
        file: {
            name: $scope.attachment.fileName,
            size: $scope.attachment.fileSize
        },
        progress: 100,
        isUploaded: true,
        isSuccess: true
    });
  }

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
                            .position('bottom left')
                            .parent('#createEditAttachmentHolderId');

        $mdToast.show(toast).then(function() {
          // click OK
        });
    });
  };

  uploader.onCompleteItem = function(item, response, status, headers) {
    //console.info('Complete', response, status, headers);
    if(status === 200) {
      $scope.attachment.containerName = response.result.files.file[0].container;
      $scope.attachment.fileName = response.result.files.file[0].name;
      $scope.attachment.fileSize = response.result.files.file[0].size;
      $scope.attachment.fileType = response.result.files.file[0].type;

      $translate(['action.ok', 'message.attachment.upload.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.attachment.upload.successed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditAttachmentHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
      });
    } else {
      $translate(['action.ok', 'message.attachment.upload.failed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.attachment.upload.failed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditAttachmentHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
      });
    }
  };

  $scope.removeFile = function(item) {
    if(item.isUploaded && item.isSuccess) {
      //index of the file in the list is - item.$index
      Container.removeFile({container: $scope.attachment.containerName, file: item.file.name},
        function(data) {
          $translate(['action.ok', 'message.file.delete.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.file.delete.successed'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#createEditAttachmentHolderId');

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
                                  .parent('#createEditAttachmentHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
      });
    }

    //item.remove();
    uploader.queue.splice(item.$index, 1);
  }
  
}]);