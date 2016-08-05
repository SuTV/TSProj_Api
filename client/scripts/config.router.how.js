'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG', 'BASE_URL',
      function ( $stateProvider,   $urlRouterProvider,  MODULE_CONFIG, BASE_URL ) {
        $urlRouterProvider
          .otherwise('/');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/',
            views: {
              '': {
                templateUrl: BASE_URL + '/views/layout.html'
              },
              'aside': {
                templateUrl: BASE_URL + '/views/aside.html'
              },
              'content': {
                templateUrl: BASE_URL + '/views/content.html'
              }
            }
          })
            .state('app.how', {
              url: '',
              templateUrl: BASE_URL + '/views/pages/how.html',
              data : { title: 'How to' }
            })
            .state('404', {
              url: '/404',
              templateUrl: BASE_URL + '/views/pages/404.html'
            })
            .state('505', {
              url: '/505',
              templateUrl: BASE_URL + '/views/pages/505.html'
            })
          ;

          function load(srcs, callback) {
            return {
                deps: ['$$animateJs', '$ocLazyLoad', '$q',
                  function( $$animateJs, $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            if(!module.module){
                              name = module.files;
                            }else{
                              name = module.name;
                            }
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }
      }
    ]
  );
