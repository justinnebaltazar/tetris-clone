import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to another tetris clone</h1>
                <h3>Play</h3>
                <ul className={styles.nav}>
                    <li>Instructions</li>
                    <li>Settings</li>
                    <li>Source</li>
                </ul>
            </div>
        </div>
    )
}