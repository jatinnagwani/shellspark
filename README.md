# Shellspark ⚡

**Ignite your terminal.**

Shellspark is a lightweight JavaScript library designed to make terminal output more colourful, expressive, and interactive. It provides simple utilities for styling messages, creating ASCII designs, displaying animations, and improving the overall command-line experience.

## Installation

```bash
npm install shellspark
```

## Quick Start

```javascript
import {
  success,
  error,
  warning,
  info,
  banner,
  rainbow,
  box,
  spinner,
  progressBar
} from "shellspark";

success("Server started successfully!");
error("Database connection failed!");
warning("Memory usage is high!");
info("Shellspark is ready!");

banner("Welcome to Shellspark");
box("Ignite your terminal!");
rainbow("Make your terminal colourful!");

const loading = spinner("Loading...");
loading.stop("Ready!");

progressBar(75);
```

## Features

### Core Styling
- `success()` – Success messages
- `error()` – Error messages
- `warning()` – Warning messages
- `info()` – Information messages
- `divider()` – Terminal dividers
- `rainbow()` – Rainbow-coloured text
- `gradient()` – Gradient text
- `highlight()` – Highlighted text

### ASCII Design
- `banner()` – Decorative terminal banners
- `box()` – Text inside decorative boxes
- `center()` – Center-aligned text
- `frame()` – Text inside decorative frames
- `logo()` – Shellspark ASCII logo

### Animations
- `spinner()` – Animated loading spinner
- `progressBar()` – Progress bar
- `countdown()` – Countdown timer
- `typing()` – Typing animation
- `pulse()` – Pulsating text animation

### Fun Utilities
- `glitch()` – Random glitch text effect
- `coinFlip()` – Virtual coin flip
- `diceRoll()` – Virtual dice roll
- `randomQuote()` – Random motivational quote
- `party()` – Celebration messages

### Developer Utilities
- `table()` – Formatted terminal tables
- `timestamp()` – Date and time formatting with locale support
- `json()` – Formatted JSON output

## Requirements

- Node.js 18 or higher
- npm

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
