var express = require('express');
var router = express.Router();
var mongoDB = require('./../RekognitionLabelsRepository');
var utility = require('../utility');
var rekognition = require('../rekognition');

/* GET all documents from DB */
router.get('/', function (req, res, next) {
  mongoDB.getAllLabels()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

/* GET one document from DB */
router.get('/:fileName', function (req, res, next) {
  mongoDB.getLabels(req.params.fileName)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

/* DELETE one document from DB and storage */
router.delete('/:fileName', function (req, res, next) {
  mongoDB.deleteLabels(req.params.fileName)
    .then((data) => {
      res.json(data);
    })
    .then(() => {
      return utility.fileDelete(req.path);
    })
    .catch((err) => {
      res.render('error');
    });
});

/* POST one document */
router.post('/upload', utility.upload.single('file'), function (req, res, next) {
  rekognition.getLabels(req.file.path)
    .then((data) => {
      return mongoDB.addLabels(req.file.filename, data);
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.render('error');
    });
});

module.exports = router;
