import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';
import { buttonTypes } from './button-types';

const typeKey = {
    [buttonTypes.green]: styles.green,
    [buttonTypes.blue]: styles.blue,
    [buttonTypes.red]: styles.red
}

export const Button = ({
    onClick,
    type = buttonTypes.green,
    children,
    className
}) => {
    return (
        <div className={className}>
            <button
                onClick={onClick}
                className={classNames(styles.button, typeKey[type])}
                role='button'
            >
                {children}
            </button>
        </div>
        
    );
};

/*
https://getcssscan.com/css-buttons-examples
*/
