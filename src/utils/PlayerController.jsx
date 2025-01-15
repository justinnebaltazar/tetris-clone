import { Action } from "./Input";

export const playerController = ({ action, board, player, setPlayer, setGameOver }) => {
    if (!action) {
        return;
    }

    if (action === Action.rotate) {
        // attemptRotation({ board, player, setPlayer, setGameOver })
    }
}