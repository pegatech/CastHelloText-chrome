var express = require('express');
var path = require('path');
var app = express();
app.get('/sender', function(req, res) {
  res.sendFile(path.join(__dirname, 'chromehellotext.html'));
});
app.get('/receiver', function(req, res) {
  res.sendFile(path.join(__dirname, 'receiver.html'));
});
app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
