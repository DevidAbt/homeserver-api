import { createLogger, format, transports } from "winston";

const { printf, combine, timestamp, colorize, errors, prettyPrint } = format;
const logFormat = printf((log) => {
  let msg = `${log.timestamp} ${log.level}: ${log.message}`;
  if (log.meta) {
    try {
      msg += ` - ${JSON.stringify(log.meta)}`;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
  if (log.stack) {
    msg += log.stack;
  }
  return msg;
});

const logger = createLogger({
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    prettyPrint()
  ),
  transports: [
    new transports.Console({
      level: "verbose",
      format: combine(colorize(), logFormat),
    }),
  ],
});

export default logger;
