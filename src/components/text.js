import chalk from "chalk";
import gradientString from "gradient-string";

export const divider = (character = "─", length = 40) => {
  if (
    typeof character !== "string" ||
    character.length === 0 ||
    !Number.isInteger(length) ||
    length < 1
  ) {
    throw new Error("Invalid divider character or length.");
  }

  console.log(chalk.gray(character.repeat(length)));
};

export const rainbow = (message) => {
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Message must be a non-empty string.");
  }

  const colors = [
    chalk.red,
    chalk.yellow,
    chalk.green,
    chalk.cyan,
    chalk.blue,
    chalk.magenta
  ];

  const result = [...message]
    .map((char, index) => colors[index % colors.length](char))
    .join("");

  console.log(result);
};

export const diceRoll = (sides = 6) => {
  if (!Number.isInteger(sides) || sides < 2) {
    throw new Error("Dice must have at least 2 sides.");
  }

  const result = Math.floor(Math.random() * sides) + 1;

  console.log(chalk.yellow(`🎲 You rolled: ${result}`));

  return result;
};

export const party = (message = "LET'S GOOO!") => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Party message must be a non-empty string.");
  }

  const celebration = ["🎉", "✨", "🎊", "🚀"];

  const result =
    `${celebration.join(" ")} ${chalk.magenta.bold(message)} ${celebration.join(" ")}`;

  console.log(result);

  return result;
};

export const progressBar = (progress, total = 100, width = 30) => {
  if (
    !Number.isFinite(progress) ||
    !Number.isFinite(total) ||
    total <= 0 ||
    progress < 0 ||
    progress > total ||
    !Number.isInteger(width) ||
    width < 1
  ) {
    throw new Error("Invalid progress, total, or width.");
  }

  const percentage = Math.round((progress / total) * 100);
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;

  const bar =
    chalk.green("█".repeat(filled)) +
    chalk.gray("░".repeat(empty));

  console.log(`[${bar}] ${percentage}%`);

  return percentage;
};

export const spinner = (message = "Loading...") => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Spinner message must be a non-empty string.");
  }

  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let index = 0;
  let stopped = false;

  const interval = setInterval(() => {
    process.stdout.write(
      `\r\x1b[2K${chalk.cyan(frames[index % frames.length])} ${message}`
    );
    index++;
  }, 100);

  return {
    stop(finalMessage = "Done!") {
      if (stopped) return;

      if (typeof finalMessage !== "string") {
        throw new Error("Final message must be a string.");
      }

      stopped = true;
      clearInterval(interval);

      process.stdout.write(
        `\r\x1b[2K${chalk.green("✔")} ${finalMessage}\n`
      );
    }
  };
};

export const typing = (message, speed = 50) => {
  return new Promise((resolve, reject) => {
    if (
      typeof message !== "string" ||
      !Number.isFinite(speed) ||
      speed < 0
    ) {
      reject(new Error("Invalid message or typing speed."));
      return;
    }

    const characters = [...message];

    if (characters.length === 0) {
      process.stdout.write("\n");
      resolve();
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      process.stdout.write(characters[index]);
      index++;

      if (index >= characters.length) {
        clearInterval(interval);
        process.stdout.write("\n");
        resolve();
      }
    }, speed);
  });
};

export const gradient = (
  message,
  startColor = "#ff0000",
  endColor = "#0000ff"
) => {
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Message must be a non-empty string.");
  }

  if (
    typeof startColor !== "string" ||
    typeof endColor !== "string" ||
    !startColor.trim() ||
    !endColor.trim()
  ) {
    throw new Error("Gradient colors must be non-empty strings.");
  }

  console.log(gradientString(startColor, endColor)(message));
};

export const highlight = (message, color = "yellow") => {
  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Message must be a non-empty string.");
  }

  const colors = {
    yellow: chalk.yellow,
    green: chalk.green,
    red: chalk.red,
    blue: chalk.blue,
    cyan: chalk.cyan,
    magenta: chalk.magenta
  };

  const selectedColor = colors[color];

  if (!selectedColor) {
    throw new Error("Unsupported highlight color.");
  }

  console.log(selectedColor.bold(` ${message} `));
};

export const center = (message, width = process.stdout.columns || 80) => {
  if (
    typeof message !== "string" ||
    message.trim().length === 0 ||
    !Number.isInteger(width) ||
    width < 1
  ) {
    throw new Error("Invalid message or width.");
  }

  const lines = message.split("\n");

  lines.forEach(line => {
    const padding = Math.max(0, Math.floor((width - line.length) / 2));
    console.log(" ".repeat(padding) + line);
  });
};

export const countdown = (seconds = 5) => {
  if (!Number.isInteger(seconds) || seconds < 0) {
    throw new Error("Countdown must be a non-negative integer.");
  }

  return new Promise((resolve) => {
    if (seconds === 0) {
      console.log(chalk.green("GO!"));
      resolve();
      return;
    }

    let remaining = seconds;

    console.log(chalk.yellow(remaining));

    const interval = setInterval(() => {
      remaining--;

      if (remaining === 0) {
        clearInterval(interval);
        console.log(chalk.green("GO!"));
        resolve();
      } else {
        console.log(chalk.yellow(remaining));
      }
    }, 1000);
  });
};


export const pulse = (message, duration = 3000) => {
  if (
    typeof message !== "string" ||
    !Number.isFinite(duration) ||
    duration <= 0
  ) {
    throw new Error("Invalid message or duration.");
  }

  const frames = [
    chalk.dim(message),
    chalk.bold(message),
    chalk.cyan.bold(message),
    chalk.dim(message)
  ];

  let index = 0;
  let stopped = false;

  const interval = setInterval(() => {
    process.stdout.write(`\r\x1b[2K${frames[index % frames.length]}`);
    index++;
  }, 300);

  const timeout = setTimeout(() => {
    stop();
  }, duration);

  const stop = () => {
    if (stopped) return;

    stopped = true;
    clearInterval(interval);
    clearTimeout(timeout);
    process.stdout.write(`\r\x1b[2K${message}\n`);
  };

  return { stop };
};


export const glitch = (message) => {
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Message must be a non-empty string.");
  }

  const glitchChars = "!@#$%&*01▓▒░";

  const glitched = [...message]
    .map((char) =>
      Math.random() < 0.2
        ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
        : char
    )
    .join("");

  console.log(chalk.red.bold(glitched));

  return glitched;
};

export const coinFlip = () => {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  console.log(chalk.yellow(`🪙 You got: ${result}`));

  return result;
};

export const randomQuote = () => {
  const quotes = [
    "Great things take time. Keep building.",
    "Code. Break. Fix. Repeat.",
    "Dream big. Start small. Ship fast.",
    "Your only limit is your imagination.",
    "Consistency beats perfection.",
    "Turn ideas into reality.",
    "Keep learning. Keep growing."
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(chalk.magenta.italic(`"${quote}"`));

  return quote;
};

export const timestamp = (date = new Date(), locale = undefined) => {
  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    throw new Error("Invalid date.");
  }

  if (locale !== undefined && typeof locale !== "string") {
    throw new Error("Locale must be a string.");
  }

  let formatted;

  try {
    formatted = value.toLocaleString(locale);
  } catch {
    throw new Error("Invalid locale.");
  }

  console.log(chalk.gray(`🕒 ${formatted}`));

  return formatted;
};

export const json = (data, spacing = 2) => {
  if (!Number.isInteger(spacing) || spacing < 0) {
    throw new Error("Spacing must be a non-negative integer.");
  }

  try {
    const formatted = JSON.stringify(data, null, spacing);

    if (formatted === undefined) {
      throw new Error("Value cannot be converted to JSON.");
    }

    console.log(chalk.cyan(formatted));

    return formatted;
  } catch (error) {
    throw new Error(`JSON formatting failed: ${error.message}`);
  }
};