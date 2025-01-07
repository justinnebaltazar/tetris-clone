import styles from "./Tetris.module.css"; 
import { Board } from "../Board/Board";
import GameStats from "../GameStats/GameStats";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";

export const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({ rows, columns });

    return (
        <div className={styles.Tetris}>
            <Board board={board}></Board>
            <GameStats gameStats={gameStats}></GameStats>
        </div>
    )

}