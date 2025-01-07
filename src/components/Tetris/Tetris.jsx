import styles from "./Tetris.module.css"; 
import { Board } from "../Board/Board";

import { useBoard } from "../../hooks/useBoard";

export const Tetris = ({ rows, columns, setGameOver }) => {
    const [board, setBoard] = useBoard({ rows, columns });
    return (
        <Board board={board}></Board>
    )
}