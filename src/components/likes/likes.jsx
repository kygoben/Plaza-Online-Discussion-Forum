import React , {useState} from "react";
import styles from "./likes.module.css"

export const Likes = (props) => {
    const [likes, setLikes] = useState(props.votes);

    return (
        <div className={styles.wrapper}>
            <button className={styles.upVote} onClick={() => setLikes(likes + 1)}>
                ^
            </button>

            <span>
                {likes}
            </span>

            <button className={styles.downVote} onClick={() => setLikes(likes - 1)}>
                ^
            </button>
        </div>
    );
}
