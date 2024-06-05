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
import React, { useStat, useEffect } from 'react';
import { post, get } from 'aws-amplify/api';
import { Amplify } from "aws-amplify";

const image = {uri: '/images/MyFortKnox_FlyerDraft.png'};


function App({signOut}) {


  async function callEmbed()  {
      axios.post('https://retooldev.myfortknox.co/api/embed-url/external-user', 
      {
        "landingPageUuid": "6b79c648-0bce-11ef-9ee7-8b6ef326de56",
        "groupIds": [3117369],
        "externalIdentifier": "2db6bd4c-84e8-43ee-ad38-4e06ed2614e8",
        "userInfo": {
          "firstName": "Chris",
          "lastName": "Palmer",
          "email": "chrispalmer@undefeatedsoftware.com"
        }
      },
      {
        headers: {
          'Authorization': `Bearer retool_01hz5h90k9vxt4pq52epstwvzr`,
          'Content-type': 'application/json'
          
        }
      }

    )
    .then(response => {
      //if (!response.ok) throw new Error('Response not OK');

      //res.json({success: 'embedV2 post call succeed!', url: req.url})
      console.log(response)
    })
    .catch(err => {
      console.log("error")
    })
  }
    
    // try {
    //   const restOperation = post({
    //     apiName: 'fortknoxrestapi',
    //     path: '/embedV2',
    //     options: {
    //       body: {
    //         message: 'Mow the lawn'
    //       }
    //     }
    //   });
  
    //   const { body } = await restOperation.response;
    //   const response = await body.json();
  
    //   console.log('POST call succeeded');
    //   console.log(response);
    // } catch (e) {
    //   console.log('POST call failed: ', JSON.parse(e.response.body));
    // }
  //}

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
