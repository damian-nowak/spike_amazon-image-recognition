var multer = require('multer');
var fs = require('fs');

// file upload 
var dest = __dirname + '/public/images/';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({
  storage: storage
})

var file_delete = (fileName) => {
  fs.unlink('./public/images' + fileName, function (err) {
    if (err) return console.log(err);
    console.log('file deleted successfully');
  })
};

module.exports = {
  upload,
  file_delete
};