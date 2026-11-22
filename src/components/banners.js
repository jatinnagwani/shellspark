import chalk from "chalk";

export const banner = (message) => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Banner message must be a non-empty string.");
  }

  const lines = message.split("\n");
  const width = Math.max(...lines.map(line => line.length));
  const border = "═".repeat(width + 4);

  console.log(chalk.cyan(`╔${border}╗`));

  lines.forEach(line => {
    console.log(chalk.cyan(`║  ${line.padEnd(width)}  ║`));
  });

  console.log(chalk.cyan(`╚${border}╝`));
};

export const box = (message) => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Box message must be a non-empty string.");
  }

  const lines = message.split("\n");
  const width = Math.max(...lines.map(line => line.length));
  const border = "─".repeat(width + 4);

  console.log(chalk.magenta(`┌${border}┐`));

  lines.forEach(line => {
    console.log(chalk.magenta(`│  ${line.padEnd(width)}  │`));
  });

  console.log(chalk.magenta(`└${border}┘`));
};

export const frame = (message) => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Frame message must be a non-empty string.");
  }

  const lines = message.split("\n");
  const width = Math.max(...lines.map(line => line.length));
  const border = "═".repeat(width + 4);

  console.log(chalk.cyan(`╔${border}╗`));

  lines.forEach(line => {
    console.log(chalk.cyan(`║  ${line.padEnd(width)}  ║`));
  });

  console.log(chalk.cyan(`╚${border}╝`));
};

export const logo = () => {
  const art = `
  ███████╗██╗  ██╗███████╗██╗     ██╗     ███████╗██████╗  █████╗ ██████╗ ██╗  ██╗
  ██╔════╝██║  ██║██╔════╝██║     ██║     ██╔════╝██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝
  ███████╗███████║█████╗  ██║     ██║     █████╗  ██████╔╝███████║██████╔╝█████╔╝
  ╚════██║██╔══██║██╔══╝  ██║     ██║     ██╔══╝  ██╔══██╗██╔══██║██╔══██╗██╔═██╗
  ███████║██║  ██║███████╗███████╗███████╗███████╗██║  ██║██║  ██║██║  ██║██║  ██╗
  ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
  `;

  console.log(chalk.cyan.bold(art));
  console.log(chalk.magenta("                 Ignite your terminal."));
};