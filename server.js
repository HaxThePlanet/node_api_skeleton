'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var dotenv = require('dotenv');
var config = require('./lib/config');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/v0/skeleton-post', require('./handlers/post/postskel'));
app.get('/v0/skeleton-get', require('./handlers/get/getskel'));

app.use(require('./lib/error'));
app.listen(3000);
