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
import axios from 'axios';
import Retool from 'react-retool';
import { Hub } from 'aws-amplify/utils';
import React, { useState } from 'react';


function App({ signOut }) {

  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState("");

  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        console.log('user has been signedIn successfully.');

        const {data} = axios.post('https:fkdev.cdibs.com//api/embed-url/external-user', 
                                {landingPageUuid:'a0a66088-0bce-11ef-b20a-e31e0df5da24', 
                                groupIds:['3117369'], 
                                externalIdentifier:'88d82974-543c-4fb1-83e8-740c8977f9d7', 
                                userInfo:{
                                  firstName: 'Chris',
                                  lastName: 'Palmer',
                                  email: 'chrispalmer@undefeatedsoftware.com'
                                }
                                }
                                , {
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer retool_01hz5h90k9vxt4pq52epstwvzr'
                                  }
                                }
      )

          console.log(data)
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