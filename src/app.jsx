import React, { useState } from 'react';
import { Editor } from './editor';
import { Button, buttonTypes } from './UIComponents/Button';
import { PostDisplay } from './post-display';
import { Card, cardTypes } from './UIComponents/Card';
import { Reply } from './reply';

export const App = () => {
    const [ text, setText ] = useState();
    const [ reply, setReply ] = useState();
    const [ message, setMessage ] = useState('');

    const submitReply = () => {
        window.alert(reply);
        setMessage(reply);
    }

    return (
        <div className='app'>
            <Editor
                text={text}
                setText={setText}
            />
            <Button
                type={buttonTypes.Submit}
                onClick={ () => {
                    window.alert('I am a button');
                } }
            />
            
            <Reply
                onSubmit={submitReply}
                text={reply}
                setText={setReply}
            />
            <Card type={cardTypes.pink}>
                <PostDisplay html={message}/>
            </Card>
        </div>
    );
}
