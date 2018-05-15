const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

app.listen(port, () => {
	// console.log(`Listening on port ${port}!`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});