import React, { useState } from 'react';
import { MessageDisplay } from './message-display';
import { Header } from './header';
import { initMessages } from '../dummy-data';
import { Reply } from './reply';
import { Panel } from './panel';
import { Likes } from './likes/likes';

export const App = () => {
    const [messages, setMessages] = useState(initMessages);

    const updateMessage = (index) => (msg) => {
        setMessages(
            (prevMessages) => prevMessages.map(
                (message, i) => i === index ? msg : message
            )
        )
    }

    const createMessage = (post) => {
        setMessages(
            (previous) => [...previous, {
                post,
                likes: 0,
                replies: []
            }]
        );
    }

    return (
        <Header>
            <Panel>
                <Likes votes = {69}/>
                {messages.map(
                    (message, index) =>
                        <MessageDisplay
                            message={message}
                            updateMessage={updateMessage(index)}
                        />
                )}
                Create new message
                <Reply onSubmit={createMessage}/>
            </Panel>
        </Header>
    );
}

// globalThis.crypto.randomUUID
