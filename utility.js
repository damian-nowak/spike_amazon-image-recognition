var multer = require('multer');

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

var upload = multer({ storage: storage })

module.exports = {
  upload
};