module.exports = function(handler){
  return function(req,res,next){
    var err;
    
    try {
      handler(req,next);
    }
    catch(e){
      next(e);
    }
  };
};
