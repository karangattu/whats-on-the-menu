import test from "node:test";
import assert from "node:assert/strict";

import {
  QUESTION_BANK,
  buildChoices,
  buildRound,
  getRevealBirdImage,
} from "./game-data.js";

test("buildRound returns four unique birds from the question bank", () => {
  const round = buildRound(QUESTION_BANK, 4, () => 0.42);

  assert.equal(round.length, 4);
  assert.equal(new Set(round.map((question) => question.id)).size, 4);
  assert.ok(round.every((question) => QUESTION_BANK.includes(question)));
});

test("buildChoices includes one correct answer and three distractors", () => {
  const question = QUESTION_BANK[0];
  const choices = buildChoices(question, () => 0.17);

  assert.equal(choices.length, 4);
  assert.equal(choices.filter((choice) => choice.isCorrect).length, 1);
  assert.deepEqual(
    new Set(choices.map((choice) => choice.id)),
    new Set([question.correctFoodId, ...question.distractorFoodIds]),
  );
});

test("buildChoices supports multiple correct answers for a question", () => {
  const question = QUESTION_BANK.find((entry) => entry.id === "scrub-jay");
  const choices = buildChoices(question, () => 0.33);

  assert.equal(choices.length, 4);
  assert.deepEqual(
    new Set(choices.filter((choice) => choice.isCorrect).map((choice) => choice.id)),
    new Set(["acorn", "berries"]),
  );
});

test("getRevealBirdImage prefers the eating-meal artwork and falls back to the base bird art", () => {
  const acornWoodpecker = QUESTION_BANK.find((entry) => entry.id === "acorn-woodpecker");
  const tern = QUESTION_BANK.find((entry) => entry.id === "tern");

  assert.equal(
    getRevealBirdImage(acornWoodpecker),
    "./assets/acorn_woodpecker_eating_meal.png",
  );
  assert.equal(getRevealBirdImage(tern), tern.birdImage);
});
