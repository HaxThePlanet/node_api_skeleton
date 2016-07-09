var path = require('path');

var hjson = require('hjson');
var nConf = require('nconf');

require('dotenv').config();

var defaultConfig = path.join(__dirname,'..','config','default.json')
var envConfig     = path.join(__dirname,'..','config',process.env.NODE_ENV + '.json');

nConf.argv().env();

if(process.env.NODE_ENV) nConf.file('environment',{file: envConfig,format: hjson});

nConf.file('default',{file: defaultConfig, format: hjson});

module.exports = nConf;
