import chalk from "chalk";

// Define log levels
enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  DEBUG = "debug",
  TRACE = "trace",
}

// Define styles for each log level
const styles = {
  [LogLevel.ERROR]: chalk.red.bold,
  [LogLevel.WARN]: chalk.yellow.bold,
  [LogLevel.INFO]: chalk.green.bold,
  [LogLevel.DEBUG]: chalk.cyan.bold,
  [LogLevel.TRACE]: chalk.gray.bold,
};

// Function to get the current timestamp
const getTimestamp = (): string => {
  return new Date().toISOString();
};

// Function to log messages with a specific level
const log = (level: LogLevel, message: string, ...args: any[]) => {
  const timestamp = getTimestamp();
  const styledMessage = styles[level](
    `[${timestamp}] [${level.toUpperCase()}] ${message}`
  );
  console[level](styledMessage, ...args);
};

// Logger object with different log levels
export const Logger = {
  error: (message: string, ...args: any[]) =>
    log(LogLevel.ERROR, message, ...args),
  warn: (message: string, ...args: any[]) =>
    log(LogLevel.WARN, message, ...args),
  info: (message: string, ...args: any[]) =>
    log(LogLevel.INFO, message, ...args),
  debug: (message: string, ...args: any[]) =>
    log(LogLevel.DEBUG, message, ...args),
  trace: (message: string, ...args: any[]) =>
    log(LogLevel.TRACE, message, ...args),
};
