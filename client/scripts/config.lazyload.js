// lazyload config

angular.module('app')
  .constant('MODULE_CONFIG', (function() {
    var baseUrl = 'https://ts-proj-api.herokuapp.com';
    return [
      {
          name: 'ui.select',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-ui-select/dist/select.min.js',
              baseUrl + '/libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name: 'ui.select2',
          module: true,
          files: [
              baseUrl + '/libs/jquery/select2/select2.css',
              baseUrl + '/libs/jquery/select2/select2.min.js',
              baseUrl + '/libs/angular/angular-ui-select2/src/select2.js'
          ]
      },
      {
          name: 'textAngular',
          module: true,
          files: [
              baseUrl + '/libs/angular/textAngular/dist/textAngular-sanitize.min.js',
              baseUrl + '/libs/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          module: true,
          files: [
              baseUrl + '/libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              baseUrl + '/libs/angular/venturocket-angular-slider/angular-slider.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              baseUrl + '/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'angularFileUpload',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-file-upload/dist/angular-file-upload.min.js'
          ]
      },
      {
          name: 'ngFileUpload',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng-file-upload/ng-file-upload.min.js',
              baseUrl + '/libs/angular/ng-file-upload/ng-file-upload-shim.min.js'
          ]
      },
      {
          name: 'ngImgCrop',
          module: true,
          files: [
              baseUrl + '/libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              baseUrl + '/libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'ui.map',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-ui-map/ui-map.js'
          ]
      },
      {
          name: 'ngGrid',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng-grid/build/ng-grid.min.js',
              baseUrl + '/libs/angular/ng-grid/ng-grid.min.css',
              baseUrl + '/libs/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-ui-grid/ui-grid.min.js',
              baseUrl + '/libs/angular/angular-ui-grid/ui-grid.min.css',
              baseUrl + '/libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'xeditable',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              baseUrl + '/libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'angularMoment',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-moment/angular-moment.min.js'
          ]
      },
      {
          name: 'ngImgCrop',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng-img-crop-full-extended/ng-img-crop.js',
              baseUrl + '/libs/angular/ng-img-crop-full-extended/ng-img-crop.css'
          ]
      },
      {
          name: 'ngImageDimensions',
          module: true,
          files: [
              baseUrl + '/libs/angular/angular-image-dimensions/angular-image-dimensions.js'
          ]
      },
      {
          name: 'videosharing-embed',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng-videosharing-embed/ng-videosharing-embed.min.js'
          ]
      },
      {
          name: 'ngTagsInput',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng-tags-input/ng-tags-input.min.js',
              baseUrl + '/libs/angular/ng-tags-input/ng-tags-input.min.css'
          ]
      },
      {
          name: 'ngEmbed',
          module: true,
          files: [
              baseUrl + '/libs/angular/ngEmbed/ng-embed.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js',
              'http://platform.twitter.com/widgets.js',
              baseUrl + '/libs/angular/ngEmbed/ng-embed.min.css'
          ]
      },
      {
          name: 'countdownTimer',
          module: true,
          files: [
              baseUrl + '/libs/angular/simple-inline-countdown-directive/countdownTimer.js'
          ]
      },
      {
          name: 'ng.ckeditor',
          module: true,
          files: [
              baseUrl + '/libs/angular/ng.ckeditor/ng-ckeditor.js'
          ]
      },
      {
          name: 'dataTable',
          module: false,
          files: [
              baseUrl + '/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
              baseUrl + '/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
              baseUrl + '/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
          ]
      },
      {
          name: 'footable',
          module: false,
          files: [
              baseUrl + '/libs/jquery/footable/dist/footable.all.min.js',
              baseUrl + '/libs/jquery/footable/css/footable.core.css'
          ]
      },
      {
          name: 'easyPieChart',
          module: false,
          files: [
              baseUrl + '/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
          ]
      },
      {
          name: 'sparkline',
          module: false,
          files: [
              baseUrl + '/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
          ]
      },
      {
          name: 'plot',
          module: false,
          files: [
              baseUrl + '/libs/jquery/flot/jquery.flot.js',
              baseUrl + '/libs/jquery/flot/jquery.flot.resize.js',
              baseUrl + '/libs/jquery/flot/jquery.flot.pie.js',
              baseUrl + '/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
              baseUrl + '/libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
              baseUrl + '/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
          ]
      },
      {
          name: 'vectorMap',
          module: false,
          files: [
              baseUrl + '/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
              baseUrl + '/libs/jquery/bower-jvectormap/jquery-jvectormap.css', 
              baseUrl + '/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
              baseUrl + '/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
          ]
      },
      {
          name: 'moment',
          module: false,
          files: [
              baseUrl + '/libs/jquery/moment/locale/vi.js',
              baseUrl + '/libs/jquery/moment/moment.js'
          ]
      },
      {
          name: 'ckeditor',
          module: false,
          files: [
              baseUrl + '/libs/jquery/ckeditor/ckeditor.js'
          ]
      }
    ]
    })()
  )
  .constant('API_DOMAIN', 'https://ts-proj-api.herokuapp.com')
  .constant('BASE_URL', 'https://ts-proj-api.herokuapp.com')
  .constant('PAGING_LIMIT', 3)
  .constant('ATTACHMENT_PREFIX_COURSE', 'c_')
  .constant('ATTACHMENT_PREFIX_LECTURE', 'l_')
  .constant('ATTACHMENT_PREFIX_USER', 'u_')
  .constant('USER_NO_AVATAR_IMG', 'images/no_avatar.png')
  .constant('NO_IMGAGE_IMG', 'images/no_image.jpg')
  .constant('NO_IMGAGE_IMG_RECTANGLE', 'images/no_image_rectangle.png')
  .constant('EMBEDDING_PROVIDERS', [
                                          {id: 1, name: 'Youtube', iconCssClass: 'fa fa-youtube-play', iconCssColor: 'danger', domain: 'youtube.com'},
                                          {id: 2, name: 'Vimeo', iconCssClass: 'fa fa-vimeo-square', iconCssColor: 'info', domain: 'vimeo.com'},
                                          {id: 3, name: 'Vine', iconCssClass: 'fa fa-vine', iconCssColor: 'info', domain: 'vine.co'},
                                          {id: 4, name: 'Dailymotion', iconCssClass: 'fa fa-long-arrow-right', iconCssColor: 'warning', domain: 'dailymotion.com'},
                                          {id: 5, name: 'Youku', iconCssClass: 'fa fa-long-arrow-right', iconCssColor: 'danger', domain: 'youku.com'}
                                        ])
  .constant('QUESTION_TYPES',[{val: 0, name: 'single_choice'}, {val: 1, name: 'multi_choice'}, {val: 2, name: 'true_or_false'}, {val: 3, name: 'yes_or_no'}])
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      $ocLazyLoadProvider.config({
          debug: false,
          events: false,
          modules: MODULE_CONFIG
      });
  }]);
