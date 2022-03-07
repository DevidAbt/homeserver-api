import { Request, Response } from "express";
import config from "./config";
import service from "./service";
import logger from "./utils/logger";

const status = async (req: Request, res: Response) => {
  try {
    res.status(200).json(config.status);
  } catch (error) {
    logger.error(error);
    res.status(400).json({ error: "Bad request" });
  }
};

const temp = async (req: Request, res: Response) => {
  try {
    const result = service.temp();

    res.status(200).json(result);
  } catch (error) {
    logger.error(error);
    res.status(400).json({ error: "Bad request" });
  }
};

export default {
  status,
  temp,
};
