var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('beta.ejs');
});

app.get('/home', function (req, res) {
	res.render('home.ejs');
});

app.get('/blog', function (req, res) {
	res.render('blog.ejs');
});

app.listen(port, () => {
	console.log('listening on port 8000');
});