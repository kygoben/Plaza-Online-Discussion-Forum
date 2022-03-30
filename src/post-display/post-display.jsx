import React from 'react';
import DOMPurify from 'dompurify';
import styles from './post-display.module.css';

export const PostDisplay = ({
    html
}) => {
    const clean = DOMPurify.sanitize(html);

    return <span
        className={styles.postDisplay}
        dangerouslySetInnerHTML={{
            __html: clean
        }}
    ></span>;
};

/**
 * https://github.com/cure53/DOMPurify
 * Uses this so that we can trust the HTML string and avoid security threats
 */
