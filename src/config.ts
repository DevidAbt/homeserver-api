// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from "dotenv";
import childProcess from "child_process";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV === "development") {
  dotenv.config();
}
if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const commitHash = childProcess
  .execSync("git rev-parse HEAD")
  .toString()
  .trim();

export default {
  port: process.env.PORT,
  status: {
    commitHash,
    startTime: new Date().toLocaleString(),
  },
};
