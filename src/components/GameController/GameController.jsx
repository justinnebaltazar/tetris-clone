import React from "react";
import styles from "./GameController.module.css";
import { Action, actionForKey } from "../../utils/Input";
import { playerController } from "../../utils/PlayerController";
import { useInterval } from "../../hooks/useInterval";
import { useDropTime } from "../../hooks/useDropTime";

export const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {

    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        board, 
        gameStats, 
        player, 
        setGameOver, 
        setPlayer
    });
 
    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, 1000);
    // every second handle input is called
    
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code); 

        if (action == Action.Quit) {
            setGameOver(true);
        }
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