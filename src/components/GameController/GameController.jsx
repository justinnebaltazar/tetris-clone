import React from "react";
import styles from "./GameController.module.css";
import { Action, actionForKey, actionIsDrop } from "../../utils/Input";
import { playerController } from "../../utils/PlayerController";
import { useInterval } from "../../hooks/useInterval";
import { useDropTime } from "../../hooks/useDropTime";

export const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
  }) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
      gameStats
    });
  
    useInterval(() => {
      handleInput({ action: Action.SlowDrop });
    }, dropTime);
  
    const onKeyUp = ({ code }) => {
      const action = actionForKey(code);
      if (actionIsDrop(action)) resumeDropTime();
    };
  
    const onKeyDown = ({ code }) => {
      const action = actionForKey(code);
  
      if (action === Action.Pause) {
        if (dropTime) {
          pauseDropTime();
        } else {
          resumeDropTime();
        }
      } else if (action === Action.Quit) {
        setGameOver(true);
      } else {
        if (actionIsDrop(action)) pauseDropTime();
        if (!dropTime) {
          return;
        }
        handleInput({ action });
      }
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
      />
    );
  };