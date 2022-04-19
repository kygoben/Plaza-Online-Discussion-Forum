import React from 'react';
import { PostDisplay } from '../post-display';
import { Card, cardTypes } from '../UIComponents/Card';
import { Reply } from '../reply';
import { useDispatch } from 'react-redux';
import { createReply } from '../../posts-slice';

export const MessageDisplay = ({
    message
}) => {
    const dispatch = useDispatch();

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
                onSubmit={ (reply) => dispatch(createReply({
                    id: message.id,
                    reply
                })) }
            />
        </div>
    );
}