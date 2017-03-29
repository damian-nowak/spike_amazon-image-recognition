var fs = require('fs');
var AWS = require('aws-sdk');

// setup for AWS Rekognition
var rekognition = new AWS.Rekognition({
  region: 'eu-west-1',
  // uncomment line below and insert your AWS credentials
  // credentials: new AWS.Credentials('AWS_ACCESS_KEY', 'AWS_SECRET_KEY'),
});

var getLabels = (filePath) => {
  var params = {
    Image: {
      Bytes: fs.readFileSync(filePath),
    },
    MaxLabels: 20,
    MinConfidence: 55.0
  };
  return new Promise((resolve, reject) => {
    rekognition.detectLabels(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject(err, err.stack);
      } else {
        console.log(data.Labels);
        resolve(data.Labels);
      }
    });
  })
}

module.exports = {
  getLabels
};