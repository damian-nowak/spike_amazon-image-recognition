var express = require('express');
var router = express.Router();
var mongoDB = require('./../mongo_DB_handler');
var utility = require('../utility');
var rekognition = require('../rekognition');


/* GET all files */
router.get('/', function (req, res, next) {
  mongoDB.findAllInDB()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

/* GET one file */
router.get('/:fileName', function (req, res, next) {
  mongoDB.findOneInDB(req.params.fileName)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

/* DELETE one file */
router.delete('/:fileName', function (req, res, next) {
  utility.file_delete(req.path);
  mongoDB.findAndDeleteOneInDB(req.params.fileName)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

/*POST one file */
router.post('/upload', utility.upload.single('file'), function (req, res, next) {
  rekognition.getLabels(req.file.path)
    .then((data) => {
      return mongoDB.insertOneIntoDB(req.file.filename, data);
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

module.exports = router;