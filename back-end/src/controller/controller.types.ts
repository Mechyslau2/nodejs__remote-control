
interface Cords {
    x: number;
    y: number;
}

type controllerCallback = (moveTo: number[], cords: Cords) => void;
export interface Commands {
    'mouse_up' : controllerCallback;
    'mouse_down': controllerCallback;
    'mouse_left': controllerCallback;
    'mouse_right': controllerCallback;
    'mouse_position': () => string;
    'draw_square': (size: number[]) => Promise<void>;
    'draw_rectangle': (size: number[]) => Promise<void>;
    'draw_circle': (size: number[]) => Promise<void>;
}

export type controllerResult = void | string;
