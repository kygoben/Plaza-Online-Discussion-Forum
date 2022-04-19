import React from 'react';
import styles from './card.module.css';
import { cardTypes } from './card-types';
import classNames from 'classnames';

const typeKey = {
    [cardTypes.darkGray]: styles.darkGray,
    [cardTypes.lightGray]: styles.lightGray,
    [cardTypes.white]: styles.white,
    [cardTypes.pink]: styles.pink,
    [cardTypes.red]: styles.red,
    [cardTypes.lightBlue]: styles.lightBlue
};

export const Card = ({
    children,
    type = cardTypes.lightGray
}) => {
    return (
        <div className={classNames(styles.card, typeKey[type])}>
            {children}
        </div>
    );
}
