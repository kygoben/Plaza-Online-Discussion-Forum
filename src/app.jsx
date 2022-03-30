import React, { useState } from 'react';
import { Editor } from './editor';
import { Button, buttonTypes } from './UIComponents/Button';
import { PostDisplay } from './post-display';
import { Card, cardTypes } from './UIComponents/Card';
import { Reply } from './reply';

const message = {
    post: '<p>327 sucks</p>',
    likes: 400,
    replies: [
        {
            post: '<p>I agree</p>',
            likes: 200
        }
    ]
};

export const App = () => {
    const [ reply, setReply ] = useState();
    const [ messages, setMessage ] = useState(message);

    const submitReply = () => {
        const {replies} = messages;
        replies.push({
            post: reply,
            likes: 0
        })

        setMessage({
            ...messages,
            replies
        });

        console.log(messages);
    }

    return (
        <div className='app'>
            <Card type={cardTypes.darkGray}>
                <PostDisplay html={messages.post}/>
                {messages.replies.map(
                    (reply) => <Card type={cardTypes.lightGray}>
                    <PostDisplay html={reply.post}/>
                </Card>
                    )
                }
                
            </Card>

            <Reply
                onSubmit={submitReply}
                text={reply}
                setText={setReply}
            />
        </div>
    );
}
