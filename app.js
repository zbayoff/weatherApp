const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));


app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});