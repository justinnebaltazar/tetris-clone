import styles from "./Game.module.css";
import { Menu } from "../Menu/Menu";
import { Tetris } from "../Tetris/Tetris";
import { useGameOver } from "../../hooks/useGameOver";
import { GameOver } from "../GameOver/GameOver";
import { useState } from "react";

export const Game = ({rows, columns}) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const [isPlaying, setIsPlaying] = useState(false);

    const startGame = () => {
        resetGameOver();
        setIsPlaying(true);
    }

    const goToMenu = () => {
        setIsPlaying(false);
        resetGameOver();
    }
    
    return (
       <div className={styles.game}>
            {!isPlaying ? (
                <Menu onClick={startGame}/>
            ) : gameOver ? (
                <GameOver onRestart={startGame} onMainMenu={goToMenu}></GameOver>
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver}></Tetris>
            )}
       </div>
    )
}