
interface Cords {
    x: number;
    y: number;
}

type controllerCallback = (moveTo: number, cords: Cords) => void;
export interface Commands {
    'mouse_up' : controllerCallback;
    'mouse_down': controllerCallback;
    'mouse_left': controllerCallback;
    'mouse_right': controllerCallback;
    'mouse_position': () => string;
}

export type controllerResult = void | string;
