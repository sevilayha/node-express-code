// CONFIGURATION ====================
// ==================================
// load the things we need
var express = require('express');
var app     = express();
    
// set the port based on environment
var port    = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the path for all public resources (css/js/images)
app.use(express.static(__dirname + '/public'));

// ROUTES ===========================
// ==================================
// use res.render to load up an ejs view file
// index/home page 
app.get('/', function(req, res) {
	res.render('./pages/home', {
		name: 'John Doe'
	});
});

// about page 
app.get('/about', function(req, res) {
	var superheroes = [
		{ name: 'Bruce Wayne', alias: 'Batman' },
		{ name: 'Clark Kent', alias: 'Superman' },
		{ name: 'Scott Lang', alias: 'Ant Man' }
	];

	res.render('pages/about', {
		superheroes: superheroes
	});
});

// contact page 
app.get('/contact', function(req, res) {
	res.render('pages/contact', {
		active: true
	});
});

// START THE SERVER ================
// =================================
app.listen(port);
console.log(port + ' is the magic port!');