'use strict';

var {MongoClient} = require('mongodb');

var findAllInDB = () => {
  return MongoClient.connect('mongodb://mongo:27017/RekognitionLabels')
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
  return MongoClient.connect('mongodb://mongo:27017/RekognitionLabels')
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
