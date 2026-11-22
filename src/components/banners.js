import chalk from "chalk";

export const banner = (message) => {
  const border = "═".repeat(message.length + 4);

  console.log(chalk.cyan(border));
  console.log(chalk.cyan(`║ ${message} ║`));
  console.log(chalk.cyan(border));
};

export const box = (message) => {
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