import styles from "./Game.module.css";
import { Menu } from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver";

export const Game = ({rows, columns}) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {
        resetGameOver();
        console.log(`Start gameOver is ${gameOver}`);
    }
    return (
       <div className={styles.game}>
        <Menu onClick={start}></Menu>
       </div>
    )
}