import React from "react";
import styles from "./GameController.module.css";

export const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {
    const onKeyUp = ({ code }) => {

        if (code === "KeyQ") {
            setGameOver(true);
        }
        console.log(`onKeyUp ${code}`);
    }

    const onKeyDown = ({ code }) => {
        console.log(`onKeyDown ${code}`)
    }

    return (
       <input 
       className={styles.GameController}
       type="text"
       onKeyDown={onKeyDown}
       onKeyUp={onKeyUp}
       autoFocus
       ></input>
    )
}