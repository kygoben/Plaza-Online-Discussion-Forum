import { Editor } from '../editor';
import { Card, cardTypes } from '../UIComponents/Card';
import React, { useState } from 'react';
import { Button, buttonTypes } from '../UIComponents/Button';
import styles from './reply.module.css';

export const Reply = ({
    onSubmit
}) => {
    const [ text, setText ] = useState();
    const [ isVisible, setIsVisible ] = useState(false);

    return (
        <div>
            <Card type={cardTypes.lightBlue}>
                {isVisible ? <>
                    <Editor 
                        text ={text}
                        setText={setText}
                    />
                    <div className={styles.end}>
                        <Button
                            type={buttonTypes.green}
                            onClick={() => {
                                if (!text) return;
                                onSubmit(text);
                                setText('');
                                setIsVisible(false);
                            } }
                            className={styles.innerButton}
                        >
                            Submit
                        </Button>
                        <Button
                            type={buttonTypes.red}
                            onClick={() => {
                                setText('');
                                setIsVisible(false);
                            } }
                        >
                            Cancel
                        </Button>
                    </div>
                </> : 
                <h3
                    className={styles.reply}
                    onClick={() => {
                        setIsVisible(true);
                    } }
                >
                    Reply
                </h3>}
            </Card>
        </div>
    );
}