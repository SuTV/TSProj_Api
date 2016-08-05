app.controller('LectureDetailsCtrl', ['$scope', '$sce', '$q', '$uibModal', '$state', '$mdToast', '$translate', '$mdDialog', 'Course', 'Lecture', 'Container', 'Attachment', 'Embedding', 
                              function($scope, $sce, $q, $uibModal, $state, $mdToast, $translate, $mdDialog, Course, Lecture, Container, Attachment, Embedding) {
  $scope.lecture = {};
  $scope.course = {};
  $scope.exam = {};
  $scope.plans = [];
  $scope.embeddings = [];
  $scope.attachments = [];
  $scope.nextPlan = {};
  $scope.previousPlan = {};
  $scope.currentPlan = {};

  $scope.activeEmbeddingIndex = 0;

  var pathname = window.location.pathname;
  var lectureIdParam = null;
  if(pathname) {
    var pathnameArr = pathname.split('/');
    if(pathnameArr.length > 3) {
      lectureIdParam = pathnameArr[3];
    }
  }

  if(!lectureIdParam) {
    $translate(['action.ok','message.lecture.not_found']).then(function(translations) {
      var toast = $mdToast.simple()
                          .content(translations['message.lecture.not_found'])
                          .action(translations['action.ok'])
                          .highlightAction(false)
                          .position('bottom left');

      $mdToast.show(toast).then(function() {
        // click OK
      });
    });

    window.location.href = '/';
  }

  $scope.loadLectureDetails = function() {
    var deferred = $q.defer();
    Lecture.findById({id: lectureIdParam, filter: {include: ['plan', 'exams', 'embeddings']}},function(data) {
        $scope.lecture = data;

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

  $scope.loadCourseDetails = function(courseId) {
    Course.findById({id: courseId, filter : {include: ['category', 'user']}},function(data) {
        $scope.course = data;
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
    });
  };

  $scope.loadCoursePlans = function(courseId) {
    Course.prototype$__get__plans({id: courseId, filter : {order: ['startTime DESC', 'endTime DESC'], include: [{relation: 'lectures', filter: {order: ['sortNumber ASC']}}]}},function(data) {
        $scope.plans = data;

        // get next, current and previous plan
        var currentPlanIndex = 0;
        for (var i = 0; i < data.length; i++) {
          if(data[i].id === $scope.lecture.plan.id) {
            currentPlanIndex = i;
            break;
          }
        }

        if(currentPlanIndex > 0) {
          $scope.nextPlan = data[currentPlanIndex - 1];
        }

        $scope.currentPlan = data[currentPlanIndex];

        if(currentPlanIndex < data.length - 1) {
          $scope.previousPlan = data[currentPlanIndex + 1];
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

  $scope.loadLectureAttachments = function() {
    var lectureId = $scope.lecture && $scope.lecture.id ? $scope.lecture.id : lectureIdParam;
    Lecture.prototype$__get__attachments({id: lectureId, filter : {order: 'created ASC'}},function(data) {
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

  $scope.loadLectureEmbeddings = function() {
    var lectureId = $scope.lecture && $scope.lecture.id ? $scope.lecture.id : lectureIdParam;
    Lecture.prototype$__get__embeddings({id: lectureId, filter : {order: 'sortNumber ASC'}},function(data) {
        $scope.embeddings = data;
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

  $scope.deleteLecture = function(ev) {
    $translate(['action.yes', 'action.no', 'message.lecture.delete.dialog_title', 'message.lecture.delete.dialog_content', 'message.lecture.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.lecture.delete.dialog_title'])
        .content(trans['message.lecture.delete.dialog_content'])
        .ariaLabel(trans['message.lecture.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete lecture
        Lecture.deleteById({id: $scope.lecture.id},
          function(data) {
            $state.go('app.course', {id: $scope.lecture.plan.courseId});
            $translate(['action.ok', 'message.lecture.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.lecture.delete.successed'])
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

  $scope.openCreateEditLectureModal = function (planId, lectureData, isCurrentLecture) {
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
          return lectureData;
        }
      }
    });

    modalInstance.result.then(function (createdLecture) {
      if(isCurrentLecture) {
        $scope.loadLectureDetails();
      }
      $scope.loadCoursePlans($scope.lecture.plan.courseId);
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
          return null;
        },
        lectureData: function () {
          return $scope.lecture;
        },
        examData: function () {
          return null;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.exam = createdExam;
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
          return null;
        },
        lectureId: function () {
          return $scope.lecture.id;
        },
        attachmentData: function () {
          return attachmentData;
        }
      }
    });

    modalInstance.result.then(function (createdExam) {
      $scope.loadLectureAttachments();
    }, function () {
      // dismissed
    });
  };

  $scope.openCreateEditEmbeddingModal = function(embeddingData) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'createEditEmbeddingModalContent.html',
      controller: 'CreateEditEmbeddingModalCtrl',
      size: 'lg',
      resolve: {
        lectureId: function () {
          return $scope.lecture.id;
        },
        embeddingData: function () {
          return embeddingData;
        }
      }
    });

    modalInstance.result.then(function (savedEmbedding) {
      $scope.loadLectureEmbeddings();
    }, function () {
      // dismissed
    });
  };

  $scope.deleteEmbedding = function(ev, embeddingId) {
    $translate(['action.yes', 'action.no', 'message.embedding.delete.dialog_title', 'message.embedding.delete.dialog_content', 'message.embedding.delete.dialog_label']).then(function(trans) {
      var confirm = $mdDialog.confirm()
        .title(trans['message.embedding.delete.dialog_title'])
        .content(trans['message.embedding.delete.dialog_content'])
        .ariaLabel(trans['message.embedding.delete.dialog_label'])
        .ok(trans['action.yes'])
        .cancel(trans['action.no'])
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        // delete embedding
        Embedding.deleteById({id: embeddingId},
          function(data) {
            $scope.loadLectureEmbeddings();
            $translate(['action.ok', 'message.embedding.delete.successed']).then(function(translations) {
              var toast = $mdToast.simple()
                                  .content(translations['message.embedding.delete.successed'])
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
        $scope.loadLectureAttachments();

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

  $scope.getTrustHtml = function(input) {
    return $sce.trustAsHtml(input);
  };

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

  $scope.loadLectureDetails().then(function() {
    if($scope.lecture.exams.length > 0) {
      $scope.exam = $scope.lecture.exams[0];
    }

    $scope.loadCourseDetails($scope.lecture.plan.courseId);
    $scope.loadCoursePlans($scope.lecture.plan.courseId);
    $scope.loadLectureEmbeddings();
    $scope.loadLectureAttachments();
  });
}]);