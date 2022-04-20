import React , {useState} from "react";
import styles from "./likes.module.css"

export const Likes = ({
    votes,
    updateVotes
}) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.upVote} onClick={() => updateVotes(1)}>
                ^
            </button>

            <span>
                {votes}
            </span>

            <button className={styles.downVote} onClick={() => updateVotes(-1)}>
                ^
            </button>
        </div>
    );
}
