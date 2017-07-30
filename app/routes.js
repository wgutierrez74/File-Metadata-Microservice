var express = require('express');
var multer  = require('multer');
var url = require('url');
var Grid = require('gridfs-stream');
var mongo = require('mongodb');
var GridFSStorage = require('multer-gridfs-storage');
 
// var db = new mongo.Db('database', new mongo.Server("mongodb://will:password@ds125623.mlab.com:25623/fcc-backend"));
 
// db.open(function (err) {
//   if (err) return (err);
//   var gfs = Grid(db, mongo);
 
//   var storage = GridFSStorage({
//      gfs: gfs
//   });
//   var upload = multer({ storage: storage });
// });






// // Create a storage object with a given configuration 
var storage = require('multer-gridfs-storage')({
    url: 'mongodb://will:password@ds125623.mlab.com:25623/fcc-backend'
 });
// // Set multer storage engine to the newly created object 
var upload = multer({ storage: storage });
  
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

