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

app.get('/item', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/


const AWS = require('aws-sdk');
const { PDFDocument} = require('pdf-lib');
const fs = require('fs');
const { extractText } = require('pdf.js-extract');
//import { createRequire } from 'module';

// await import('pdfjs-dist/build/pdf.worker.min.mjs');
//const PDFJS = require('pdfjs-dist');
// import * as pdfjsLib from "pdfjs-dist";
//import { pdfjsLib, getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
app.post('/invoicereader', function(req, res) {

  try {
        // import module for side effects
        //var pdfjsLib = require("pdfjs-dist/es6/build/pdf.js");
        
        console.log("endtered try block in /invoicereader");
        AWS.config.update({
          accessKeyId: 'AKIAREX7OYG5BDBA4L75',
          secretAccessKey: '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',

        });

        console.log("initiating S3");
        const s3 = new AWS.S3();
        const bucketName = 'myfortknoxwirepdfs';
        const url = 'https://myfortknoxwirepdfs.s3.amazonaws.com/Invoice+21549.pdf';

        let params = {
          Bucket : bucketName,
          Key : 'Invoice 21549.pdf'
        };

        s3.getObject(params,(err,data)=>{
            if(err){
                console.log(err,err.stack);
                res.json({success: 'invoicereader post call failed in retrieval at S3!', url: req.url, body: err});

            }else{
              (async () => {

                  console.log(data);
                  const pdfDoc = await PDFDocument.load(pdfBuffer);

                  let extractedText = '';
                  for (const page of pdfDoc.pages) {
                    for (const item of page.items) {
                      extractedText += item.str + ' ';
                    }
                  }

                res.json({success: 'invoicereader post call succeed!', url: req.url, body: extractedText});

              });

            }
         });

        // const pdfDoc = PDFDocument.create(); 
        // console.log(pdfDoc);



        // //const PDFJS = import('pdfjs-dist');
        // console.log("initiating pdfjs-dist");

        // // const require = createRequire(import.meta.url);
        // // const pdfjsLib = require('pdfjs-dist');
        // pdfjsLib.getDocument(url).promise.then(pdf => {

        //   console.log("pdfjsLib.getDocument");

        //   console.log(pdf);

        //   // Get the number of pages in the PDF
        //   const numPages = pdf.numPages;
        
        //   // Loop through each page and extract text
        //   console.log("Loop through each page and extract text");

        //   var text = ""
        //   for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        //     pdf.getPage(pageNum).then(page => {
        //       page.getTextContent().then(textContent => {
        //         // Extract text from each item in the textContent array
        //         const pageText = textContent.items.map(item => item.str).join(" ");
        //         console.log(pageText);
        //         text = text + pageText;
        //       });
        //     });
        //   }
        // });

        // res.json({success: 'invoicereader post call succeed!', url: req.url, body: text});

  }
  catch(error)  {
    console.log(error);
    res.json({success: 'invoicereader post call failed!', url: req.url, body: error});
  }


});

app.post('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/item', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/item', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function(req, res) {
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
