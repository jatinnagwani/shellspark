import chalk from "chalk";

export const table = (headers, rows) => {
  if (!Array.isArray(headers) || headers.length === 0) {
    throw new Error("Headers must be a non-empty array.");
  }

  if (!Array.isArray(rows)) {
    throw new Error("Rows must be an array.");
  }

  if (headers.some(header => header === null || header === undefined)) {
    throw new Error("Headers cannot contain empty values.");
  }

  if (rows.some(row => !Array.isArray(row) || row.length !== headers.length)) {
    throw new Error("Every row must match the number of headers.");
  }

  const data = [headers, ...rows];

  const widths = headers.map((_, index) =>
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

  rows.forEach(row => console.log(chalk.cyan(printRow(row))));

  console.log(chalk.cyan(separator.replaceAll("┼", "┴")));
};