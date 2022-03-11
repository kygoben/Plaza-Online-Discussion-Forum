import React from 'react';
import { Editor } from './editor';
import { Button, buttonTypes } from './UIComponents/Button';

export const App = () => {
    return (
        <div className='app'>
            <Editor/>
            <Button
                type={buttonTypes.Submit}
                onClick={ () => {
                    window.alert('I am a button');
                } }
            />
        </div>
    );
}
