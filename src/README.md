# spike_amazon-image-recognition

Checking out possibilities of Amazon Rekognition

Installation on local machine:

1) clone repo from gitlab

2) Load npm modules: npm install

3) Load fixtures into DB: node mongo_fixtures_load.js -> you can browse labels from DB

4) Enabling AWS Rekognition - if one has AWS credentials in ./aws folder it will work
   right from the start, if not uncomment parameter "credentials" in line 8 of 
   rekognition.js and input your creds.

5) Start server: npm start.