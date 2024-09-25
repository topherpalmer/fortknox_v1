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
import axios, { getAdapter } from 'axios';
import Retool from 'react-retool';
import { Hub } from 'aws-amplify/utils';
import React, { useState, useEffect } from 'react';
import { post, get } from 'aws-amplify/api';
import { Amplify } from "aws-amplify";
import { Row, Container } from "reactstrap";
import { signIn, signOut, getCurrentUser } from '@aws-amplify/auth';


const image = {uri: '/images/MyFortKnox_FlyerDraft.png'};

 
function App({signOut}) {

  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState("");

  async function callEmbed()  {    

    try { 
 
      const restOperation = post({
        apiName: 'fortknoxrestapi',
        path: '/embed'
        // options: {
        //   body: {
        //     message: 'Mow the lawn'
        //   } 
        // }
      });
  
      const { body } = await restOperation.response;
      const response = await body.json();
      setRetoolEmbedUrl(response.embedUrl);
      console.log(retoolEmbedUrl)
      console.log('POST call succeeded');
      console.log(response);
    } catch (e) {
        console.log('POST call failed: ', JSON.parse(e.response));
    }
  }

  useEffect(() => {
    callEmbed()
  }, [])

  //AMPLIFY
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the current authenticated user
    getCurrentUser()
      .then(userData => {
        setUser(userData);  // Save the user data to state
      })
      .catch(err => console.log('Error getting user: ', err));
  }, []);

  return (
    retoolEmbedUrl && (
 
      <div class="parent-container" style={{ height: 1000 }}>
        <Retool url={retoolEmbedUrl} frameborder="0" allowfullscreen class="child-container" data={{ userName: user.username}} onData={() => {}} />
      </div>
 

    )
  );   
 
}

export default withAuthenticator(App)

 