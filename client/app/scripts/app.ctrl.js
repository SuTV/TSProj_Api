'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')  
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$document', '$location', '$rootScope', '$timeout', '$mdSidenav', '$mdColorPalette', '$anchorScroll', '$uibModal', '$mdToast', '$mdDialog', '$state', '$stateParams', '$q', 'LoopBackAuth', 'Category', 'Course', 'Reaction', 'User', 'USER_NO_AVATAR_IMG', 'NO_IMGAGE_IMG', 'NO_IMGAGE_IMG_RECTANGLE', 'EMBEDDING_PROVIDERS',
    function (             $scope,   $translate,   $localStorage,   $window,   $document,   $location,   $rootScope,   $timeout,   $mdSidenav,   $mdColorPalette,   $anchorScroll,   $uibModal ,  $mdToast,   $mdDialog,   $state,   $stateParams,   $q,   LoopBackAuth,   Category,   Course,   Reaction,   User,   USER_NO_AVATAR_IMG,   NO_IMGAGE_IMG,   NO_IMGAGE_IMG_RECTANGLE,   EMBEDDING_PROVIDERS) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');
      // config
      $scope.app = {
        name: 'TSProj',
        version: '1.0.0',
        // for chart colors
        color: {
          primary: '#3f51b5',
          info:    '#2196f3',
          success: '#4caf50',
          warning: '#ffc107',
          danger:  '#f44336',
          accent:  '#7e57c2',
          white:   '#ffffff',
          light:   '#f1f2f3',
          dark:    '#475069'
        },
        setting: {
          theme: {
            primary: 'indigo',
            accent: 'purple',
            warn: 'amber'
          },
          asideFolded: false
        },
        search: {
          content: '',
          show: false
        }
      }

      $scope.app.search.content = '';

      $scope.setTheme = function(theme){
        $scope.app.setting.theme = theme;
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.appSetting) ) {
        $scope.app.setting = $localStorage.appSetting;
      } else {
        $localStorage.appSetting = $scope.app.setting;
      }
      $scope.$watch('app.setting', function(){
        $localStorage.appSetting = $scope.app.setting;
      }, true);

      // angular translate
      $scope.langs = {en:'English'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
      };

      function isSmartDevice( $window ) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      };

      $scope.getColor = function(color, hue){
        if(color == "bg-dark" || color == "bg-white") return $scope.app.color[ color.substr(3, color.length) ];
        return rgb2hex($mdColorPalette[color][hue]['value']);
      }

      //Function to convert hex format to a rgb color
      function rgb2hex(rgb) {
        return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
      }

      function hex(x) {
        var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
      }

      $rootScope.$on('$stateChangeSuccess', openPage);

      function openPage() {
        $scope.app.search.content = '';
        $scope.app.search.show = false;
        $scope.closeAside();
        // goto top
        $location.hash('view');
        $anchorScroll();
        $location.hash('');
      }

      $scope.goBack = function () {
        $window.history.back();
      }

      $scope.openAside = function () {
        $timeout(function() { $mdSidenav('aside').open(); });
      }
      $scope.closeAside = function () {
        $timeout(function() { $document.find('#aside').length && $mdSidenav('aside').close(); });
      }

      $scope.doSearch = function () {
        //return $state.go('app.search', {name: $scope.app.search.content});

        window.location.href = '/search/#/?q=' + $scope.app.search.content;
      }

      $rootScope.currentUserPopover = {};
      $rootScope.openPopover = false;
      $rootScope.currentDataKeyEnterred = {};
      $rootScope.isOnPopover = false;
      $rootScope.currentCategoryId = null;

      $rootScope.callOpenUserPopover = function(isOpen, currentDataKeyEnterred, userId) {
        $rootScope.currentDataKeyEnterred = currentDataKeyEnterred;

        if(!isOpen) {
          $timeout(function() {
            $rootScope.openPopover = false;
          }, 500);
        } else {
          User.findById({id: userId},function(data) {
            $rootScope.currentUserPopover = data;
            $rootScope.openPopover = true;
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
        }
      };

      $rootScope.canOpenUserPopover = function(currentDataKeyEnterred) {
        return ($rootScope.openPopover || $rootScope.isOnPopover) && ($rootScope.currentDataKeyEnterred === currentDataKeyEnterred);
      };

      $rootScope.onPopoverUserViewDetails = function(isOn) {
        if(!isOn) {
          $rootScope.isOnPopover = false;
          $rootScope.currentDataKeyEnterred = {};
        } else {
          $rootScope.isOnPopover = true;
        }
      };

      $rootScope.getUploadUrl = function(url) {
        return '/api/containers/' + url + '/upload?access_token=' + LoopBackAuth.accessTokenId;
      };

      $scope.showUserNav = false;
      $rootScope.isAuthenticated = false;
      $rootScope.currentUserAvatar =  $rootScope.userNoAvatarImg = USER_NO_AVATAR_IMG;
      $rootScope.noImageImg = NO_IMGAGE_IMG;
      $rootScope.noImageImgRectangle = NO_IMGAGE_IMG_RECTANGLE;

      // check authentication
      $rootScope.currentUserData = LoopBackAuth.currentUserData;
      if(LoopBackAuth.accessTokenId && LoopBackAuth.currentUserId) {
        // validate token
        User.prototype$__findById__accessTokens({id: LoopBackAuth.currentUserId, fk: LoopBackAuth.accessTokenId}, function(data) {
          // get current user info
          User.findById({id: LoopBackAuth.currentUserId}, function(data) {
            $rootScope.currentUserData = data;
            $rootScope.isAuthenticated = true;

            $rootScope.updateAvatar();
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
          if(res.data.error.status === 404 || res.data.error.statusCode === 404) {
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
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
      }

      $rootScope.isMyOwnData = function(userId) {
        // check is own data or not
        return LoopBackAuth.accessTokenId && LoopBackAuth.currentUserId && LoopBackAuth.currentUserId === userId;
      };

      $rootScope.updateAvatar = function() {
        $rootScope.currentUserAvatar = $rootScope.currentUserData.userContainerName && $rootScope.currentUserData.avatarFileName ? $rootScope.apiDomain + '/api/containers/' + $rootScope.currentUserData.userContainerName + '/download/' + $rootScope.currentUserData.avatarFileName : $rootScope.userNoAvatarImg;
      };

      $rootScope.getUserAvatar = function(userContainerName, avatarFileName) {
        return userContainerName && avatarFileName ? $rootScope.apiDomain + '/api/containers/' + userContainerName + '/download/' + avatarFileName : $rootScope.userNoAvatarImg;
      };

      $rootScope.getImage = function(containerName, fileName) {
        return containerName && fileName ? $rootScope.apiDomain + '/api/containers/' + containerName + '/download/' + fileName : $rootScope.noImageImg;
      };

      $rootScope.getImageRectangle = function(containerName, fileName) {
        return containerName && fileName ? $rootScope.apiDomain + '/api/containers/' + containerName + '/download/' + fileName : $rootScope.noImageImgRectangle;
      };

      $rootScope.isSameDate = function(startTime, endTime) {
        var startDate = new Date(startTime);
        var endDate = new Date(endTime);

        return startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate();
      };

      $rootScope.getProviderInfoByDomain = function(domain) {
        var providers = EMBEDDING_PROVIDERS;
        for (var i = 0; i < providers.length; i++) {
          if(domain === providers[i].domain) {
            return providers[i];
          }
        }

        return null;
      };

      $rootScope.doLikeCourse = function(courseId, liked, currentReactionData) {
        var deferred = $q.defer();
        if(LoopBackAuth.currentUserId) {
          if(currentReactionData && currentReactionData.id) {
            var updateData = {
              status: (liked ? 0 : 1)
            };
            Reaction.prototype$updateAttributes({id: currentReactionData.id}, updateData,
              function(data) {
                $translate(['action.ok', 'message.course.like', 'message.course.unlike']).then(function(translations) {
                  var toast = $mdToast.simple()
                                      .content((liked ? translations['message.course.unlike'] : translations['message.course.like']))
                                      .action(translations['action.ok'])
                                      .highlightAction(false)
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
                });

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
          } else {
            var reaction = {
              courseId: courseId,
              userId: LoopBackAuth.currentUserId,
              type: 0,
              status: 1
            };

            Course.prototype$__create__reactions({id: courseId}, reaction,
              function(data) {
                $translate(['action.ok', 'message.course.like']).then(function(translations) {
                  var toast = $mdToast.simple()
                                      .content(translations['message.course.like'])
                                      .action(translations['action.ok'])
                                      .highlightAction(false)
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
                });

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
          }
        } else {
          $rootScope.openSigninModal(false, null);
          $translate(['action.ok', 'message.login.required']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.login.required'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          deferred.reject(false);
        }

        return deferred.promise;
      };

      $rootScope.doFavorCourse = function(courseId, favored, currentReactionData) {
        var deferred = $q.defer();
        if(LoopBackAuth.currentUserId) {
          if(currentReactionData && currentReactionData.id) {
            var updateData = {
              status: (favored ? 0 : 1)
            };
            Reaction.prototype$updateAttributes({id: currentReactionData.id}, updateData,
              function(data) {
                $translate(['action.ok', 'message.course.favor', 'message.course.unfavor']).then(function(translations) {
                  var toast = $mdToast.simple()
                                      .content((favored ? translations['message.course.unfavor'] : translations['message.course.favor']))
                                      .action(translations['action.ok'])
                                      .highlightAction(false)
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
                });

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
          } else {
            var reaction = {
              courseId: courseId,
              userId: LoopBackAuth.currentUserId,
              type: 2,
              status: 1
            };

            Course.prototype$__create__reactions({id: courseId}, reaction,
              function(data) {
                $translate(['action.ok', 'message.course.favor']).then(function(translations) {
                  var toast = $mdToast.simple()
                                      .content(translations['message.course.favor'])
                                      .action(translations['action.ok'])
                                      .highlightAction(false)
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
                });

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
          }
        } else {
          $rootScope.openSigninModal(false, null);
          $translate(['action.ok', 'message.login.required']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.login.required'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          deferred.reject(false);
        }

        return deferred.promise;
      };

      $rootScope.doJoinCourse = function(courseId, joined, currentReactionData, ev) {
        var deferred = $q.defer();
        if(LoopBackAuth.currentUserId) {
          if(currentReactionData && currentReactionData.id) {
            var updateData = {
              status: (joined ? 0 : 1)
            };
            if(joined) {
              $translate(['action.yes', 'action.no', 'message.course.leave.dialog_title', 'message.course.leave.dialog_content', 'message.course.leave.dialog_label']).then(function(trans) {
                var confirm = $mdDialog.confirm()
                  .title(trans['message.course.leave.dialog_title'])
                  .content(trans['message.course.leave.dialog_content'])
                  .ariaLabel(trans['message.course.leave.dialog_label'])
                  .ok(trans['action.yes'])
                  .cancel(trans['action.no'])
                  .targetEvent(ev);

                $mdDialog.show(confirm).then(function() {
                  // leave course
                  Reaction.prototype$updateAttributes({id: currentReactionData.id}, updateData,
                    function(data) {
                      $translate(['action.ok', 'message.course.leave.successed']).then(function(translations) {
                        var toast = $mdToast.simple()
                                            .content(translations['message.course.leave.successed'])
                                            .action(translations['action.ok'])
                                            .highlightAction(false)
                                            .position('bottom left');

                        $mdToast.show(toast).then(function() {
                          // click OK
                        });
                      });

                      deferred.resolve(data);
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

                      deferred.reject(res);
                  });
                }, function() {
                  // click no
                  deferred.reject(false);
                });
              });
            } else {
              Reaction.prototype$updateAttributes({id: currentReactionData.id}, updateData,
                function(data) {
                  $translate(['action.ok', 'message.course.join']).then(function(translations) {
                    var toast = $mdToast.simple()
                                        .content(translations['message.course.join'])
                                        .action(translations['action.ok'])
                                        .highlightAction(false)
                                        .position('bottom left');

                    $mdToast.show(toast).then(function() {
                      // click OK
                    });
                  });

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
            }
          } else {
            var reaction = {
              courseId: courseId,
              userId: LoopBackAuth.currentUserId,
              type: 1,
              status: 1
            };

            Course.prototype$__create__reactions({id: courseId}, reaction,
              function(data) {
                $translate(['action.ok', 'message.course.join']).then(function(translations) {
                  var toast = $mdToast.simple()
                                      .content(translations['message.course.join'])
                                      .action(translations['action.ok'])
                                      .highlightAction(false)
                                      .position('bottom left');

                  $mdToast.show(toast).then(function() {
                    // click OK
                  });
                });

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
          }
        } else {
          $rootScope.openSigninModal(false, null);
          $translate(['action.ok', 'message.login.required']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.login.required'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          deferred.reject(false);
        }

        return deferred.promise;
      };

      $rootScope.openSigninModal = function (isResetPwd, accessToken) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'signinModalContent.html',
          controller: 'SigninModalCtrl',
          resolve: {
            isResetPwd: function() {
              return isResetPwd;
            },
            accessToken: function() {
              return accessToken;
            }
          }
        });

        modalInstance.result.then(function (userInfo) {
          if(userInfo && userInfo.user) {
            $rootScope.currentUserData = userInfo.user;
            $rootScope.isAuthenticated = true;
            $state.transitionTo($state.current, $stateParams, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
        }, function () {
          // dismissed
        });
      };

      $scope.openFeedbackModal = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'feedbackModalContent.html',
          controller: 'FeedbackModalCtrl',
          resolve: {
          }
        });

        modalInstance.result.then(function (feedbackData) {
          // success
        }, function () {
          // dismissed
        });
      };

      $scope.openReportModal = function (courseData) {
        if(LoopBackAuth.currentUserId) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'reportModalContent.html',
            controller: 'ReportModalCtrl',
            resolve: {
              courseData: function() {
                return courseData;
              }
            }
          });

          modalInstance.result.then(function (reportData) {
            // success
          }, function () {
            // dismissed
          });
        } else {
          $rootScope.openSigninModal(false, null);
          $translate(['action.ok', 'message.login.required']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.login.required'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
        }
      };

      $scope.showHideUserNav =  function(firstLoad) {
        if(firstLoad) {
          $scope.showUserNav = $state.includes('app.user') || $state.includes('app.user_settings');
        } else {
          $scope.showUserNav = !$scope.showUserNav;
        }
      };

      $scope.doLogout = function() {
        User.logout(function(data) {
          $scope.showUserNav = false;
          $rootScope.isAuthenticated = false;
          $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: true
          });
          $translate(['action.ok', 'message.logout.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.logout.successed'])
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

      $rootScope.categories = [];

      Category.find({filter : {order: 'sortNumber ASC'}},function(data) {
          $rootScope.categories = data;
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

      $scope.checkIfResetPwd = function() {
        // check is reset pwd request
        if($location.search() && $location.search().resetPassword && $location.search().accessToken) {
          $rootScope.openSigninModal(true, $location.search().accessToken);
        }
      };
    }
  ])
  .controller('SigninModalCtrl', ['$scope', '$uibModalInstance', '$mdToast', '$translate', 'LoopBackAuth', 'User', 'isResetPwd', 'accessToken', 
                         function( $scope, $uibModalInstance, $mdToast, $translate, LoopBackAuth, User, isResetPwd, accessToken) {
    $scope.rememberMe = true;
    
    $scope.credentials = {
      email: '',
      password:''
    };
    
    $scope.reqResetPwd = {
      password: '',
      confirmation: ''
    };
    
    $scope.resetPwd = {
      email: ''
    };

    $scope.signUpInfo = {
      email: '',
      password: ''
    };

    $scope.doSignIn = function () {
      User.login({ rememberMe: $scope.rememberMe }, $scope.credentials,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.login.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.login.successed'])
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
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.doSignUp = function () {
      User.create($scope.signUpInfo,
        function(data) {
          $translate(['action.ok', 'message.sign_up.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.sign_up.successed'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          $scope.viewSignIn();
        }, function(res) {
          $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.requestResetPassword = function() {
      User.resetPassword($scope.resetPwd,
        function(data) {
          $uibModalInstance.close(false);

          $translate(['action.ok', 'message.reset_password.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.reset_password.successed'])
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
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.submitNewPassword = function() {
      // clear storage
      LoopBackAuth.clearStorage();
      LoopBackAuth.clearUser();
      // set access token
      LoopBackAuth.accessTokenId = accessToken;
      User.requestNewPassword($scope.reqResetPwd,
        function(data) {
          $translate(['action.ok', 'message.request_new_password.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.request_new_password.successed'])
                                .action(translations['action.ok'])
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });

          $scope.viewSignIn();

          // clear storage
          LoopBackAuth.clearStorage();
          LoopBackAuth.clearUser();
        }, function(res) {
          $translate('action.ok').then(function(ok) {
            var toast = $mdToast.simple()
                                .content(res.data.error.message)
                                .action(ok)
                                .highlightAction(false)
                                .position('bottom left')
                                .parent('#signInHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.isViewSignIn = isResetPwd ? false : true;
    $scope.isViewForgotPwd = false;
    $scope.isViewSignUp = false;
    $scope.isViewResetPwdConfirm = isResetPwd;

    $scope.viewSignIn = function() {
      $scope.isViewSignIn = true;
      $scope.isViewForgotPwd = false;
      $scope.isViewSignUp = false;
      $scope.isViewResetPwdConfirm = false;
    };

    $scope.viewForgotPwd = function() {
      $scope.isViewSignIn = false;
      $scope.isViewForgotPwd = true;
      $scope.isViewSignUp = false;
      $scope.isViewResetPwdConfirm = false;
    };

    $scope.viewSignUp = function() {
      $scope.isViewSignIn = false;
      $scope.isViewForgotPwd = false;
      $scope.isViewSignUp = true;
      $scope.isViewResetPwdConfirm = false;
    };
  }])
  .controller('FeedbackModalCtrl', ['$scope', '$uibModalInstance', '$mdToast', '$translate', 'LoopBackAuth', 'Feedback',
                         function( $scope, $uibModalInstance, $mdToast, $translate, LoopBackAuth, Feedback) {    
    $scope.feedback = {
      title: '',
      content:''
    };

    if(LoopBackAuth.currentUserId) {
      $scope.feedback.userId = LoopBackAuth.currentUserId;
    }

    $scope.sendFeedback = function () {
      Feedback.create($scope.feedback,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.feedback.send.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.feedback.send.successed'])
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
                                .parent('#feedbackHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }])
  .controller('ReportModalCtrl', ['$scope', '$uibModalInstance', '$mdToast', '$translate', 'LoopBackAuth', 'Report', 'courseData',
                         function( $scope, $uibModalInstance, $mdToast, $translate, LoopBackAuth, Report, courseData) {    
    
    $scope.reasons = [
      'Spam',
      'Fake',
      'Other'
      ];

    $scope.report = {
      reason: $scope.reasons[0],
      content:'',
      status: 0,
      courseId: courseData.id,
      userId: LoopBackAuth.currentUserId
    };

    $scope.course = courseData;

    $scope.sendReport = function () {
      Report.create($scope.report,
        function(data) {
          $uibModalInstance.close(data);
          $translate(['action.ok', 'message.report.send.successed']).then(function(translations) {
            var toast = $mdToast.simple()
                                .content(translations['message.report.send.successed'])
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
                                .parent('#reportHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
          });
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
