var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

module.exports = function(app){
  
  app.route('/').get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
  });
  

  app.route('/upload').post(upload("file") , function(req, res){
      
      res.send({"size": req.file.size});
    
  })
  
};

