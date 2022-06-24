import { drawLine } from "../utils/utils.js";

export const drawSquare = async ([size]: number[]): Promise<void> => {
  await drawLine({ endX: size });
  await drawLine({ endY: size });
  await drawLine({ endX: -size });
  await drawLine({ endY: -size });
};
