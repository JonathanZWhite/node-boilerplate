/**
 * Dependencies
 */

var express = require('express');
var path = require('path');
var dust = require('dustjs-linkedin');
var consolidate = require('consolidate');

var app = express();

/**
 * Express configuration
 */

app.engine('dust', consolidate.dust);

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Route configuration
 */

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Just testing out dust.js rendering'
	});
});

app.listen(app.get('port'), function() {
	console.log('Express listening to port', app.get('port'));
});

module.exports = app;