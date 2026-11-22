
import test from "node:test";
import assert from "node:assert/strict";

import {
  success, error, warning, info,
  divider, rainbow, gradient, highlight,
  banner, box, center, frame, logo,
  spinner, progressBar, countdown, typing, pulse,
  glitch, coinFlip, diceRoll, randomQuote, party,
  table, timestamp, json
} from "../src/index.js";

const silenceLogs = async (callback) => {
  const originalLog = console.log;
  console.log = () => {};

  try {
    return await callback();
  } finally {
    console.log = originalLog;
  }
};

test("all 26 exported functions should be available", () => {
  const functions = [
    success, error, warning, info,
    divider, rainbow, gradient, highlight,
    banner, box, center, frame, logo,
    spinner, progressBar, countdown, typing, pulse,
    glitch, coinFlip, diceRoll, randomQuote, party,
    table, timestamp, json
  ];

  assert.equal(functions.length, 26);

  functions.forEach((fn) => {
    assert.equal(typeof fn, "function");
  });
});

test("message and styling functions should execute", async () => {
  await silenceLogs(() => {
    assert.doesNotThrow(() => success("Test"));
    assert.doesNotThrow(() => error("Test"));
    assert.doesNotThrow(() => warning("Test"));
    assert.doesNotThrow(() => info("Test"));
    assert.doesNotThrow(() => divider());
    assert.doesNotThrow(() => rainbow("Test"));
    assert.doesNotThrow(() => gradient("Test"));
    assert.doesNotThrow(() => highlight("Test"));
  });
});

test("core styling functions should reject invalid inputs", () => {
  // Message functions
  assert.throws(() => success(""));
  assert.throws(() => error(123));
  assert.throws(() => warning(""));
  assert.throws(() => info(null));

  // Divider
  assert.throws(() => divider("", 40));
  assert.throws(() => divider("─", 0));

  // Rainbow
  assert.throws(() => rainbow(""));
  assert.throws(() => rainbow(123));

  // Gradient
  assert.throws(() => gradient(""));
  assert.throws(() => gradient("Test", "", "#0000ff"));
  assert.throws(() => gradient("Test", "#ff0000", ""));

  // Highlight
  assert.throws(() => highlight(""));
  assert.throws(() => highlight("Test", "invalid"));
});

test("banner and layout functions should execute", async () => {
  await silenceLogs(() => {
    assert.doesNotThrow(() => banner("Test"));
    assert.doesNotThrow(() => box("Test"));
    assert.doesNotThrow(() => center("Test", 40));
    assert.doesNotThrow(() => frame("Test"));
    assert.doesNotThrow(() => logo());
  });
});

test("ASCII design functions should reject invalid inputs", () => {
  assert.throws(() => banner(""));
  assert.throws(() => banner(123));

  assert.throws(() => box(""));
  assert.throws(() => box(null));

  assert.throws(() => frame(""));
  assert.throws(() => frame(123));

  assert.throws(() => center(""));
  assert.throws(() => center("Test", 0));
});

test("diceRoll should return a number within range", async () => {
  await silenceLogs(() => {
    const result = diceRoll(20);

    assert.ok(Number.isInteger(result));
    assert.ok(result >= 1 && result <= 20);
  });
});

test("diceRoll should reject invalid sides", () => {
  assert.throws(() => diceRoll(1));
  assert.throws(() => diceRoll(0));
});

test("coinFlip should return Heads or Tails", async () => {
  await silenceLogs(() => {
    assert.ok(["Heads", "Tails"].includes(coinFlip()));
  });
});

test("progressBar should return the correct percentage", async () => {
  await silenceLogs(() => {
    assert.equal(progressBar(50), 50);
    assert.equal(progressBar(25, 50), 50);
    assert.equal(progressBar(100), 100);
    assert.equal(progressBar(0), 0);
  });
});

test("progressBar should reject invalid values", () => {
  assert.throws(() => progressBar(-1));
  assert.throws(() => progressBar(101));
  assert.throws(() => progressBar(50, 0));
  assert.throws(() => progressBar(50, 100, 0));
});

test("fun utility functions should execute", async () => {
  await silenceLogs(() => {
    assert.doesNotThrow(() => glitch("Test"));
    assert.doesNotThrow(() => randomQuote());
    assert.doesNotThrow(() => party("Test"));
  });
});

test("table should execute with valid data", async () => {
  await silenceLogs(() => {
    assert.doesNotThrow(() => table(
      ["Name", "Age"],
      [["Jatin", 19]]
    ));
  });
});

test("timestamp should return a formatted date", async () => {
  await silenceLogs(() => {
    const result = timestamp("2026-01-01");

    assert.equal(typeof result, "string");
    assert.ok(result.length > 0);
  });
});

test("timestamp should reject invalid dates", () => {
  assert.throws(() => timestamp("invalid-date"));
});

test("json should return formatted JSON", async () => {
  await silenceLogs(() => {
    const result = json({ name: "Shellspark" });

    assert.equal(
      result,
      JSON.stringify({ name: "Shellspark" }, null, 2)
    );
  });
});

test("json should reject invalid spacing", () => {
  assert.throws(() => json({}, -1));
});

test("typing should handle an empty message", async () => {
  await assert.doesNotReject(() => typing("", 1));
});

test("countdown should complete", async () => {
  await silenceLogs(async () => {
    await countdown(1);
  });
});

test("spinner and pulse should return stoppable animations", () => {
  const loading = spinner("Testing");
  assert.equal(typeof loading.stop, "function");
  loading.stop();

  const animation = pulse("Testing");
  assert.equal(typeof animation.stop, "function");
  animation.stop();
});

test("animation functions should handle edge cases", async () => {
  // Spinner validation and repeated stop
  assert.throws(() => spinner(""));

  const loading = spinner("Testing");
  assert.doesNotThrow(() => loading.stop());
  assert.doesNotThrow(() => loading.stop());

  // Typing should support emojis
  await assert.doesNotReject(() => typing("🔥", 0));

  // Zero-second countdown should complete immediately
  await silenceLogs(async () => {
    await countdown(0);
  });
});