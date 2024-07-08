import { Message } from '@aws-amplify/ui-react';
import * as React from "react";
import { useState, FormEventHandler } from 'react';
import { post, get } from 'aws-amplify/api';

//const functionUrl = 'https://xxxxxxxxxxxxxxxx.lambda-url.eu-west-3.on.aws/';

type Message = {
    text: String,
    sender: 'ai' | 'user'
};

function App() {
    const [newInputValue, setNewInputValue] = useState('');
    const [ messages, setMessages ] = useState<Message[]>([]);
    const [aiResponseMessage, setAiResponseMessage] = useState('');

    const newMessage: React.FormEventHandler = async (e) => {
        e.preventDefault();
        setNewInputValue('');
        const newMessages: Message[] = [...messages, {
          text: newInputValue,
          sender: 'user'
        }];
        setMessages(newMessages);
        
        try {
            const restOperation = post({
                apiName: '',
                path: '',
                options: {
                    body: {
                        messages: JSON.stringify({ messages: newMessages })
                    }
                }
            });

            const response = await restOperation.response;
            const openAIMessage = response.openAIMessage as string;
            setAiResponseMessage(openAIMessage);
            setMessages([...newMessages, {
                sender: 'ai',
                text: aiResponseMessage
            }]);
        }
        catch (e) {
            console.log('POST /newVendorWire for OpenAI call failed: ', JSON.parse(e.response));
        }
      }

  return <main>
    <h1>New Wire AI Assistant</h1>
    <div>
    {messages.map((message, index) => <p key={index} className={"message " + message.sender}>
        {message.text}
      </p>)}
    </div>
    <form className="input-form" onSubmit={newMessage}>
      <input type="text"
            placeholder="Message"
            value={newInputValue} 
            onChange={e => setNewInputValue(e.currentTarget.value)} />
      <input type="submit" value="Send" />
    </form>
  </main>
}

