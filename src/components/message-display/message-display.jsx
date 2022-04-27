import React from 'react';
import { PostDisplay } from './post-display';
import { Card, cardTypes } from '../UIComponents/Card';
import { Reply } from './reply';
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

    const postVotes = (postId) => (value) => dispatch(updatePostVotes({
        postId,
        value
    }));

    console.log(message);

    const defaultText = <Card className={styles.defaultText}>
        <h1>No Post Selected</h1>
    </Card>

    return (
        !!message ?
        <Card type={cardTypes.darkBlue}>
            <Card type={cardTypes.darkGray}>
                <Card>
                    <h3 className={styles.title}>{message.title}</h3>
                </Card>
                <div className={styles.content}>
                    <PostDisplay html={message.post} votes={message.votes} updateVotes={postVotes(message.id)}/>
                    {message.replies.map((reply) => 
                        <Card type={cardTypes.lightGray} key={reply.id}>
                            <PostDisplay html={reply.post} updateVotes={replyVotes(message.id, reply.id)} votes={reply.votes}/>
                        </Card>)
                    }
                </div>
            </Card>

            <Reply
                onSubmit={ (reply) => dispatch(createReply({
                    id: message.id,
                    reply
                })) }
            />
        </Card>:
        defaultText
    );
}