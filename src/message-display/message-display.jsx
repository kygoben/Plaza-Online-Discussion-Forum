import React from 'react';
import { PostDisplay } from '../post-display';
import { Card, cardTypes } from '../UIComponents/Card';
import { Reply } from '../reply';

export const MessageDisplay = ({
    message,
    updateMessage
}) => {
    const submitReply = (reply) => {
        const {replies} = message;
        replies.push({
            post: reply,
            likes: 0,
            id: globalThis.crypto.randomUUID()
        })

        updateMessage({
            ...message,
            replies
        });
    }

    return (
        <div>
            <Card type={cardTypes.darkGray}>
                <PostDisplay html={message.post}/>
                {message.replies.map((reply) => 
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