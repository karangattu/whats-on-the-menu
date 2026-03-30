import { QUESTION_BANK, buildChoices, buildRound, getFoodBank } from "./game-data.js";

const ROUND_SIZE = 4;

const state = {
  round: [],
  currentIndex: 0,
  score: 0,
  answered: false,
};

const elements = {
  hero: document.querySelector(".hero"),
  screens: document.querySelectorAll("[data-screen]"),
  startButton: document.querySelector("#start-button"),
  questionProgress: document.querySelector("#question-progress"),
  scorePill: document.querySelector("#score-pill"),
  birdName: document.querySelector("#bird-name"),
  birdImage: document.querySelector("#bird-image"),
  choiceGrid: document.querySelector("#choice-grid"),
  feedbackPanel: document.querySelector("#feedback-panel"),
  feedbackResult: document.querySelector("#feedback-result"),
  feedbackExplanation: document.querySelector("#feedback-explanation"),
  nextButton: document.querySelector("#next-button"),
  resultsTitle: document.querySelector("#results-title"),
  resultsMessage: document.querySelector("#results-message"),
  replayButton: document.querySelector("#replay-button"),
};

function showScreen(screenName) {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("screen--active", screen.dataset.screen === screenName);
  });
  elements.hero.hidden = screenName !== "start";
}

function getCurrentQuestion() {
  return state.round[state.currentIndex];
}

function updateScoreDisplay() {
  elements.scorePill.textContent = `Score ${state.score}`;
}

function createChoiceButton(choice) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-button";
  button.dataset.choiceId = choice.id;
  button.dataset.isCorrect = String(choice.isCorrect);
  button.setAttribute("role", "listitem");
  button.innerHTML = `
    <span class="choice-button__image-wrap">
      <img src="${choice.image}" alt="${choice.label}" />
    </span>
    <span>
      <span class="choice-button__label">${choice.label}</span>
      <span class="choice-button__meta">Tap to choose this food</span>
    </span>
  `;

  button.addEventListener("click", () => handleChoice(button, choice));

  return button;
}

function renderQuestion() {
  const question = getCurrentQuestion();
  const choices = buildChoices(question);

  state.answered = false;
  elements.questionProgress.textContent = `Bird ${state.currentIndex + 1} of ${ROUND_SIZE}`;
  updateScoreDisplay();

  elements.birdName.textContent = question.birdName;
  elements.birdImage.src = question.birdImage;
  elements.birdImage.alt = question.birdName;

  elements.choiceGrid.replaceChildren(...choices.map(createChoiceButton));
  elements.feedbackPanel.hidden = true;
  elements.feedbackPanel.classList.remove("is-success", "is-failure");
  elements.feedbackResult.textContent = "";
  elements.feedbackExplanation.textContent = "";
  elements.nextButton.textContent =
    state.currentIndex === ROUND_SIZE - 1 ? "See Score" : "Next Bird";
}

function lockChoices() {
  const buttons = elements.choiceGrid.querySelectorAll(".choice-button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function revealChoices(selectedButton) {
  const buttons = elements.choiceGrid.querySelectorAll(".choice-button");

  buttons.forEach((button) => {
    const isCorrect = button.dataset.isCorrect === "true";

    if (isCorrect) {
      button.classList.add("is-correct");
    } else if (button === selectedButton) {
      button.classList.add("is-wrong");
    } else {
      button.classList.add("is-muted");
    }
  });
}

function handleChoice(selectedButton, choice) {
  if (state.answered) {
    return;
  }

  state.answered = true;

  if (choice.isCorrect) {
    state.score += 1;
  }

  updateScoreDisplay();
  lockChoices();
  revealChoices(selectedButton);

  const question = getCurrentQuestion();
  const acceptedFoodIds = question.acceptedFoodIds ?? [question.correctFoodId];
  const foodBank = getFoodBank();
  const acceptedFoods = acceptedFoodIds.map((foodId) => foodBank[foodId].label);
  const acceptedSummary =
    acceptedFoods.length > 1
      ? `${acceptedFoods.slice(0, -1).join(", ")} or ${acceptedFoods.at(-1)}`
      : acceptedFoods[0];
  const resultText = choice.isCorrect
    ? `Correct. ${question.birdName} would go for ${choice.label}.`
    : `Not quite. ${question.birdName} would go for ${acceptedSummary}.`;

  elements.feedbackPanel.hidden = false;
  elements.feedbackPanel.classList.toggle("is-success", choice.isCorrect);
  elements.feedbackPanel.classList.toggle("is-failure", !choice.isCorrect);
  elements.feedbackResult.textContent = resultText;
  elements.feedbackExplanation.textContent = question.explanation;
  elements.feedbackPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  elements.nextButton.focus();
}

function renderResults() {
  const messages = [
    "You have a sharp eye for bird behavior.",
    "Nice work. A few more rounds and you'll be leading the flock.",
    "Good start. Watch the clues in each bird's shape and habitat.",
    "Every birder starts somewhere. Try another round and build the pattern memory.",
  ];

  const messageIndex = Math.max(0, ROUND_SIZE - state.score - 1);
  elements.resultsTitle.textContent = `You scored ${state.score} out of ${ROUND_SIZE}`;
  elements.resultsMessage.textContent = messages[messageIndex];
  showScreen("results");
}

function startRound() {
  state.round = buildRound(QUESTION_BANK, ROUND_SIZE);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  renderQuestion();
  showScreen("question");
}

function advanceRound() {
  if (!state.answered) {
    return;
  }

  if (state.currentIndex === ROUND_SIZE - 1) {
    renderResults();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.error("Service worker registration failed.", error);
  }
}

function init() {
  elements.startButton.addEventListener("click", startRound);
  elements.nextButton.addEventListener("click", advanceRound);
  elements.replayButton.addEventListener("click", startRound);

  registerServiceWorker();
}

init();
