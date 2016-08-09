var path = require("path");

module.exports = function(app) {
	var router = app.loopback.Router();

    router.get('/', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'home',
	      	pageTitle: 'Home',
	      	pageDescription: ''
	    });
  	});

  	router.get('/category/:categorySlug/:categoryId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'category',
	      	pageTitle: 'Category',
	      	pageDescription: ''
	    });
  	});

  	router.get('/search', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'search',
	      	pageTitle: 'Search result',
	      	pageDescription: ''
	    });
  	});

  	router.get('/course/:courseSlug/:courseId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'course',
	      	pageTitle: 'Course details',
	      	pageDescription: ''
	    });
  	});

  	router.get('/course/:courseSlug/streamlines/:courseId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'streamlines',
	      	pageTitle: 'Course streamlines',
	      	pageDescription: ''
	    });
  	});

  	router.get('/lecture/:lectureSlug/:lectureId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'lecture',
	      	pageTitle: 'Lecture details',
	      	pageDescription: ''
	    });
  	});

  	router.get('/exam/:examSlug/:examId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'exam',
	      	pageTitle: 'Exam details',
	      	pageDescription: ''
	    });
  	});

  	router.get('/user/:userNameSlug/:userId', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'user',
	      	pageTitle: 'User profile',
	      	pageDescription: ''
	    });
  	});

  	router.get('/user/:userNameSlug/:userId/settings', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'user_settings',
	      	pageTitle: 'User settings',
	      	pageDescription: ''
	    });
  	});

  	router.get('/pricing', function(req, res) {
	    res.render('index', {
	    	currentRoute: 'pricing',
	      	pageTitle: 'Pricing',
	      	pageDescription: ''
	    });
  	});

  	router.get('/how', function(req, res) {
	    res.render('index', {
	    	baseUrl: baseUrl,
	    	currentRoute: 'how',
	      	pageTitle: 'How to',
	      	pageDescription: ''
	    });
  	});

  	// router.get('/404', function(req, res) {
	  //   res.render('index', {
	  //   	currentRoute: '404',
	  //     	pageTitle: 'Not found',
	  //     	pageDescription: ''
	  //   });
  	// });

  	// router.get('/500', function(req, res) {
	  //   res.render('index', {
	  //   	currentRoute: '500',
	  //     	pageTitle: 'Internal error',
	  //     	pageDescription: ''
	  //   });
  	// });

    app.use(router);
};
