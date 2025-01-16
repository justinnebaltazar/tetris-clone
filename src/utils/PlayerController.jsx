import { Action } from "./Input";
import { rotate } from "./Tetrominoes";

const attemptRotation = ({ board, player, setPlayer }) => {
    const shape = rotate({
        piece: player.tetromonino.shape, 
        direction: 1
    });

    const position = player.position;
    const isValidRotation = isWithinBoard({ board, position, shape }) && !hasCollision({ board, position, shape });

    if(isValidRotation) {
        setPlayer({
            ...player, 
            tetromonino: {
                ...player.tetromonino, 
                shape
            }
        });
    } else {
        return false;
    }
}

export const playerController = ({ action, board, player, setPlayer, setGameOver }) => {
    if (!action) {
        return;
    }

    if (action === Action.rotate) {
        attemptRotation({ board, player, setPlayer, setGameOver })
    }
}