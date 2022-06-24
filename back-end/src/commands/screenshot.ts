import robot from "robotjs";
import Jimp from "jimp";

export const getScreenshot = async (): Promise<void> => {
  const mousePos = robot.getMousePos();
  const WIDTH = 200;
  const HEIGHT = 200;
  const screenX = mousePos.x - 100;
  const screenY = mousePos.y - 100;

  const bufferData = robot.screen.capture(screenX, screenY, WIDTH, HEIGHT);

  return new Promise<any>((res, rej) => {
    const image = new Jimp(bufferData.width, bufferData.height);
    let pos = 0;
    image
      .scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        image.bitmap.data[idx + 2] = bufferData.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = bufferData.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = bufferData.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = bufferData.image.readUInt8(pos++);
      })
      .getBase64(Jimp.MIME_PNG, (err, base64String) => {
        if (err) rej(err);
        res(base64String.replace("data:image/png;base64,", ""));
      });
  });
};
