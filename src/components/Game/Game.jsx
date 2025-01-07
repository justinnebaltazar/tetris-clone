import styles from "./Game.module.css";
import { Menu } from "../Menu/Menu";

export const Game = ({rows, columns}) => {
    const start = () => {
        console.log("game started")
    }
    return (
       <div className={styles.game}>
        <Menu onClick={start}></Menu>
       </div>
    )
}