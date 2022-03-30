import { Editor } from './editor';
import { Card, cardTypes } from './UIComponents/Card';
import React,{useState} from 'react';
import { Button, buttonTypes } from './UIComponents/Button';

export const Reply = (props) => {
    
    return(
        <Card type={cardTypes.red}>
            <Editor 
                text ={props.text}
                setText={props.setText}
            />
            <Button
                type={buttonTypes.Submit}
                onClick={props.onSubmit}
            />
        </Card>

    );

}