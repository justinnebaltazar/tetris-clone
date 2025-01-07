import styles from "./BoardCell.module.css";

export const BoardCell = ({ cell }) => {
    // the class name has to be styles.BoardCell and ${cell.className}
    return (
        <div className={`${styles.BoardCell} ${cell.className}`}>
            <div className={styles.Sparkle}></div>
        </div>
    )
}
