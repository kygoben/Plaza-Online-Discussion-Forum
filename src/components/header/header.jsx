import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <nav>
         <div>
            <div className = {styles.header}>
            <a class="active" href="#home">PLAZA</a>
            <a href="#news">HOME</a>
            <a href="#contact">ACCOUNT</a>
            </div>
            {props.children}
        </div>
        </nav>

    )

}