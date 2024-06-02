import React, { Component, useEffect, useState } from "react";
import { generateClient, get, post } from 'aws-amplify/api';



const image = {uri: '/images/MyFortKnox_FlyerDraft.png'};


function App() {

  const client = generateClient();

  async function callEmbed()  {
    try {
      const restOperation = post({
        apiName: 'fortknoxrestapi',
        path: '/embed',
        // options: {
        //   body: {
        //     message: 'Mow the lawn'
        //   }
        // }
      }); 
      const { body } = await restOperation.response;
      const response = await body.json();
  
      console.log('GET call succeeded');
      console.log(response);
    } catch (e) {
      console.log('/embed GET call failed: ', JSON.parse(e.response.body));
    }
  }

  /*async function callApi() {
    const people = await generateClient.API.get('fortknoxrestapi', '/embed')
  }*/
  useEffect(() => {
    callEmbed()
  }, [])

  /*  const myStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/MyFortKnox_FlyerDraft.png"})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat"
    };
    const toolbarStyle = {
      height: "100vh",
      a
    }*/
    return (

      <div >
        <h1>GeeksForGeeks</h1>
      </div>
    );
}

export default App

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
