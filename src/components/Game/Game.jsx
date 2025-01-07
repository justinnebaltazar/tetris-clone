import styles from "./Game.module.css";
import { Menu } from "../Menu/Menu";
import { Tetris } from "../Tetris/Tetris";
import { useGameOver } from "../../hooks/useGameOver";

export const Game = ({rows, columns}) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => resetGameOver();
    
    return (
       <div className={styles.game}>
        {gameOver ? (
            <Menu onClick={start}></Menu>
        ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver}></Tetris>
        )}
        
       </div>
    )
}