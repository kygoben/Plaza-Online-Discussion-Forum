import React, { useState } from 'react';
import { PostDisplay } from '../post-display';
import { Card, cardTypes } from '../UIComponents/Card';
import { Reply } from '../reply';

export const MessageDisplay = (props) => {

    const [ messages, setMessage ] = useState(props.message);

    const submitReply = (reply) => {
        const {replies} = messages;
        replies.push({
            post: reply,
            likes: 0,
            id: Date.now()
        })

        setMessage({
            ...messages,
            replies
        });

        console.log(replies);
    }

    return (
        <div className='app'>
            <Card type={cardTypes.darkGray}>
                <PostDisplay html={messages.post}/>
                {messages.replies.map((reply) => 
                    <Card type={cardTypes.lightGray} key={reply.id}>
                        <PostDisplay html={reply.post}/>
                    </Card>)
                }
                
            </Card>

            <Reply
                onSubmit={submitReply}
            />
        </div>
    );


}