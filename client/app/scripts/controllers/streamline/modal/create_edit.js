app.controller('CreateEditStreamlineModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'EMBEDDING_PROVIDERS', 'Course', 'Streamline', 'courseId', 'streamlineData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, EMBEDDING_PROVIDERS, Course, Streamline, courseId, streamlineData) {

  $scope.streamline = {
  	title: streamlineData ? streamlineData.title : '',
  	courseId: streamlineData ? streamlineData.courseId : courseId,
    description: streamlineData ? streamlineData.description : '',
    type: streamlineData ? streamlineData.type : 0,
  	link: streamlineData ? streamlineData.link : '',
    provider: streamlineData ? streamlineData.provider : '',
    embedCode: streamlineData ? streamlineData.embedCode : '',
    startTime: streamlineData ? new Date(streamlineData.startTime) : (new Date()),
    endTime: streamlineData ? new Date(streamlineData.endTime) : (new Date())
  };

  $scope.isEdit = streamlineData ? true : false;
  $scope.providers = EMBEDDING_PROVIDERS;
  $scope.selectedProvider = null;

  $scope.startDate = $scope.streamline.startTime; //$filter('date')($scope.streamline.startTime, 'dd-MM-yyyy');
  $scope.endDate = $scope.streamline.endTime; //$filter('date')($scope.streamline.endTime, 'dd-MM-yyyy');

  $scope.openDtStart = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.dtStartOpened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    class: 'datepicker'
  };

  $scope.openDtEnd = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.dtEndOpened = true;
  };

  $scope.rebuildTime = function() {
    // build time
    if($scope.startDate instanceof Date) {
      $scope.streamline.startTime.setFullYear($scope.startDate.getFullYear());
      $scope.streamline.startTime.setMonth($scope.startDate.getMonth());
      $scope.streamline.startTime.setDate($scope.startDate.getDate());
    } else {
      var dateArr = $scope.startDate.split('-');

      $scope.streamline.startTime.setFullYear(parseInt(dateArr[2]));
      $scope.streamline.startTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.streamline.startTime.setDate(parseInt(dateArr[0]));
    }

    if($scope.endDate instanceof Date) {
      $scope.streamline.endTime.setFullYear($scope.endDate.getFullYear());
      $scope.streamline.endTime.setMonth($scope.endDate.getMonth());
      $scope.streamline.endTime.setDate($scope.endDate.getDate());
    } else {
      var dateArr = $scope.endDate.split('-');

      $scope.streamline.endTime.setFullYear(parseInt(dateArr[2]));
      $scope.streamline.endTime.setMonth(parseInt(dateArr[1]) - 1);
      $scope.streamline.endTime.setDate(parseInt(dateArr[0]));
    }
  };

  $scope.setStreamlineType = function(val) {
    $scope.streamline.type = val;
  };

  function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    if(domain.toLowerCase().substring(0, 4) === 'www.') {
      domain = domain.substring(4, domain.length);
    }

    return domain.toLowerCase();
  }

  $scope.selectProvider = function(provider) {
    $scope.selectedProvider = provider;
  };

  $scope.setProviderByInput = function() {
    if(!$scope.streamline.link) return;

    // get domain from input
    var domain = extractDomain($scope.streamline.link);

    var isProviderSet = false;

    for (var i = 0; i < $scope.providers.length; i++) {
      if(domain === $scope.providers[i].domain) {
        $scope.selectProvider($scope.providers[i]);
        isProviderSet = true;
        $scope.streamline.provider = domain;
        break;
      }
    }

    if(!isProviderSet) {
      $scope.selectProvider(null);
      $scope.streamline.provider = '';
    }
  };

  $scope.createStreamline = function() {
    $scope.rebuildTime();

  	Course.prototype$__create__streamlines({id: courseId}, $scope.streamline,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.streamline.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.streamline.create.successed'])
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
                                .parent('#createEditStreamlineHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editStreamline = function() {
    $scope.rebuildTime();

    Streamline.prototype$updateAttributes({id: streamlineData.id}, $scope.streamline,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.streamline.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.streamline.edit.successed'])
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
                                .parent('#createEditStreamlineHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
        });
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  if($scope.isEdit) {
    $scope.setProviderByInput();
  }
}]);