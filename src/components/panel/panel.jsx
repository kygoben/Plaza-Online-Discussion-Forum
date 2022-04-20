import React from 'react';
import { Card } from '../UIComponents/Card';
import { Button, buttonTypes } from '../UIComponents/Button';
import styles from './panel.module.css';
import { useDispatch } from 'react-redux';
import { toggleNewPost } from '../../slices/new-post-slice';

export const Panel = ({
    children,
    content
}) => {
    const dispatch = useDispatch();


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
                            return <Card>
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
