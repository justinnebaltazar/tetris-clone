import React from "react";
import styles from "./GameController.module.css";
import { Action, actionForKey } from "../../utils/Input";

export const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code); 

        if (action == Action.Quit) {
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