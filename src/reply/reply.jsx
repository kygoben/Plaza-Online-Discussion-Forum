import { Editor } from '../editor';
import { Card, cardTypes } from '../UIComponents/Card';
import React, { useState } from 'react';
import { Button, buttonTypes } from '../UIComponents/Button';
import styles from './reply.module.css';
import classNames from 'classnames';

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
                            type={buttonTypes.Submit}
                            onClick={() => {
                                if (!text) return;
                                onSubmit(text);
                                setText('');
                            } }
                            className={styles.innerButton}
                        />
                        <Button
                            type={buttonTypes.Cancel}
                            onClick={() => {
                                setText('');
                                setIsVisible(false);
                            } }
                        />
                    </div>
                </> : 
                <h3
                    className={classNames(styles.reply, styles.end)}
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