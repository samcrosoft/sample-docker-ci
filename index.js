var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Sample Page!' );
});

app.listen(3030);
module.exports = {
	getApp:app
};