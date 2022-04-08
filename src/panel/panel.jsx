import React from 'react';
import styles from './panel.module.css';

const thejsx = <div><p>We really do have a lot done. <strong>I THINK WE SHOULD GET VOTED BEST FOR THESE REASONS</strong></p><ul><li>Piazza looks funny<ul><li>Ours looks funny too, but at least we can say we are noobs</li></ul></li><li>The source code for ours is available</li><li>It has a weird rich text editor</li><li>It is the best</li></ul><p>Please consider all of the above</p></div>;

export const Panel = ({
    children
}) => {
    return (
        <>
            <div className={styles.panel}>
                {
                    [...Array(10).keys()].map(() => thejsx)
                }
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </>
    );
}
