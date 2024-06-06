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
import React, { useStat, useEffect } from 'react';
import { post, get } from 'aws-amplify/api';
import { Amplify } from "aws-amplify";

const image = {uri: '/images/MyFortKnox_FlyerDraft.png'};


function App({signOut}) {


  async function callEmbed()  {    
    //{"success":"embed post call succeed!","url":"/embed","body":{"embedUrl":"https://retooldev.myfortknox.co/embed-redirect?nonce=e7ac0370-caee-4988-b22c-e6d45957972f&destination=%2Fembedded%2Fauthed%2F6b79c648-0bce-11ef-9ee7-8b6ef326de56"}}

    try {
      const restOperation = post({
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
  
      console.log('POST call succeeded');
      console.log(response);
    } catch (e) {
      console.log('POST call failed: ', JSON.parse(e.response.body));
    }
  }

  useEffect(() => {
    callEmbed()
  }, [])
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

export default withAuthenticator(App)

/*import React, { Component } from "react";

const image = {uri: '/images/MyFortKnox_FlyerDraft.png'};


class App extends Component {
	render() {
		const myStyle = {
			backgroundImage: `url(${
				process.env.PUBLIC_URL + "/images/MyFortKnox_FlyerDraft.png"
			})`,
			height: "100vh",
			marginTop: "-70px",
			fontSize: "50px",
			backgroundSize: "100%",
			backgroundRepeat: "no-repeat",
      backgroundColor
		};
		return (
			<div style={myStyle}>
				<h1>GeeksForGeeks</h1>
			</div>
		);
	}
}

export default App;*/
