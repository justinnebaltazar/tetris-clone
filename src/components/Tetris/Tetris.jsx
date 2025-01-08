import styles from "./Tetris.module.css"; 
import { Board } from "../Board/Board";
import GameStats from "../GameStats/GameStats";
import Previews from "../Previews/Previews";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer"

export const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({ rows, columns });
    const [player, setPlayer, resetPlayer] = usePlayer();

    return (
        <div className={styles.Tetris}>
            <Board board={board}></Board>
            <GameStats gameStats={gameStats}></GameStats>
            <Previews tetrominoes={player.tetrominoes}></Previews>
        </div>
    )

}