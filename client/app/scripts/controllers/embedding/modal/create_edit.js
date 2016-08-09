app.controller('CreateEditEmbeddingModalCtrl', ['$scope', '$rootScope', '$uibModalInstance', '$mdToast', '$translate', 'EMBEDDING_PROVIDERS', 'Lecture', 'Embedding', 'lectureId', 'embeddingData', 
								 function($scope, $rootScope, $uibModalInstance, $mdToast, $translate, EMBEDDING_PROVIDERS, Lecture, Embedding, lectureId, embeddingData) {

  $scope.embedding = {
  	title: embeddingData ? embeddingData.title : '',
  	lectureId: embeddingData ? embeddingData.lectureId : lectureId,
  	link: embeddingData ? embeddingData.link : '',
    provider: embeddingData ? embeddingData.provider : '',
    embedCode: embeddingData ? embeddingData.embedCode : '',
    mimeType: embeddingData ? embeddingData.mimeType : '',
    lengthInSeconds: embeddingData ? embeddingData.lengthInSeconds : 0,
    size: embeddingData ? embeddingData.size : 0,
    sortNumber: embeddingData ? embeddingData.sortNumber : 0
  };

  $scope.isEdit = embeddingData ? true : false;
  $scope.providers = EMBEDDING_PROVIDERS;
  $scope.selectedProvider = null;

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
    if(!$scope.embedding.link) return;

    // get domain from input
    var domain = extractDomain($scope.embedding.link);

    var isProviderSet = false;

    for (var i = 0; i < $scope.providers.length; i++) {
      if(domain === $scope.providers[i].domain) {
        $scope.selectProvider($scope.providers[i]);
        isProviderSet = true;
        $scope.embedding.provider = domain;
        break;
      }
    }

    if(!isProviderSet) {
      $scope.selectProvider(null);
      $scope.embedding.provider = '';
    }
  };

  $scope.createEmbedding = function() {
  	Lecture.prototype$__create__embeddings({id: lectureId}, $scope.embedding,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.embedding.create.successed']).then(function(translations) {
	        var toast = $mdToast.simple()
	                            .content(translations['message.embedding.create.successed'])
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
                                .parent('#createEditEmbeddingHolderId');

            $mdToast.show(toast).then(function() {
              // click OK
            });
      	});
    });
  };

  $scope.editEmbedding = function() {
    Embedding.prototype$updateAttributes({id: embeddingData.id}, $scope.embedding,
      function(data) {
        $uibModalInstance.close(data);
        $translate(['action.ok', 'message.embedding.edit.successed']).then(function(translations) {
          var toast = $mdToast.simple()
                              .content(translations['message.embedding.edit.successed'])
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
                                .parent('#createEditEmbeddingHolderId');

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