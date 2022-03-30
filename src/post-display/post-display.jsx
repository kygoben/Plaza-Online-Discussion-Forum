import React from 'react';
import DOMPurify from 'dompurify';

export const PostDisplay = ({
    html
}) => {
    const clean = DOMPurify.sanitize(html);

    return <div
        dangerouslySetInnerHTML={{
            __html: clean
        }}
    ></div>;
};

/**
 * https://github.com/cure53/DOMPurify
 * Uses this so that we can trust the HTML string and avoid security threats
 */
