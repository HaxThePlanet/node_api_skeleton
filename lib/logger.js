var path = require('path');

var mkdirp        = require('mkdirp');
var winston       = require('winston');
var winstonSentry = require('winston-sentry');

var config = require('./config');

var conf = config.get('logging');

var transports = [];
var logFilePath;
var timestamp = function(){ return new Date(); };

// console
if(conf.console && conf.console.enabled){
  transports.push(new (winston.transports.Console)({ timestamp : timestamp }));
}

// sentry
if(conf.sentry && conf.sentry.enabled && config.get('SENTRY_DSN')){
  transports.push(new winstonSentry({ level : conf.sentry.level
                                    , dsn   : config.get('SENTRY_DSN')
                                    }));
}

var getLogger = function(name){

  var fileLogger;

  // file
  if(conf.file && conf.file.enabled && conf.file.path){

    logFilePath = conf.file.path.match(/^\//) ? conf.file.path : path.join( __dirname
                                                                            , '..'
                                                                            , conf.file.path);

    mkdirp.sync(logFilePath);

    fileLogger = new (winston.transports.File)({ filename  : path.join( logFilePath
                                                                        , name + '.log')
                                                 , maxsize   : conf.file.maxsize
                                                 , maxFiles  : conf.file.maxFiles
                                                 , tailable  : true
                                                 , timestamp : timestamp
                                                 , level     : conf.file.level
                                               });
  }

  return new (winston.Logger)({ transports  : fileLogger ? transports.concat([fileLogger]) : transports
                              , exitOnError : false
                              , levels      : { trace : 5
                                              , debug : 4
                                              , info  : 3
                                              , warn  : 2
                                              , error : 1
                                              , fatal : 0
                                              }
                              , level       : conf.level
                              });

};

module.exports = getLogger;
