import pkg from "winston";
const { format, createLogger, transports } = pkg;

const options = {
  file: {
    level: "info",
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: true,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    format: format.combine(format.colorize(), format.simple()),
  },
};

export const logger = createLogger({
  exitOnError: false,
  handleExceptions: true,
  transports: [
    Object.assign(
      new transports.File({
        ...options.file,
        filename: "logs/error.log",
        level: "error",
      }),
      { handleRejections: true }
    ),
    new transports.File({
      ...options.file,
      filename: "logs/app.log",
    }),
  ],
});

/* istanbul ignore next */
if (process.env.NODE_ENV !== "production") {
  logger.add(
    Object.assign(new transports.Console(options.console), {
      handleRejections: true,
    })
  );
}
