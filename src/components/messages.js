import chalk from "chalk";

export const success = (message) => {
  console.log(chalk.green("✔ " + message));
};

export const error = (message) => {
  console.log(chalk.red("✖ " + message));
};

export const warning = (message) => {
  console.log(chalk.yellow("⚠ " + message));
};

export const info = (message) => {
  console.log(chalk.blue("ℹ " + message));
};