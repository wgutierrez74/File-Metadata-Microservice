var express = require('express');
var multer  = require('multer');


var upload = multer({ storage:  multer.memoryStorage() });
  
// Upload your files as usual 
var sUpload = upload.single('file');

module.exports = function(app){
  
  app.route('/').get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
  });
  

  app.route('/upload').post(sUpload , function(req, res){
      
      res.send({"size": req.file.size});
    
  })
  
};

