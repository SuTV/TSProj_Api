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
    [          '$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG',
      function ( $stateProvider,   $urlRouterProvider,  MODULE_CONFIG ) {
        $urlRouterProvider
          .otherwise('/');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/',
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              }
            }
          })
            .state('app.course', {
              url: '',
              templateUrl: 'views/pages/course_details.html',
              data : { title: 'Course details' },
              controller: 'CourseDetailsCtrl',
              resolve: load(['scripts/controllers/course/details.js', 
                             'scripts/controllers/course/modal/create_edit.js', 
                             'scripts/controllers/exam/modal/create_edit.js', 
                             'scripts/controllers/plan/modal/create_edit.js',
                             'scripts/controllers/lecture/modal/create_edit.js',
                             'scripts/controllers/attachment/modal/create_edit.js',
                             'scripts/controllers/streamline/modal/create_edit.js',
                             'textAngular', 'ui.select2', 'angularFileUpload', 'ngTagsInput'])
            })
            .state('404', {
              url: '/404',
              templateUrl: 'views/pages/404.html'
            })
            .state('505', {
              url: '/505',
              templateUrl: 'views/pages/505.html'
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
