import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <div>
            <div className = {styles.header}>
                <strong>PLAZA</strong>
            </div>
            {props.children}
        </div>
    )

}