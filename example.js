import {
  success,
  error,
  warning,
  info,
  divider,
  rainbow,
  banner,
  box,
  table,
  diceRoll,
  party,
  progressBar,
  spinner,
  typing,
  gradient
} from "./src/index.js";

success("Server started successfully!");
error("Database connection failed!");
warning("Memory usage is high!");
divider();
info("Shellspark is ready!");
rainbow("IGNITE YOUR TERMINAL!");
banner("WELCOME TO SHELLSPARK");
box("Welcome to Shellspark!\nMake your terminal awesome.");
table(
  ["Name", "Role", "Status"],
  [
    ["Jatin", "Developer", "Active"],
    ["Anvesha", "Designer", "Active"],
    ["Tushar", "Creator", "Active"]
  ]
);
diceRoll();
diceRoll(20);
party("SHELLSPARK IS LIVE!");
progressBar(65);
progressBar(100);
const loading = spinner("Connecting to database...");

setTimeout(() => {
  loading.stop("Database connected!");

  setTimeout(() => {
    typing("Welcome to Shellspark!");
  }, 300);
}, 2000);