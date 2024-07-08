import React, { FC } from 'react'
import { useState, FormEventHandler } from 'react';
import { post, get } from 'aws-amplify/api';
import "@aws-amplify/ui-react/styles.css";

//const functionUrl = 'https://xxxxxxxxxxxxxxxx.lambda-url.eu-west-3.on.aws/';

// type Message = {
//     text: String,
//     sender: 'ai' | 'user'
// };

function App(){

  const [newInputValue, setNewInputValue] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [aiResponseMessage, setAiResponseMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
        setNewInputValue('');
        const newMessage = {
          text: newInputValue,
          sender: 'user'
        };
        setMessages(messages);
        
       try {
            const restOperation = post({
                apiName: 'fortknoxrestapi',
                path: '/newVendorWire',
                options: {
                    body: {
                        messages: JSON.stringify(messages),
                        newMessage: JSON.stringify(newMessage)
                    }
                }
            });

            console.log(restOperation);
                  
            const { body } = await restOperation.response;
            console.log(body);
 
            const response = await body.json();
            console.log(response);

            setAiResponseMessage(response ? response.openAIMessage : "response from newvendorwire openai is null");
            setMessages([...messages, {
                sender: 'system',
                text: aiResponseMessage
            }]);
        }
        catch {
            console.log('POST /newVendorWire for OpenAI call failed: ');
        }
      }

  return <main>
    <h1>New Wire AI Assistant</h1>
    <div>
    {messages.map((message, index) => <p key={index} className={"message " + message.sender}>
        {message.text}
      </p>)}
    </div>
    <form className="input-form" onSubmit={handleSubmit}>
      <input type="text"
            placeholder="Message"
            value={newInputValue} 
            onChange={event => setNewInputValue(event.currentTarget.value)} />
      <input type="submit" value="Send" />
    </form>
  </main>
}

export default App;
