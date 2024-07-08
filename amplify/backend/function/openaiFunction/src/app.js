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
const { logRoles } = require('@testing-library/react')

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
    //wireOrigination(wireOriginationSelectBox)
    //emailAddressOrigination
    //nameOfPersonRequestCameFrom
    //wireAmount(wireAmountInput)
    //dateToSendWire(dateToSendWireInput)
    //routingNumber(routingNumberInput)
    //accountNumber(accountNumberInput)
    //vendorName(vendorNameInput)
    //vendorEmail(vendorEmailInput)
    //addressLine1(addressLine1Input)
    //addressLine2(addressLine2Input)
    //city(cityInput)
    //state(stateInput)
    //zipCode(zipCodeInput)
    //accountToSendFrom(accountSelectInput)
    //vendorPhoneNumber(vendorPhoneNumberInput)
app.post('/newVendorWire', function(req, res) {

  const body = req.body;

  try {
    console.log(req.body);
    const newMessage= req.body.newMessage;
    console.log(newMessage);
    var previousMessages= req.body.previousMessages;
    const wireOrigination= req.body.wireOrigination;
    const emailAddressOrigination= req.body.emailAddressOrigination;
    const nameOfPersonRequestCameFrom= req.body.nameOfPersonRequestCameFrom;
    const wireAmount= req.body.wireAmount;
    const dateToSendWire= req.body.dateToSendWire;
    const routingNumber= req.body.routingNumber;
    const accountNumber= req.body.accountNumber;
    const vendorName= req.body.vendorName;
    const vendorEmail= req.body.vendorEmail;
    const addressLine1= req.body.addressLine1;
    const addressLine2= req.body.addressLine2;
    const city= req.body.city;
    const state= req.body.state;
    const zipCode= req.body.zipCode;
    const accountToSendFrom= req.body.accountToSendFrom;
    const vendorPhoneNumber= req.body.vendorPhoneNumber


    if(previousMessages.length > 0) {
      previousMessages.push(newMessage);
    }
    else  {
      
        previousMessages = [
          
          {
            role: 'system', 
            content: 'You are my assistant and you are knowledgable about wire fraud and whether a bank routing number and account number is legitimate or not. I am looking to verify if this bank routing number is legitimate and whether it has been associated with wire fraud. If a bank routing number and bank account number is not legitimate you will rate it a 9 out of 10 on a risk level scale.  If the bank routing number and bank account number is legitimate, it will be rated a 0 out of 10 on a risk level. '
          },
          { 
            role: 'user', 
            content: 'bank routing number is' + routingNumber + ' and the bank account number is ' + accountNumber
          },
          {
            role: 'system', 
            content: 'You are my assistant and you are knowledgable about wire fraud and whether an address is for a business or a residence. I am looking to verify if this email address is associated with wire fraud or if an address for a business or a residence. If an email has a gmail.com domain you will rate it a 9 out of 10 on a risk level scale.  If it is not a gmail.com domain, it will be rated a 1 out of 10 on a risk level. '
          },
          { 
            role: 'user', 
            content: 'origination email is ' + emailAddressOrigination + ' and vendor email is ' + vendorEmail
          },
          {
            role: 'system', 
            content: 'You are my assistant and you are knowledgable about wire fraud and whether an business name and business phone number is for a business or a residence. I am looking to verify if this business name or the business phone number is associated with wire fraud or if a business name or a business phone number exists for a business. If the business name exists then the risk level is 1 out of 10.  If the business phone number exists but is not associated with the business name then the risk level is a 10 out of 10.'
          },
          { 
            role: 'user', 
            content: 'business name is ' +  vendorName + ' and business phone number is ' +  vendorPhoneNumber
          },
          {
            role: 'system', 
            content: 'You are my assistant and you are knowledgable about wire fraud and whether an address is for a business or a residence. I am looking to verify if this email address is associated with wire fraud or if an address is for a business or a residence. If the business address exists then the risk level is 1 out of 10.  If it does not exist it is a risk level of 9 out of 10. Average all the determined risk levels to estimate an overall risk level for the transaction out of a scale of 10.'
          },
          { 
            role: 'user', 
            content: 'business address is ' + addressLine1 + ' ' + addressLine2 + ' ' + city + ' ' + state + ' ' + zipCode
          } 
       ]     
    } 
 
    const chatGptCalling = async (previousMessages) => {
      try{

          console.log("Calling chatGptCalling");

          const { Configuration, OpenAIApi, OpenAI } = require('openai');
          let openai;
          const instructions = ``;
          openai = new OpenAI({ apiKey: 'sk-proj-GETCBWHqs2hmCWVWBEkbT3BlbkFJIqTs1zJvgvjDnQVTZHeU' });

          console.log("Calling chatgpt");
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: previousMessages
          });
          // const response = await openai.createChatCompletion({
          //         model: "gpt-3.5-turbo",
          //         temperature: 0.888,
          //         max_tokens: 2048,
          //         frequency_penalty: 0,
          //         presence_penalty: 0,
          //         top_p: 1,
          //         messages: previousMessages,//[{role: "system", content: instructions}, {role: "user", content: ''}], // {role: "assistant", content: ''}
          //     }, { timeout: 60000 });

          console.log(response);
          const response_text = response.choices[0].message.content.trim();
          console.log(response_text);

          const aiMessage = {role: 'system', content: response_text};
          console.log(aiMessage);

          previousMessages.push(aiMessage);
          console.log(previousMessages)

          res.json({success: 'newVendorWire post call succeed!', url: req.url, openAIMessage: response_text});

        }
        catch(err){
          console.error(err);
          res.json({success: 'post call for newVendorWire failed!', url: req.url, body: err})

        } 
      }

      chatGptCalling(previousMessages);
      console.log(previousMessages);

    // Extract the completion text from the API response
    // const reply = completion.choices[0].message;
    // const formattedText = reply.content;
    

   //return apiResponse.successResponseWithData(res, "Response fetched successfully", { formattedText });
  } catch (error) {
      console.log(error)
      res.json({success: 'post call for newVendorWire failed!', url: req.url, body: error})

      //return apiResponse.ErrorResponse(res, error.message);
  }
  //const openai = new OpenAI({apiKey:[process.env('OPENAI_KEY')]});
  //const openai = new OpenAI({apiKey:'sk-proj-GETCBWHqs2hmCWVWBEkbT3BlbkFJIqTs1zJvgvjDnQVTZHeU'});
//  const gptResponse = await openai.chat.completions.create({
//     model:'gpt-3.5-turbo',
//     messages[{
//         role: "system",
//         content: "New vendor wires are awesome"
//     }, ...body.messages.map<{
//        role: "system" | "assistant" | "user",
//        content: string
//     }>(message => ({
//        role: message.sender === "ai" ? "assistant" : "user",
//        content: message.text
//     }))]
//   });

//   const result = gptResponse.choices[0].message.content;

  //res.json({success: 'post call succeed!', url: req.url, body: result})
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
