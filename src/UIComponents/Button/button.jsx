import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';
import { buttonTypes } from './button-types';

const typeKey = {
    [buttonTypes.Submit]: styles.submit,
    [buttonTypes.Update]: styles.update,
    [buttonTypes.Cancel]: styles.cancel
}

export const Button = ({
    onClick,
    type = buttonTypes.Submit,
    className
}) => {
    return (
        <div className={className}>
            <button
                onClick={onClick}
                className={classNames(styles.button, typeKey[type])}
                role='button'
            >
                {type}
            </button>
        </div>
        
    );
};

/*
https://getcssscan.com/css-buttons-examples
*/
