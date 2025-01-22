import { Action } from "./Input";
import { rotate } from "./Tetrominoes";
import { hasCollision, isWithinBoard } from "./Board";

const attemptRotation = ({ board, player, setPlayer }) => {
    const shape = rotate({
        piece: player.tetromino.shape, 
        direction: 1
    });

    const position = player.position;
    const isValidRotation = isWithinBoard({ board, position, shape }) && !hasCollision({ board, position, shape });

    if(isValidRotation) {
        setPlayer({
            ...player, 
            tetromino: {
                ...player.tetromino, 
                shape
            }
        });
    } else {
        return false;
    }
}

const attemptMovement = ({ board, action, player, setPlayer, setGameOver }) => {
    const delta = { row: 0, column: 0};
    let isFastDropping = false;

    if (action === Action.FastDrop) {
        isFastDropping = true;
    } else if (action === Action.SlowDrop) {
        delta.row += 1;
    } else if (action === Action.Left) {
        delta.column -= 1; 
    } else if (action === Action.Right) {
        delta.row += 1;
    }

    const { collided, nextPosition } = movePlayer({
        delta, 
        position: player.position, 
        shape: player.tetromino.shape, 
        board
    });
};

export const playerController = ({ action, board, player, setPlayer, setGameOver }) => {
    if (!action) {
        return;
    }

    if (action === Action.Rotate) {
        attemptRotation({ board, player, setPlayer });
    } else {
        attemptMovement({ board, player, setPlayer, action, setGameOver });
    }
}