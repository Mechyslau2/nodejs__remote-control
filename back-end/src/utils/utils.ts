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

  if (x !== endX) {
    while (x !== endX) {
      x += x > endX ? -step : step;
     // robot.mouseClick();
      robot.moveMouse(x, y);
    }
  } else {
    while (y !== endY) {
      y += y > endY ? -step : step;
     // robot.mouseClick();
      robot.moveMouse(x, y);
    }
  }
};
