import robot from "robotjs";
import { drawRectangle, drawSquare, drawCircle } from "../commands/index.js";
import { Commands, controllerResult } from "./controller.types.js";

const COMMANDS = <Commands>{
  mouse_down: ([pos], { x, y }) => {
    robot.moveMouse(x, y + pos);
  },
  mouse_up: ([pos], { x, y }) => {
    robot.moveMouse(x, y - pos);
  },
  mouse_left: ([pos], { x, y }) => {
    robot.moveMouse(x - pos, y);
  },
  mouse_right: ([pos], { x, y }) => {
    robot.moveMouse(x + pos, y);
  },
  mouse_position: () => {
    let pos = robot.getMousePos();
    return Object.values(pos).join(",");
  },
  draw_square: (size) => drawSquare(size),
  draw_rectangle: (sizes) => drawRectangle(sizes),
  draw_circle: ([radius]) => drawCircle(radius),
};

const commandsArray = Object.keys(COMMANDS);

export const controller = (command: string, pos: number[]): controllerResult => {
  if (commandsArray.includes(command)) {
    const currentPos = robot.getMousePos();
    return COMMANDS[command](pos, currentPos);
  }
};
