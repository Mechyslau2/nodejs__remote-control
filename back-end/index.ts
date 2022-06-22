import Jimp from "jimp";
import { httpServer } from "./src/http_server/index.js";

import { WebSocketServer, createWebSocketStream } from "ws";
import robot from "robotjs";

import { controller } from "./src/controller/controller.js";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws) => {
  const stream = createWebSocketStream(ws);
  stream.on("data", async (data) => {
    let response = Buffer.from(data).toString();
    const [command, ...size] = response.split(" ");
    const result = await controller(command, Number(size));

    result ? ws.send(`${response} ${result}\0`) : ws.send(`${response}\0`);
  });
});
