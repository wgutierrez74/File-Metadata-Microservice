var express = require('express');
var multer  = require('multer');
var url = require('url');
 
var settings = {
    "host": 'mongodb://will:password@ds125623.mlab.com:25623/',
    "port": 25623,
    "database": 'fcc-backend'
};
 
var connectionString = url.format({
    protocol: 'mongodb',
    slashes: true,
    hostname: settings.host,
    port: settings.port,
    pathname: settings.database
});
 
var storage = require('multer-gridfs-storage')({
    url: connectionString
});
var upload = multer({ storage: storage });



// // Create a storage object with a given configuration 
// var storage = require('multer-gridfs-storage')({
//     url: 'mongodb://will:password@ds125623.mlab.com:25623/fcc-backend'
//  });
// // Set multer storage engine to the newly created object 
// var upload = multer({ storage: "/upload" });
  
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

