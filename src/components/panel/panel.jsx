import React from 'react';
import { Card, cardTypes } from '../UIComponents/Card';
import { Button, buttonTypes } from '../UIComponents/Button';
import styles from './panel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewPost } from '../../slices/new-post-slice';
import { setDisplayedMessage } from '../../slices/displayed-message';

export const Panel = ({
    children,
    content
}) => {
    const dispatch = useDispatch();
    const displayedMessaged = useSelector(state => state.displayedMessage);


    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <div className={styles.buttonWrapper}>
                    <Button 
                        type={buttonTypes.blue}
                        onClick={() => dispatch(toggleNewPost())}
                    >
                        Create Post
                    </Button>
                </div>
                {
                    content.map(
                        (post) => {
                            return <Card 
                                className={styles.card} 
                                onClick={() => dispatch(setDisplayedMessage(String(post.id)))}
                                type={String(post.id) == String(displayedMessaged) ? cardTypes.lightBlue : cardTypes.lightGray}
                            >
                                {post.title}
                            </Card>;
                        }
                    )
                }
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
}
