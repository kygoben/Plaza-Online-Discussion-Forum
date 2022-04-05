import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <div>
            <div className = {styles.header}>
                Header
            </div>
            {props.children}
        </div>
    )

}