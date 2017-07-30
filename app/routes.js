var multer = require('multer');


module.exports = function(app){
  
  app.route('/').get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
  });
  

  app.route('/upload').post( , function(req, res){
      
      res.send({"size": req.file.size});
    
  })
  
};

