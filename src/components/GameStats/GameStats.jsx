import React from "react";
import styles from "./GameStats.module.css";

const GameStats = ({ gameStats }) => {

    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <ul className={`${styles.GameStats} ${styles.GameStats__right}`}>
            <li>level</li>
            <li className={styles.value}>{level}</li>
            <li>lines to Level</li>
            <li className={styles.value}>{linesToLevel}</li>
            <li>points</li>
            <li className={styles.value}>{points}</li>
        </ul>
    )
}

export default React.memo(GameStats);