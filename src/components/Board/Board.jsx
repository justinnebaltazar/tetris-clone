import { BoardCell } from "./BoardCell";
import styles from "./Board.module.css";

export const Board = ({ board }) => {

    const boardStyles = {
        gridTemplateRows:  `repeat(${board.size.rows}, 1fr)`, 
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    };

    return (
        <div className={styles.Board} style={boardStyles}>
            {board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key={x * board.size.columns + x} cell={cell}></BoardCell>
                ))
            )}
        </div>
    );
};