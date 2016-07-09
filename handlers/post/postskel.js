'use strict';

var
  express = require('express'),
  config = require('../../lib/config');

module.exports = function(req, res, next) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);

  console.log('post rec');
}