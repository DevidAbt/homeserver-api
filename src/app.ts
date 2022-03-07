import express from "express";
import config from "./config";
import router from "./router";
import logger from "./utils/logger";

const app = express();

app.use(express.json());

app.use(router);

app.listen(config.port, () =>
  logger.info(`App is listening on http://localhost:${config.port}`)
);
