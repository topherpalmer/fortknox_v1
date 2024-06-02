import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
//import axios from 'axios';
import Retool from 'react-retool';//
import { Hub } from 'aws-amplify/utils';
import React, { useState, useEffect } from 'react';
import { post, get } from 'aws-amplify/api';


function App({ signOut }) {

  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(0);
  async function callEmbed()  {
    try {
      const restOperation = post({
        //src: "https://syo089epz5.execute-api.us-east-1.amazonaws.com/embed"
        apiName: 'fortknoxrestapi',
        path: '/embed',
        options: { 
          body: {
            message: 'Mow the lawn'
          } 
        }
      }); 
      const { body } = await restOperation.response;
      const response = await body.json();

      console.log('GET call succeeded');
      console.log(response);
    } catch (e) {
      console.log('/embed GET call failed: ', JSON.parse(e.response.body));
    }
  }

  useEffect(() => {
    callEmbed()
  }, [isSignedIn]);


  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        setIsSignedIn(1)
      case 'signedOut':
        console.log('user have been signedOut successfully.');
        break;
      case 'tokenRefresh':
        console.log('auth tokens have been refreshed.');
        break;
      case 'tokenRefresh_failure':
        console.log('failure while refreshing auth tokens.');
        break;
      case 'signInWithRedirect':
        console.log('signInWithRedirect API has successfully been resolved.');
        break;
      case 'signInWithRedirect_failure':
        console.log('failure while trying to resolve signInWithRedirect API.');
        break;
      case 'customOAuthState':
        console.log('custom state returned from CognitoHosted UI');
        break;
    }
  });


    return (
      <View className="App">
        <Card> 
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    );
}

export default withAuthenticator(App);