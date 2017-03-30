'use strict';

var mongoDB = require('../src/RekognitionLabelsRepository');
var expect = require('../src/node_modules/expect');

var url = 'mongodb://localhost:27017/TestLabels';
var testFile = 'testFile.jpg';
var labelSample = [{
  'Name': 'Human',
  'Confidence': 99.320556640625
}, {
  'Name': 'People',
  'Confidence': 99.3214111328125
}, {
  'Name': 'Person',
  'Confidence': 99.3214111328125
}];

// test environment setup
before((done) => {
  mongoDB.deleteLabels(testFile)
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

describe('DB tests', () => {
  it('should add test labels to DB', (done) => {
    mongoDB.addLabels(testFile, labelSample)
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  it('should get all labels from DB', (done) => {
    mongoDB.getAllLabels()
      .then((labels) => {
        expect(labels.length).toBe(6);
        expect(labels[5].fileName).toBe(testFile);
        done();
      })
      .catch((e) => done(e));
  });

  it('should get one label from DB', (done) => {
    mongoDB.getLabels(testFile)
      .then((labels) => {
        expect(labels.length).toBe(1);
        expect(labels[0].fileName).toBe(testFile);
        done();
      })
      .catch((e) => done(e));
  });
  it('should delete one label from DB', (done) => {
    mongoDB.deleteLabels(testFile)
      .then((labels) => {
        expect(labels.lastErrorObject.n).toBe(1);
        expect(labels.value.fileName).toBe(testFile);
        done();
      })
      .catch((e) => done(e));
  });
});
