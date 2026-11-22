import chalk from "chalk";

export const table = (headers, rows) => {
  const data = [headers, ...rows];

  const widths = headers.map((header, index) =>
    Math.max(...data.map(row => String(row[index] ?? "").length))
  );

  const separator = `┼${widths.map(width => "─".repeat(width + 2)).join("┼")}┼`;

  const printRow = (row) =>
    `│${row.map((cell, index) =>
      ` ${String(cell ?? "").padEnd(widths[index])} `
    ).join("│")}│`;

  console.log(chalk.cyan(separator.replaceAll("┼", "┬")));
  console.log(chalk.cyan(printRow(headers)));
  console.log(chalk.cyan(separator));

  rows.forEach(row => console.log(printRow(row)));

  console.log(chalk.cyan(separator.replaceAll("┼", "┴")));
};