import React, { useState } from 'react';
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
    const [filtering, setFiltering] = useState(false);


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
                    <Button 
                        type={filtering ? buttonTypes.green : buttonTypes.lightGreen}
                        onClick={() => setFiltering((prev) => !prev)}
                    >
                        {`Sorting by ${filtering ? 'recency' : 'likes'}`}
                    </Button>
                </div>
                {
                    [...content].sort((a, b) => filtering && (a.votes < b.votes)).map(
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
