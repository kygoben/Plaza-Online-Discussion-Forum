import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <nav>
         <div>
            <div className = {styles.header}>
            <a className="active" href="#home">Plaza</a>
            <a href="#home">Home</a>
            <a href="#signup">Sign Up</a>
            <a className="login" href="#login">Log In</a>
            </div>
            {props.children}
        </div>
        </nav>

    )

}