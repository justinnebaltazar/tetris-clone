import styles from "./Tetris.module.css"; 
import { Board } from "../Board/Board";
import GameStats from "../GameStats/GameStats";
import Previews from "../Previews/Previews";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import { GameController } from "../GameController/GameController";

export const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({ 
        rows, 
        columns, 
        player, 
        resetPlayer, 
        addLinesCleared,
     });

    return (
        <div className={styles.Tetris}>
            <Board board={board}></Board>
            <GameStats gameStats={gameStats}></GameStats>
            <Previews tetrominoes={player.tetrominoes}></Previews>
            <GameController board={board} 
                gameStats={gameStats} 
                player={player} 
                setGameOver={setGameOver} 
                setPlayer={setPlayer}>
            </GameController>
        </div>
    )

}