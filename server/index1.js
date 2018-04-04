var express = require('express');
var app = express();
var users = {name:'Aravind'};

app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app;
