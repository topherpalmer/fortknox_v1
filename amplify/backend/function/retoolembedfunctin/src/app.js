/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/embed', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/embed/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

var axios = require('axios')
app.post('/embed', function(req, res) {

  const axios = require('axios');
  let data = JSON.stringify({
    "landingPageUuid": "6b79c648-0bce-11ef-9ee7-8b6ef326de56",
    "groupIds": [
      3117369
    ],
    "externalIdentifier": "2db6bd4c-84e8-43ee-ad38-4e06ed2614e8",
    "userInfo": {
      "firstName": "Chris",
      "lastName": "Palmer",
      "email": "chrispalmer@undefeatedsoftware.com"
    }
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://retooldev.myfortknox.co/api/embed-url/external-user',
    headers: { 
      'Authorization': 'Bearer retool_01hz5h90k9vxt4pq52epstwvzr', 
      'Content-type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

    // axios.post('https://retooldev.myfortknox.co/api/embed-url/external-user', 
    // {
    //   "landingPageUuid": "6b79c648-0bce-11ef-9ee7-8b6ef326de56",
    //   "groupIds": [3117369],
    //   "externalIdentifier": "2db6bd4c-84e8-43ee-ad38-4e06ed2614e8",
    //   "userInfo": {
    //     "firstName": "Chris",
    //     "lastName": "Palmer",
    //     "email": "chrispalmer@undefeatedsoftware.com"
    //   }
    // },
    // {
    //   headers: {
    //     'Authorization': `Bearer retool_01hz5h90k9vxt4pq52epstwvzr`,
    //     'Content-type': 'application/json'
    //   }
    // }
    // )
    // .then(response => {
    //   //if (!response.ok) throw new Error('Response not OK');

    //   //res.json({success: 'embedV2 post call succeed!', url: req.url})
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log("error")
    // })
   //res.json({success: 'post call succeed!', url: req.url, body: req.body})
 });

app.post('/embed/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/embed', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/embed/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/embed', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/embed/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
