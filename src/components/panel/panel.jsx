import React from 'react';
import { Card } from '../UIComponents/Card';
import styles from './panel.module.css';


export const Panel = ({
    children,
    content
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
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
