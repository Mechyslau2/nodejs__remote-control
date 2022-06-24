import robot from "robotjs";

interface Pos {
  endX?: number;
  endY?: number;
}

export const drawLine = async (positions: Pos, step = 1): Promise<void> => {
  let { x, y } = robot.getMousePos();
  let { endX, endY } = positions;

  endY = endY ? y + endY : y;
  endX = endX ? x + endX : x;

  robot.mouseToggle("down");

  if (x !== endX) {
    while (x !== endX) {
      x += x > endX ? -step : step;
      robot.moveMouse(x, y);
    }
  } else {
    while (y !== endY) {
      y += y > endY ? -step : step;
      robot.moveMouse(x, y);
    }
  }

  robot.mouseToggle("up");
};
