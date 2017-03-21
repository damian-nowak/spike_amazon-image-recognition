var express = require('express');
var router = express.Router();
var mongoDB = require('./../mongo_connectToDB');

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
  mongoDB.findAndDeleteOneInDB(req.params.fileName)
    .then((data) => {
      res.json({file: "deleted"});
    })
    .catch((err) => {
      res.render('error');
    });
});

module.exports = router;