import { drawLine } from "../utils/utils.js";

export const drawRectangle = async (sizes: number[]): Promise<void> => {
  const [length, height] = sizes;

  await drawLine({ endX: length });
  await drawLine({ endY: height });
  await drawLine({ endX: -length });
  await drawLine({ endY: -height });
};
