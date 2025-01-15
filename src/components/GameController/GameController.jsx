import React from "react";
import styles from "./GameController.module.css";
import { Action, actionForKey } from "../../utils/Input";
import { playerController } from "../../utils/PlayerController";

export const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code); 

        if (action == Action.Quit) {
            setGameOver(true);
        }
        console.log(`onKeyUp ${code}`);
    }

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);
        handleInput({ action });
    };

    const handleInput = ({ action }) => {
        playerController({
            action,
            board, 
            player,
            setPlayer, 
            setGameOver
        }); 
    };

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