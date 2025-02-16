import styles from "./BoardCell.module.css";

export const BoardCell = ({ cell }) => {
    return (
        <div className={`${styles.BoardCell} ${cell.className}`}>
            <div className={styles.Sparkle}></div>
        </div>
    )
}
