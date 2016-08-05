app.controller('CreateEditCourseModalCtrl', ['$scope', '$rootScope', '$q', '$uibModalInstance', '$mdToast', '$translate', 'FileUploader', 'ATTACHMENT_PREFIX_COURSE', 'Course', 'Tag', 'Container', 'courseData', 
								 function($scope, $rootScope, $q, $uibModalInstance, $mdToast, $translate, FileUploader, ATTACHMENT_PREFIX_COURSE, Course, Tag, Container, courseData) {
  $scope.course = {
  	name: courseData ? courseData.name : '',
  	categoryId: courseData ? courseData.categoryId : $rootScope.categories[0].id,
  	description: courseData ? courseData.description : '',
    content: courseData ? courseData.content : '',
    courseContainerName: courseData ? courseData.courseContainerName : '',
    bannerFileName: courseData ? courseData.bannerFileName : ''
  };

  $scope.isEdit = courseData ? true : false;
  $scope.image = null;
  $scope.tags = [];
  $scope.currentSearchTags = [];
  $scope.currentCourseTags = courseData ? courseData.courseTags : [];

  if($scope.currentCourseTags.length > 0) {
    for (var i = 0; i < $scope.currentCourseTags.length; i++) {
      addTagIfNotExist($scope.currentCourseTags[i].tag);
    }
  }

  function addTagIfNotExist(tag) {
    if(!tag) return;
    var isExisting = false;
    for (var i = 0; i < $scope.tags.length; i++) {
      if(tag.name.toLowerCase() === $scope.tags[i].name.toLowerCase()) {
        isExisting = true;
        break;
      }
    }

    if(!isExisting) {
      $scope.tags.push(tag);
    }
  }

  function getCourseTagId(tagId) {
    for (var i = 0; i < $scope.currentCourseTags.length; i++) {
      if(tagId === $scope.currentCourseTags[i].tagId) {
        return $scope.currentCourseTags[i].id;
      }
    }

    return false;
  }

  function removeFromCurrentCourseTags(tagId) {
    var newCourseTags = [];
    for (var i = 0; i < $scope.currentCourseTags.length; i++) {
      if(tagId !== $scope.currentCourseTags[i].tagId) {
        newCourseTags.push($scope.currentCourseTags[i]);
      }
    }

    $scope.currentCourseTags = newCourseTags;
  }

  function isExistingTag(tagName) {
    for (var i = 0; i < $scope.tags.length; i++) {
      if(tagName.toLowerCase() === $scope.tags[i].name.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  function isInCurrentSearchTags(tagName) {
    for (var i = 0; i < $scope.currentSearchTags.length; i++) {
      if(tagName.toLowerCase() === $scope.currentSearchTags[i].name.toLowerCase()) {
        return $scope.currentSearchTags[i];
      }
    }

    return false;
  }

  $scope.addTag = function($tag) {
    if(!$tag || $tag && isExistingTag($tag.name)) return false;

    // check tag from list
    var currentSearchTag = isInCurrentSearchTags($tag.name);

    if(!currentSearchTag) {
      var newTag = {
        name: $tag.name
      };

      Tag.create(newTag, function(data) {
          addTagIfNotExist(data);

          var courseTagInfo = {
            courseId: courseData.id,
            tagId: data.id
          };

          return addTagToCourse(courseTagInfo);
        }, function(res) {
          $translate('action.ok').then(function(ok) {
              var toast = $mdToast.simple()
                                  .content(res.data.error.message)
                                  .action(ok)
                                  .highlightAction(false)
                                  .position('bottom left')
                                  .parent('#createEditCourseHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });

          return false;
      });
    } else {
      var courseTagInfo = {
        courseId: courseData.id,
        tagId: currentSearchTag.id
      };

      return addTagToCourse(courseTagInfo);
    }
  };

  function addTagToCourse(courseTagInfo) {
    Course.prototype$__create__courseTags({id: courseData.id}, courseTagInfo,
      function(data) {
        $scope.currentCourseTags.push(data);
        $translate(['action.ok', 'message.course.tag.add.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.course.tag.add.successed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditCourseHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });

        return true;
      }, function(res) {
        $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#createEditCourseHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });

        return false;
    });
  }

  function getExistingTagIndex(tagName) {
    for (var i = 0; i < $scope.tags.length; i++) {
      if(tagName.toLowerCase() === $scope.tags[i].name.toLowerCase()) {
        return i;
      }
    }

    return -1;
  }

  function removeTagByIndex(existingTagIndex) {
    var newTags = [];
    for (var i = 0; i < $scope.tags.length; i++) {
      if(i !== existingTagIndex) {
        newTags.push($scope.tags[i]);
      }
    }

    $scope.tags = newTags;
  }

  $scope.removeTag = function($tag) {
    if(!$tag) return false;

    var existingTagIndex = getExistingTagIndex($tag.name);

    if(existingTagIndex > -1) {
      var tagId = $scope.tags[existingTagIndex].id;
      var courseTagId = getCourseTagId(tagId);
      if(courseTagId) {
        Course.prototype$__destroyById__courseTags({id: courseData.id, fk: courseTagId},
          function(data) {
            // remove from current course tags
            removeFromCurrentCourseTags(tagId);

            // remove current tag
            removeTagByIndex(existingTagIndex);

            $translate(['action.ok', 'message.course.tag.remove.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.course.tag.remove.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left')
                                  .parent('#createEditCourseHolderId');

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
                                    .parent('#createEditCourseHolderId');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
        });
      }
    }
  };

  $scope.searchTags = function($query) {
    var deferred = $q.defer();
    Tag.find({filter: {name: {like: $query}}},function(data) {
        $scope.currentSearchTags = data;
        deferred.resolve(data);
      }, function(res) {
        $translate('action.ok').then(function(ok) {
          var toast = $mdToast.simple()
                              .content(res.data.error.message)
                              .action(ok)
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditCourseHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
        });

        deferred.reject(res);
    });

    return deferred.promise;
  };

  $scope.createCourse = function () {
  	Course.create($scope.course,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.course.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.course.create.successed'])
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
                                .parent('#createEditCourseHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editCourse = function () {
    Course.prototype$updateAttributes({id: courseData.id}, $scope.course,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.course.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.course.edit.successed'])
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
                                .parent('#createEditCourseHolderId');

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
    url: $rootScope.getUploadUrl($scope.course.courseContainerName)
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
    $scope.uploader.url = $rootScope.getUploadUrl($scope.course.courseContainerName);

    // Add a item to the queue
    if ($scope.course.bannerFileName) {
      $scope.image = $rootScope.getImage($scope.course.courseContainerName, $scope.course.bannerFileName);
      $scope.uploader.queue.push({
          file: {
              name: $scope.course.bannerFileName
          },
          progress: 100,
          isUploaded: true,
          isSuccess: true
      });
    }
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
                            .position('bottom left')
                            .parent('#createEditCourseHolderId');

        $mdToast.show(toast).then(function() {
          // click OK
        });
    });
  };

  uploader.onCompleteItem = function(item, response, status, headers) {
    //console.info('Complete', response, status, headers);
    if(status === 200) {
      var bannerInfo = {
        courseContainerName: response.result.files.file[0].container,
        bannerFileName: response.result.files.file[0].name
      };

      // delete file if exist
      if($scope.course.courseContainerName && $scope.course.bannerFileName) {
        $scope.deleteBanner($scope.course.bannerFileName).then(function() {
          $scope.updateBannerInfo(bannerInfo).then(function() {
            $translate(['action.ok', 'message.course.banner.upload.successed']).then(function(translations) {
                var toast = $mdToast.simple()
                                    .content(translations['message.course.banner.upload.successed'])
                                    .action(translations['action.ok'])
                                    .highlightAction(false)
                                    .position('bottom left')
                                    .parent('#createEditCourseHolderId');

                $mdToast.show(toast).then(function() {
                  // click OK
                });
            });
          });
        });
      } else {
        $scope.updateBannerInfo(bannerInfo).then(function() {
          $translate(['action.ok', 'message.course.banner.upload.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.course.banner.upload.successed'])
                                  .action(translations['action.ok'])
                                  .highlightAction(false)
                                  .position('bottom left')
                                  .parent('#createEditCourseHolderId');

              $mdToast.show(toast).then(function() {
                // click OK
              });
          });
        });
      }
    } else {
      $translate(['action.ok', 'message.course.banner.upload.failed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.course.banner.upload.failed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditCourseHolderId');

          $mdToast.show(toast).then(function() {
            // click OK
          });
      });
    }    
  };

  $scope.updateBannerInfo = function(bannerInfo) {
    var deferred = $q.defer();
    // update user info
    Course.prototype$updateAttributes({id: courseData.id}, bannerInfo,
      function(data) {
        $scope.course.courseContainerName = data.courseContainerName;
        $scope.course.bannerFileName = data.bannerFileName;

        $scope.image = $rootScope.getImage($scope.course.courseContainerName, $scope.course.bannerFileName);

        deferred.resolve(data);
      }, function(res) {
        $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#createEditCourseHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });

        deferred.reject(res);
    });

    return deferred.promise;
  };

  $scope.deleteBanner = function(fileName) {
    var deferred = $q.defer();
    Container.removeFile({container: $scope.course.courseContainerName, file: fileName},
      function(data) {
        $translate(['action.ok', 'message.course.banner.delete.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.course.banner.delete.successed'])
                              .action(translations['action.ok'])
                              .highlightAction(false)
                              .position('bottom left')
                              .parent('#createEditCourseHolderId');

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
                                  .position('bottom left')
                                  .parent('#createEditCourseHolderId');

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
      $scope.deleteBanner(item.file.name).then(function() {
        var bannerInfo = {
          bannerFileName: ''
        };

        $scope.updateBannerInfo(bannerInfo);
      });
    }

    //item.remove();
    uploader.queue.splice(item.$index, 1);

    $scope.image = null;
  };

  $scope.createContainerIfNotExist = function() {
    if(!$scope.course.courseContainerName) {
      $scope.course.courseContainerName = ATTACHMENT_PREFIX_COURSE + courseData.id;
    }

    // check and create container if not existing
    Container.getContainer({container: $scope.course.courseContainerName},
      function(data) {
        // container is existing
        $scope.initUploader();
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
          Container.createContainer({name: $scope.course.courseContainerName},
            function(data) {
              $scope.initUploader();
              $translate(['action.ok', 'message.container.create.successed']).then(function(translations) {
                var toast = $mdToast.simple()
                                    .content(translations['message.container.create.successed'])
                                    .action(translations['action.ok'])
                                    .highlightAction(false)
                                    .position('bottom left')
                                    .parent('#createEditCourseHolderId');

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
                                      .parent('#createEditCourseHolderId');

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
                                .parent('#createEditCourseHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
        }
    });
  };

  if($scope.isEdit) {
    $scope.createContainerIfNotExist();
  }

}]);