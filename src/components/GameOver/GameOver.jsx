import React from "react";
import styles from "./GameOver.module.css";

export const GameOver = ({ onRestart, onMainMenu }) => {
    return (
        <div className={styles.gameOver}>
            <h1>game over</h1>
            <button onClick={onRestart}>play again?</button>
            <button onClick={onMainMenu}>main menu</button>
        </div>
    );
};
