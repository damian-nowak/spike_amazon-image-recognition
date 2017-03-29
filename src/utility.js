var multer = require('multer');
var fsp = require('fs-promise');
var path = require('path');

// file upload via multer
var dest = path.join(__dirname, '/public/images/');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
});

// removing file via fs-promise
var fileDelete = (fileName) => {
  fsp.remove(path.join('./public/images/', fileName))
    .then((file) => {
      return file;
    })
    .catch((err) => {
      console.log(err, err.stack);
      return err;
    });
};

module.exports = {
  upload,
  fileDelete
};
