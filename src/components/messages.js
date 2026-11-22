
import chalk from "chalk";

const validateMessage = (message) => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Message must be a non-empty string.");
  }
};

export const success = (message) => {
  validateMessage(message);
  console.log(chalk.green("✔ " + message));
};

export const error = (message) => {
  validateMessage(message);
  console.log(chalk.red("✖ " + message));
};

export const warning = (message) => {
  validateMessage(message);
  console.log(chalk.yellow("⚠ " + message));
};

export const info = (message) => {
  validateMessage(message);
  console.log(chalk.blue("ℹ " + message));
};
