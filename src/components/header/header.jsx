import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <nav>
         <div>
            <div className = {styles.header}>
            <a className="active" href="#home">Plaza</a>
            <strong>|</strong>
            <a href="#home">Home</a>
            <strong>|</strong>
            <a href="#signup">Sign Up</a>
            <strong>|</strong>
            <a className="login" href="#login">Log In</a>
            </div>
            {props.children}
        </div>
        </nav>

    )

}