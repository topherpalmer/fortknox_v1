/* Amplify Params - DO NOT EDIT
	AUTH_FORTKNOXV1FD5AF9B7_USERPOOLID
	ENV
	REGION
	STORAGE_FORTKNOXFILEUPLOAD_BUCKETNAME
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



require('dotenv').config(); // Load environment variables
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


//const { PDFDocument} = require('pdf-lib');
//const { extractText } = require('pdf.js-extract');
// const Amplify = require('aws-amplify');
// const { Storage} = require('aws-amplify');
//const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
//const config = require('../../../../../src/aws-exports');
//import { createRequire } from 'module';
// await import('pdfjs-dist/build/pdf.worker.min.mjs');
//const PDFJS = require('pdfjs-dist');
// import * as pdfjsLib from "pdfjs-dist";
const { getObject} = require('@aws-sdk/client-s3');
const AWS = require('aws-sdk');
const fs = require('fs');
const { pdfjsLib, getDocument, extractText} =  require('pdf.js-extract');
//const pdfToText =  require('react-pdftotext');
const PDFParser = require('pdf2json'); 
//import pdf from "pdf-parse";
app.post('/invoicereader', function(req, res) {

      try {

            console.log("entered try block in /invoicereader");
            AWS.config.update({
              accessKeyId: 'AKIAREX7OYG5BDBA4L75',
              secretAccessKey: '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'

            });

            console.log("initiating S3");
            const s3 = new AWS.S3();
            console.log(s3);
            const bucketName = 'fortknoxfileuploadbucketb0ab2-dev';
            //const url = 'https://myfortknoxwirepdfs.s3.amazonaws.com/Invoice+21549.pdf';

            let params = {
              Bucket : bucketName,
              Key : 'Invoice_Test.pdf'//'Invoice21549.pdf''ContraBusinessPlanDeck.pdf'
            };

            console.log("s3.getObject");
            s3.getObject(params,(err,data)=>{

              console.log("IN s3.getObject");
              console.log(err);
              console.log(data);

                if(err){
                    console.log(err,err.stack);
                    res.json({success: 'invoicereader post call failed in retrieval at S3!', url: req.url, body: err});

                }else{

                      console.log('The BODY:');
                      console.log(data.Body);
                      console.log('Turning Body PDF to buffer:');
                      const fileBuffer = Buffer.from(data.Body);
                      console.log(fileBuffer);

                      //const pdfBlob = new Blob(data.Body);
                      //const uiint8 = new Int8Array(data.Body);
                      //console.log(uiint8);

                      console.log('calling pdfParser');
                      const pdfParser = new PDFParser(this,1);

                      //const pdfParser = new (PDFParser as any)(null, 1);

                      pdfParser.on("pdfParser_dataError", (errData) =>
                       console.error(errData.parserError)
                      );
                      pdfParser.on("pdfParser_dataReady", (pdfData) => {
                        console.log('in pdfdocument');
                        console.log(pdfParser.getRawTextContent());

                        previousMessages = [
          
                          {
                            role: 'system', 
                            content: 'You are my assistant and you are knowledgable about wire fraud and whether a bank routing number and account number is legitimate or not. I am looking to verify if this bank routing number is legitimate and whether it has been associated with wire fraud. If a bank routing number and bank account number is not legitimate you will rate it a 9 out of 10 on a risk level scale.  If the bank routing number and bank account number is legitimate, it will be rated a 0 out of 10 on a risk level. '
                          },
                          { 
                            role: 'user', 
                            content: 'Can you identify the key elements for red flags that would indicate this may be a hacker wanting to commit wire fraud.  Can you then assess the risk of this being wire fraud on a scale of 1 to 10.'
                          },
                          {
                            role: 'user',
                            content: 'And then at the end of your response put the key element values of the amount due, address, routing number, account number, SWIFT Code, phone number, contact information in JSON format.'
                          },
                          { 
                            role: 'user', 
                            content: pdfParser.getRawTextContent()
                          }
                       ]     
                 
                        const chatGptCalling = async (previousMessages) => {
                    
                              console.log("Calling chatGptCalling");
                    
                              const { Configuration, OpenAIApi, OpenAI } = require('openai');
                              let openai;
                              const instructions = ``;
                              openai = new OpenAI({ apiKey:process.env.REACT_APP_OPENAI_KEY });
                    
                              console.log("Calling chatgpt");
                              const response = await openai.chat.completions.create({
                                model: "gpt-3.5-turbo",
                                messages: previousMessages,
                                temperature: 0.1
                              });  
                    
                              console.log(response);
                              const response_text = response.choices[0].message.content.trim();
                              console.log(response_text);
                    
                              const aiMessage = {role: 'system', content: response_text};
                              console.log(aiMessage);
                    
                              previousMessages.push(aiMessage);
                              console.log(previousMessages)
                    
                              res.json({success: 'newVendorWire post call succeed!', url: req.url, openAIMessage: response_text});
  
                    
  
                        }
                        chatGptCalling(previousMessages);

                      });
                      console.log("Done with parsing pdf.  Waiting on OpenAI.");   

                      pdfParser.parseBuffer(fileBuffer);  

                }
            });
      }
      catch(error)  {
        console.log(error);
        res.json({success: 'invoicereader post call failed!', url: req.url, body: error});
      }


});


// app.post('/invoicereader', function(req, res) {

    
        // Downloads file content to memory
        // const { body, eTag } = downloadData({
        //   path: 'Invoice_Test.pdf',
        //   // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
        //   options: {
        //     onProgress: (event) => {
        //       console.log(event.transferredBytes);
        //     } // optional progress callback
        //     // bytesRange: {
        //     //   start: 1024,
        //     //   end: 2048
        //     // } // optional bytes range parameter to download a part of the file, the 2nd MB of the file in this example
        //   }
        // }).result;
        
        // let extractedText = '';
        // for (const page of body.pages) {
        //   for (const item of page.items) {
        //     extractedText += item.str + ' ';
        //   }
        // }

                              // PDFDocument.load(data.Body).then(function(pdfDoc) { // calculate total count for document
                      //   console.log('// calculate total count for document');
                      //   console.log('// pdf document');
                      //   // console.log(pdfDoc);
                      //   // console.log('// pdfDoc.pages:' + pdfDoc.getPages());
                      //   let extractedText = '';
                      //   for (const page of pdfDoc.getPages()) {
                      //     console.log('// pdfDoc.getPages:');
                      //     console.log(page);
                      //     for (const item of page.getObject) {
                      //       extractedText += item.str + ' ';
                      //     }
                      //   }

        // res.json({success: 'invoicereader post call succeed!', url: req.url, body: extractedText});
//   try {

//   console.log(getProperties());
//     // const result = await Storage.get(`Invoice_Test.pdf`, { contentType: 'application/pdf', download: true });
//     // console.log(data);
//     // const pdfDoc = await PDFDocument.load(data);

//     // let extractedText = '';
//     // for (const page of pdfDoc.pages) {
//     //   for (const item of page.items) {
//     //     extractedText += item.str + ' ';
//     //   }
//     // }

//     //const pdfDoc = await downloadData({key: 'Invoice_Test.pdf'});
//     // Downloads file content to memory
//     const { body, eTag } = downloadData({
//       path: 'Invoice_Test.pdf',
//       // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
//       options: {
//         onProgress: (event) => {
//           console.log(event.transferredBytes);
//         } // optional progress callback
//         // bytesRange: {
//         //   start: 1024,
//         //   end: 2048
//         // } // optional bytes range parameter to download a part of the file, the 2nd MB of the file in this example
//       }
//     }).result;
    
//     let extractedText = '';
//     for (const page of body.pages) {
//       for (const item of page.items) {
//         extractedText += item.str + ' ';
//       }
//     }

//     res.json({success: 'invoicereader post call succeed!', url: req.url, body: extractedText});
//     //console.log(result);
    // data.Body is a Blob
    // result.Body.text().then(string => { 
    //   // handle the String data return String 
    //   console.log(string);
    //   res.json({success: 'invoicereader post call succeed!', url: req.url, body:string});
    // });
//   }
//   catch(error)  {
//     console.log(error);
//     res.json({success: 'invoicereader post call failed!', url: req.url, body: error});
//   }
// }

    // import module for side effects
    //var pdfjsLib = require("pdfjs-dist/es6/build/pdf.js");

    // Amplify.configure(config)
    // Amplify.configure({
    //   Storage: {
    //     AWSS3: {
    //       bucket: 'myfortknoxwirepdfs',
    //       region: 'us-east-1'
    //     }
    //   }
    // })

    // Amplify.Storage.configure({ level: 'public' })

    // async () => {
    //   const result = await Storage.list('')
    //   console.log(result)
    // }
            
    // console.log("entered try block in /invoicereader");
    // AWS.config.update({
    //   accessKeyId: 'AKIAREX7OYG5BDBA4L75',
    //   secretAccessKey: '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'

    // });

    // console.log("initiating S3");
    // const s3 = new AWS.S3();
    // console.log(s3);
    // const bucketName = 'myfortknoxwirepdfs';
    // const url = 'https://myfortknoxwirepdfs.s3.amazonaws.com/Invoice+21549.pdf';

    // let params = {
    //   Bucket : bucketName,
    //   Key : 'Invoice_Test.pdf'//'Invoice21549.pdf'
    // };

    // console.log("s3.getObject");
    // s3.getObject(params,(err,data)=>{
    //     if(err){
    //         console.log(err,err.stack);
    //         res.json({success: 'invoicereader post call failed in retrieval at S3!', url: req.url, body: err});

    //     }else{
          // (async () => {

          //     console.log(data);
          //     const pdfDoc = await PDFDocument.load(data);

          //     let extractedText = '';
          //     for (const page of pdfDoc.pages) {
          //       for (const item of page.items) {
          //         extractedText += item.str + ' ';
          //       }
          //     }

          //   res.json({success: 'invoicereader post call succeed!', url: req.url, body: extractedText});

          // });

    //     }
    //  });

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

// }
// catch(error)  {
//   console.log(error);
//   res.json({success: 'invoicereader post call failed!', url: req.url, body: error});
// }


// });

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
