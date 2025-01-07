import React from "react";
import styles from "./GameStats.module.css";

const GameStats = ({ gameStats }) => {

    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <ul className={`${styles.GameStats} ${styles.GameStats__right}`}>
            <li>Level</li>
            <li className={styles.value}>{level}</li>
            <li>Lines to Level</li>
            <li className={styles.value}>{linesToLevel}</li>
            <li>Points</li>
            <li className={styles.value}>{points}</li>
        </ul>
    )
}

export default React.memo(GameStats);
// Uncaught SyntaxError: The requested module '/src/components/GameStats/GameStats.jsx?t=1736290776866' does not provide an export named 'GameStats' (at Tetris.jsx:3:10)
// does this error stem from `export default React.memo(GameStats);`