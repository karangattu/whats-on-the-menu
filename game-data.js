const FOOD_BANK = {
  acorn: {
    id: "acorn",
    label: "Acorns",
    image: "./assets/acorn.png",
  },
  berries: {
    id: "berries",
    label: "Berries",
    image: "./assets/berries.png",
  },
  burger: {
    id: "burger",
    label: "Burger Scraps",
    image: "./assets/burger.png",
  },
  crab: {
    id: "crab",
    label: "Crabs",
    image: "./assets/crab.png",
  },
  earthworm: {
    id: "earthworm",
    label: "Earthworms",
    image: "./assets/earthworm.png",
  },
  fish: {
    id: "fish",
    label: "Fish",
    image: "./assets/fish.png",
  },
  grass: {
    id: "grass",
    label: "Grass",
    image: "./assets/grass.png",
  },
  mouse: {
    id: "mouse",
    label: "Mice",
    image: "./assets/mouse.png",
  },
  nectar: {
    id: "nectar",
    label: "Nectar",
    image: "./assets/nectar.png",
  },
  seedsThistle: {
    id: "seedsThistle",
    label: "Thistle Seeds",
    image: "./assets/seeds_thistle.png",
  },
  waterBoatmen: {
    id: "waterBoatmen",
    label: "Water Boatmen",
    image: "./assets/water_boatmen.png",
  },
  waterFlea: {
    id: "waterFlea",
    label: "Water Fleas",
    image: "./assets/water_flea.png",
  },
};

export const QUESTION_BANK = [
  {
    id: "acorn-woodpecker",
    birdName: "Acorn Woodpecker",
    birdImage: "./assets/acorn_woodpecker_bird.png",
    revealBirdImage: "./assets/acorn_woodpecker_eating_meal.png",
    correctFoodId: "acorn",
    correctFoodLabel: "Acorns",
    correctFoodImage: "./assets/acorn.png",
    explanation:
      "Acorn Woodpeckers store acorns in tree bark and return to them for food all year long.",
    distractorFoodIds: ["berries", "waterBoatmen", "mouse"],
  },
  {
    id: "american-avocet",
    birdName: "American Avocet",
    birdImage: "./assets/american_avocet_bird.png",
    revealBirdImage: "./assets/american_avocet_eating_meal.png",
    correctFoodId: "waterBoatmen",
    correctFoodLabel: "Water Boatmen",
    correctFoodImage: "./assets/water_boatmen.png",
    explanation:
      "American Avocets sweep their bills through shallow water to catch aquatic insects like water boatmen.",
    distractorFoodIds: ["grass", "acorn", "burger"],
  },
  {
    id: "american-goldfinch",
    birdName: "American Goldfinch",
    birdImage: "./assets/american_goldfinch_bird.png",
    revealBirdImage: "./assets/american_goldfinch_eating_meal.png",
    correctFoodId: "seedsThistle",
    correctFoodLabel: "Thistle Seeds",
    correctFoodImage: "./assets/seeds_thistle.png",
    explanation:
      "American Goldfinches specialize in seeds, especially from thistles and other weedy plants.",
    distractorFoodIds: ["fish", "mouse", "crab"],
  },
  {
    id: "annas-hummingbird",
    birdName: "Anna's Hummingbird",
    birdImage: "./assets/annas_hummingbird_bird.png",
    revealBirdImage: "./assets/annas_hummingbird_eating_meal.png",
    correctFoodId: "nectar",
    correctFoodLabel: "Nectar",
    correctFoodImage: "./assets/nectar.png",
    explanation:
      "Anna's Hummingbirds use long tongues to sip nectar from flowers for quick energy.",
    distractorFoodIds: ["earthworm", "acorn", "waterFlea"],
  },
  {
    id: "canada-goose",
    birdName: "Canada Goose",
    birdImage: "./assets/canada_goose_bird.png",
    revealBirdImage: "./assets/canada_goose_eating_meal.png",
    correctFoodId: "grass",
    correctFoodLabel: "Grass",
    correctFoodImage: "./assets/grass.png",
    explanation:
      "Canada Geese graze on grasses and other plant material in fields, lawns, and wetlands.",
    distractorFoodIds: ["fish", "crab", "burger"],
  },
  {
    id: "common-raven",
    birdName: "Common Raven",
    birdImage: "./assets/common_raven_bird.png",
    revealBirdImage: "./assets/common_raven_eating_meal.png",
    correctFoodId: "burger",
    correctFoodLabel: "Burger Scraps",
    correctFoodImage: "./assets/burger.png",
    explanation:
      "Common Ravens are opportunistic scavengers and will eat human food scraps when they find them.",
    distractorFoodIds: ["nectar", "grass", "waterFlea"],
  },
  {
    id: "great-blue-heron",
    birdName: "Great Blue Heron",
    birdImage: "./assets/great_blue_heron_bird.png",
    revealBirdImage: "./assets/great_blue_heron_eating_meal.png",
    correctFoodId: "fish",
    correctFoodLabel: "Fish",
    correctFoodImage: "./assets/fish.png",
    explanation:
      "Great Blue Herons stand still in the shallows, then spear fish with a quick strike.",
    distractorFoodIds: ["berries", "acorn", "seedsThistle"],
  },
  {
    id: "long-billed-curlew",
    birdName: "Long-billed Curlew",
    birdImage: "./assets/long_billed_curlew_bird.png",
    revealBirdImage: "./assets/long_billed_curlew_eating_meal.png",
    correctFoodId: "crab",
    correctFoodLabel: "Crabs",
    correctFoodImage: "./assets/crab.png",
    explanation:
      "Long-billed Curlews probe mud and sand with their long bills to grab crabs and other shore prey.",
    distractorFoodIds: ["nectar", "acorn", "grass"],
  },
  {
    id: "northern-shoveler",
    birdName: "Northern Shoveler",
    birdImage: "./assets/northern_shoveler_bird.png",
    revealBirdImage: "./assets/northern_shoveler_eating_meal.png",
    correctFoodId: "waterFlea",
    correctFoodLabel: "Water Fleas",
    correctFoodImage: "./assets/water_flea.png",
    explanation:
      "Northern Shovelers filter tiny aquatic animals such as water fleas from the water with comb-like bills.",
    distractorFoodIds: ["mouse", "burger", "berries"],
  },
  {
    id: "red-tailed-hawk",
    birdName: "Red-tailed Hawk",
    birdImage: "./assets/red_tailed_hawk_bird.png",
    revealBirdImage: "./assets/red_tailed_hawk_eating_meal.png",
    correctFoodId: "mouse",
    correctFoodLabel: "Mice",
    correctFoodImage: "./assets/mouse.png",
    explanation:
      "Red-tailed Hawks hunt small mammals and often spot mice from high perches or while soaring.",
    distractorFoodIds: ["nectar", "grass", "waterBoatmen"],
  },
  {
    id: "scrub-jay",
    birdName: "Scrub Jay",
    birdImage: "./assets/scrub_jay_bird.png",
    revealBirdImage: "./assets/scrub_jay_eating_meal.png",
    correctFoodId: "acorn",
    correctFoodLabel: "Acorns",
    correctFoodImage: "./assets/acorn.png",
    acceptedFoodIds: ["acorn", "berries"],
    explanation:
      "Scrub Jays eat a wide range of foods, and both acorns and berries are common parts of their diet.",
    distractorFoodIds: ["fish", "waterFlea"],
  },
  {
    id: "tern",
    birdName: "Tern",
    birdImage: "./assets/tern_bird.png",
    revealBirdImage: "./assets/tern_eating_meal.png",
    correctFoodId: "fish",
    correctFoodLabel: "Fish",
    correctFoodImage: "./assets/fish.png",
    explanation:
      "Terns dive into the water to catch small fish near the surface.",
    distractorFoodIds: ["acorn", "grass", "burger"],
  },
];

export function shuffle(items, random = Math.random) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

export function buildRound(questionBank = QUESTION_BANK, roundSize = 4, random = Math.random) {
  return shuffle(questionBank, random).slice(0, roundSize);
}

export function buildChoices(question, random = Math.random) {
  const acceptedFoodIds = question.acceptedFoodIds ?? [question.correctFoodId];
  const choiceIds = [...acceptedFoodIds, ...question.distractorFoodIds];

  return shuffle(choiceIds, random).map((foodId) => {
    const food = FOOD_BANK[foodId];

    return {
      id: food.id,
      label: food.label,
      image: food.image,
      isCorrect: acceptedFoodIds.includes(food.id),
    };
  });
}

export function getRevealBirdImage(question) {
  return question.revealBirdImage ?? question.birdImage;
}

export function getRevealViewerTitle(question) {
  return `${question.birdName} up close`;
}

export function getFoodBank() {
  return FOOD_BANK;
}
