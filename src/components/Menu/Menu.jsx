import React from "react";
import styles from "./Menu.module.css";

export const Menu = ( {onClick } ) => {
    return (
        <div className={styles.container}>
            <button className={styles.menuBtn} onClick={onClick}> Play tetris</button>
        </div>
    )
}