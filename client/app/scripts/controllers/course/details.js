app.controller('CourseDetailsCtrl', ['$scope', '$rootScope', '$q', '$uibModal', '$state', '$mdToast', '$translate', '$mdDialog', 'Course', 'Container', 'Attachment',  
                             function($scope, $rootScope, $q, $uibModal, $state, $mdToast, $translate, $mdDialog, Course, Container, Attachment) {
  $scope.course = {};
  $scope.exams = [];
  $scope.plans = [];
  $scope.attachments = [];
  $scope.streamlines = [];

  var pathname = window.location.pathname;
  var courseIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 3) {
      courseIdParam = pathnameArr[3];
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
    Course.findById({id: courseIdParam, filter : {include: ['category', 'user', {courseTags: ['tag']} ]}},function(data) {
        $scope.course = data;

        deferred.resolve(data);
      }, function(res) {
        if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
          $state.go('404');
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

  $scope.likeCourse = function(courseId, liked, currentReactionData) {
    $rootScope.doLikeCourse(courseId, liked, currentReactionData).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course
        $scope.course = courseData;
      });
    });
  };

  $scope.favorCourse = function(courseId, favored, currentReactionData) {
    $rootScope.doFavorCourse(courseId, favored, currentReactionData).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course
        $scope.course = courseData;
      });
    });
  };

  $scope.joinCourse = function(courseId, joined, currentReactionData, ev) {
    $rootScope.doJoinCourse(courseId, joined, currentReactionData, ev).then(function() {
      $scope.reloadCourseData(courseId).then(function(courseData) {
        // update course
        $scope.course = courseData;
      });
    });
  };

  $scope.deleteCourse = function(ev) {
    $translate(['action.yes', 'action.no', 'message.course.delete.dialog_title', 'message.course.delete.dialog_content', 'message.course.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.course.delete.dialog_title'])
        .content(trans['message.course.delete.dialog_content'])
        .ariaLabel(trans['message.course.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete course
        Course.deleteById({id: $scope.course.id},
          function(data) {
            window.location.href = '/';
            $translate(['action.ok', 'message.course.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.course.delete.successed'])
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

  $scope.openCreateLectureModal = function (planId) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditLectureModalContent.html',
      controller: 'CreateEditLectureModalCtrl',
      size: 'lg',
      resolve: {
        planId: function () {
          return planId;
        },
        lectureData: function () {
          return null;
        }
      }
    });

    modalInstance.result.then(function (createdLecture) {
      $scope.loadCoursePlans();
    }, function () {
      // dismissed
    });
  };

  $scope.openCreateExamModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditExamModalContent.html',
      controller: 'CreateEditExamModalCtrl',
      size: 'lg',
      resolve: {
        courseData: function () {
          return $scope.course;
        },
        lectureData: function () {
          return null;
        },
        examData: function () {
          return null;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadCourseExams();
    }, function () {
      // dismissed
    });
  };

  $scope.openCreateEditAttachmentModal = function(attachmentData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditAttachmentModalContent.html',
      controller: 'CreateEditAttachmentModalCtrl',
      size: 'lg',
      resolve: {
        courseId: function () {
          return $scope.course.id;
        },
        lectureId: function () {
          return null;
        },
        attachmentData: function () {
          return attachmentData;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadCourseAttachments();
    }, function () {
      // dismissed
    });
  };

  $scope.openCreateEditPlanModal = function(planData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditPlanModalContent.html',
      controller: 'CreateEditPlanModalCtrl',
      size: 'lg',
      resolve: {
        courseData: function () {
          return $scope.course;
        },
        planData: function () {
          return planData;
        }
      }
    });

    modalInstance.result.then(function (createdPlan) {
      $scope.loadCoursePlans();
    }, function () {
      // dismissed
    });
  };

  $scope.deletePlan = function(ev, planId) {
    $translate(['action.yes', 'action.no', 'message.plan.delete.dialog_title', 'message.plan.delete.dialog_content', 'message.plan.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.plan.delete.dialog_title'])
        .content(trans['message.plan.delete.dialog_content'])
        .ariaLabel(trans['message.plan.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete delete
        Course.prototype$__destroyById__plans({id: $scope.course.id, fk: planId},
          function(data) {
            // reload plan
            $scope.loadCoursePlans();

            $translate(['action.ok', 'message.plan.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.plan.delete.successed'])
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

  $scope.doDeleteAttachmentInfo = function(attachmentId) {
    // delete attachment
    Attachment.deleteById({id: attachmentId},
      function(data) {
        // reload attachments
        $scope.loadCourseAttachments();

        $translate(['action.ok', 'message.attachment.delete.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.attachment.delete.successed'])
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
  }

  $scope.deleteAttachment = function(ev, attachment) {
    $translate(['action.yes', 'action.no', 'message.attachment.delete.dialog_title', 'message.attachment.delete.dialog_content', 'message.attachment.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.attachment.delete.dialog_title'])
        .content(trans['message.attachment.delete.dialog_content'])
        .ariaLabel(trans['message.attachment.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // check file is existing or not
        Container.getFile({container: attachment.containerName, file: attachment.fileName},
          function(data) {
            console.log('File exist');
            // delete file from server
            Container.removeFile({container: attachment.containerName, file: attachment.fileName},
              function(data) {
                // remove successed
                $scope.doDeleteAttachmentInfo(attachment.id);
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
          }, function(res) {
            if(res.data.error.status === 404 || res.data.error.statusCode === 404 || (res.data.error.status === 500 && res.data.error.code === 'ENOENT')) {
              // file not found
              $scope.doDeleteAttachmentInfo(attachment.id);
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
      }, function() {
        // click no
      });
    });
  };

  $scope.openCreateCourseModal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditCourseModalContent.html',
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

  $scope.openEditCourseModal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditCourseModalContent.html',
      controller: 'CreateEditCourseModalCtrl',
      size: 'lg',
      resolve: {
        courseData: function () {
          return $scope.course;
        }
      }
    });

    modalInstance.result.then(function (editedCourse) {
      $scope.loadCourseDetails();
    }, function () {
      // dismissed
      $scope.loadCourseDetails();
    });
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

  $scope.loadCourseExams = function() {
    Course.prototype$__get__exams({id: courseIdParam, filter : {order: ['startTime ASC', 'endTime ASC']}},function(data) {
        $scope.exams = data;
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

  $scope.loadCoursePlans = function() {
    Course.prototype$__get__plans({id: courseIdParam, filter : {order: ['startTime DESC', 'endTime DESC'], include: [{relation: 'lectures', filter: {order: ['sortNumber ASC']}}]}},function(data) {
        $scope.plans = data;
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

  $scope.loadCourseAttachments = function() {
    Course.prototype$__get__attachments({id: courseIdParam, filter : {order: 'created ASC'}},function(data) {
        $scope.attachments = data;
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

  $scope.loadCourseStreamlines = function() {
    var whereClause = {or: [{type: 1}, {and: [{type: {neq: 1}}, {endTime: {gte: new Date()}}]}]};
    Course.prototype$__get__streamlines({id: courseIdParam, filter : {where: whereClause, order: ['type DESC', 'startTime ASC', 'endTime ASC']}},function(data) {
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

  $scope.loadCourseDetails().then(function() {
    $scope.loadCourseStreamlines();
    $scope.loadCourseExams();
    $scope.loadCoursePlans();
    $scope.loadCourseAttachments();
  });

  $scope.buildPlanTime = function(startTime, endTime) {
    var startDate = new Date(startTime);
    var endDate = new Date(endTime);
    var result = '';

    var newStart = '';
    var newEnd = '';

    if(startDate.getMonth() !== endDate.getMonth() || startDate.getDate() !== endDate.getDate()) {
      if(startDate.getMonth() !== endDate.getMonth()) {
        newStart += '/' + (startDate.getMonth()+1);
      }

      newStart = startDate.getDate() + newStart;
    }

    newEnd = endDate.getDate() + '/' + (endDate.getMonth()+1);

    result = newStart !== '' ? (newStart + '-' + newEnd) : newEnd;

    return result;
  };
}]);