'use strict';

var {
  MongoClient
} = require('mongodb');

var input_1_DB = () => {
  return MongoClient.connect('mongodb://localhost:27017/RekognitionLabels')
    .then((db) => {
      var input = db.collection('RekognitionLabels').insertOne({
        fileName: 'file1.jpg',
        labels: [{
            "Name": "People",
            "Confidence": 99.27786254882812
          }, {
            "Name": "Person",
            "Confidence": 99.27786254882812
          }, {
            "Name": "Human",
            "Confidence": 99.27281188964844
          }, {
            "Name": "Performer",
            "Confidence": 78.86387634277344
          }, {
            "Name": "Head",
            "Confidence": 55.490570068359375
          }, {
            "Name": "Portrait",
            "Confidence": 55.490570068359375
          }, {
            "Name": "Dimples",
            "Confidence": 54.65309143066406
          }, {
            "Name": "Face",
            "Confidence": 54.65309143066406
          }, {
            "Name": "Smile",
            "Confidence": 54.65309143066406
          },
          {
            "Name": "Selfie",
            "Confidence": 53.442047119140625
          }
        ]
      });
      db.close();
      return input;
    })
    .then((data) => {
      console.log(data.ops);
    })
    .catch((error) => {
      console.log(error);
    });
};

var input_2_DB = () => {
  return MongoClient.connect('mongodb://localhost:27017/RekognitionLabels')
    .then((db) => {
      var input = db.collection('RekognitionLabels').insertOne({
        fileName: 'file2.jpg',
        labels: [{
          "Name": "Human",
          "Confidence": 99.320556640625
        }, {
          "Name": "People",
          "Confidence": 99.3214111328125
        }, {
          "Name": "Person",
          "Confidence": 99.3214111328125
        }]
      });
      db.close();
      return input;
    })
    .then((data) => {
      console.log(data.ops);
    })
    .catch((error) => {
      console.log(error);
    });
};

var input_3_DB = () => {
  return MongoClient.connect('mongodb://localhost:27017/RekognitionLabels')
    .then((db) => {
      var input = db.collection('RekognitionLabels').insertOne({
        fileName: 'file3.jpg',
        labels: [{
          "Name": "Beard",
          "Confidence": 94.05711364746094
        }, {
          "Name": "Hair",
          "Confidence": 94.05711364746094
        }, {
          "Name": "Person",
          "Confidence": 51.71427917480469
        }, {
          "Name": "Portrait",
          "Confidence": 51.71427917480469
        }, {
          "Name": "Selfie",
          "Confidence": 51.71427917480469
        }]
      });
      db.close();
      return input;
    })
    .then((data) => {
      console.log(data.ops);
    })
    .catch((error) => {
      console.log(error);
    });
};

var input_4_DB = () => {
  return MongoClient.connect('mongodb://localhost:27017/RekognitionLabels')
    .then((db) => {
      var input = db.collection('RekognitionLabels').insertOne({
        fileName: 'file4.jpg',
        labels: [{
          "Name": "People",
          "Confidence": 99.00060272216797
        }, {
          "Name": "Person",
          "Confidence": 99.00062561035156
        }, {
          "Name": "Human",
          "Confidence": 98.96329498291016
        }, {
          "Name": "Portrait",
          "Confidence": 95.9697036743164
        }, {
          "Name": "Selfie",
          "Confidence": 95.9697036743164
        }, {
          "Name": "Female",
          "Confidence": 66.96940612792969
        }, {
          "Name": "Head",
          "Confidence": 58.387229919433594
        }, {
          "Name": "Face",
          "Confidence": 54.1363525390625
        }, {
          "Name": "Woman",
          "Confidence": 54.0301399230957
        }]
      });
      db.close();
      return input;
    })
    .then((data) => {
      console.log(data.ops);
    })
    .catch((error) => {
      console.log(error);
    });
};

var input_5_DB = () => {
  return MongoClient.connect('mongodb://localhost:27017/RekognitionLabels')
    .then((db) => {
      var input = db.collection('RekognitionLabels').insertOne({
        fileName: 'file5.jpg',
        labels: [{
          "Name": "People",
          "Confidence": 98.90769958496094
        }, {
          "Name": "Person",
          "Confidence": 98.90772247314453
        }, {
          "Name": "Human",
          "Confidence": 98.85770416259766
        }, {
          "Name": "Hat",
          "Confidence": 64.15092468261719
        }, {
          "Name": "Headband",
          "Confidence": 64.15092468261719
        }, {
          "Name": "Turban",
          "Confidence": 64.15092468261719
        }, {
          "Name": "Face",
          "Confidence": 53.130279541015625
        }, {
          "Name": "Selfie",
          "Confidence": 53.130279541015625
        }, {
          "Name": "Portrait",
          "Confidence": 51.85020065307617
        }]
      });
      db.close();
      return input;
    })
    .then((data) => {
      console.log(data.ops);
    })
    .catch((error) => {
      console.log(error);
    });
};

input_1_DB();
input_2_DB();
input_3_DB();
input_4_DB();
input_5_DB();