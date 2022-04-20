import React from 'react';
import { PostDisplay } from '../post-display';
import { Card, cardTypes } from '../UIComponents/Card';
import { Reply } from '../reply';
import { useDispatch } from 'react-redux';
import { createReply, updateReplyVotes, updatePostVotes } from '../../slices/posts-slice';
import styles from './message-display.module.css';

export const MessageDisplay = ({
    message
}) => {
    const dispatch = useDispatch();

    const replyVotes = (postId, replyId) => (value) => dispatch(updateReplyVotes({
        postId,
        replyId,
        value
    }));

    const postVotes = (postId) => (value) =>dispatch(updatePostVotes({
        postId,
        value
    }))

    return (
        <div>
            <Card type={cardTypes.darkGray}>
                <Card type = {cardTypes.pink}>
                    <h3 className={styles.title}>{message.title}</h3>
                </Card>
                <PostDisplay html={message.post} votes={message.votes} updateVotes={postVotes(message.id)}/>
                {message.replies.map((reply) => 
                    <Card type={cardTypes.lightGray} key={reply.id}>
                        <PostDisplay html={reply.post} updateVotes={replyVotes(message.id, reply.id)} votes={reply.votes}/>
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