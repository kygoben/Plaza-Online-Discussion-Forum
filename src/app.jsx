import React, { useState } from 'react';
import { Editor } from './editor';
import { Button, buttonTypes } from './UIComponents/Button';
import { PostDisplay } from './post-display';
import { Card, cardTypes } from './UIComponents/Card';

export const App = () => {
    const [ text, setText ] = useState();

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
            <Card type={cardTypes.pink}>
                <PostDisplay html={text}/>
            </Card>
        </div>
    );
}
