'use strict';

var {MongoClient} = require('mongodb');

if (process.env.DOCKER === 'true'){
  var url = 'mongodb://mongo:27017/RekognitionLabels';
} else {
  var url = 'mongodb://localhost:27017/RekognitionLabels';
};

var findAllInDB = () => {
  return MongoClient.connect(url)
  .then((db) => {
    var searchResult = db.collection('RekognitionLabels').find().toArray();
    db.close();
    return searchResult;
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
};

var findOneInDB = (file) => {
  return MongoClient.connect(url)
  .then((db) => {
    var searchResult = db.collection('RekognitionLabels').find({fileName: file}).toArray();
    db.close();
    return searchResult;
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
};

module.exports = {
  findAllInDB,
  findOneInDB
}
