import robot from "robotjs";

export const drawCircle = async (radius: number): Promise<void> => {
  const { x, y } = robot.getMousePos();
  let i = 0;

  robot.mouseToggle("down");

  while (i <= Math.PI * 2) {
    i += 0.01;
    const sx = Math.floor(x - radius + radius * Math.cos(i));
    const sy = Math.floor(y + radius * Math.sin(i));
    robot.moveMouse(sx, sy);
  }

  robot.mouseToggle("up");
};
