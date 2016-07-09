'use strict';

var
  express = require('express'),
  config = require('../../lib/config');

module.exports = function(req, res, next) {
  var user_id = req.query.id;
  var token = req.query.token;
  var geo = req.query.geo;

  res.send(user_id + ' ' + token + ' ' + geo);

  console.log('get rec');
}