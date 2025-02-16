import React from "react";
import styles from "./Menu.module.css";

export const Menu = ( { onClick } ) => {
    return (
        <div className={styles.container}>
            <h1>welcome to another tetris clone</h1>
            <div className={styles.links}>
                <ul className={styles.nav}>
                    <li>instructions</li>
                    <li>settings</li>
                    <li>source</li>
                </ul>
            </div>
            <button className={styles.menuBtn} onClick={onClick}> play tetris</button>
        </div>
    )
}
