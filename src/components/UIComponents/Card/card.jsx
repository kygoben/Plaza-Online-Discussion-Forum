import React from 'react';
import styles from './card.module.css';
import { cardTypes } from './card-types';
import classNames from 'classnames';

const typeKey = {
    [cardTypes.darkGray]: styles.darkGray,
    [cardTypes.lightGray]: styles.lightGray,
    [cardTypes.white]: styles.white,
    [cardTypes.red]: styles.red,
    [cardTypes.lightBlue]: styles.lightBlue,
    [cardTypes.darkBlue]: styles.darkBlue
};

export const Card = ({
    children,
    type = cardTypes.lightGray,
    className,
    onClick = () => {}
}) => {
    return (
        <div className={classNames(styles.card, typeKey[type], className)} onClick = {onClick}>
            {children}
        </div>
    );
}
