import React, { useEffect } from "react";
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

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const action = actionForKey(event.code);

      if (action) {
        event.preventDefault();
      }

      if (action === Action.Pause) {
        dropTime ? pauseDropTime() : resumeDropTime();
      } else if (action === Action.Quit) {
        setGameOver(true);
      } else {
        if (actionIsDrop(action)) pauseDropTime();
        if (dropTime) handleInput({ action });
      }
    };

    const handleKeyUp = (event) => {
      const action = actionForKey(event.code);
      if (actionIsDrop(action)) resumeDropTime();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dropTime, pauseDropTime, resumeDropTime, setGameOver, handleInput]);

  return null;
};