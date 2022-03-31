import React, { useState } from 'react';
import { PostDisplay } from './post-display';
import { Card, cardTypes } from './UIComponents/Card';
import { Reply } from './reply';

const message = {
    post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
    likes: 400,
    replies: [
        {
            post: '<p>We really do have a lot done. Here is a table:</p><figure class=\"table\"><table><tbody><tr><td>X</td><td>X</td><td>O</td></tr><tr><td>O</td><td>X</td><td>X</td></tr><tr><td>X</td><td>O</td><td>O</td></tr></tbody></table></figure><p>That was a fun game of tik-tak-toe</p>',
            likes: 200,
            id: 0
        }
    ]
};

export const App = () => {
    const [ messages, setMessage ] = useState(message);

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
