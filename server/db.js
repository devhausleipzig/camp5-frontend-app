const fs = require("fs");

const ingredients = JSON.parse(fs.readFileSync("./data/ingredients.json"));
const foodGroupEnums = JSON.parse(
  fs.readFileSync("./enums/food-group-enum.json")
);
const foodGroupSubgroups = JSON.parse(
  fs.readFileSync("./enums/food-group-subgroups.json")
);
const foodNameEnums = JSON.parse(
  fs.readFileSync("./enums/food-name-enum.json")
);
const foodSubgroupEnum = JSON.parse(
  fs.readFileSync("./enums/food-subgroup-enum.json")
);
const restrictedDiets = JSON.parse(
  fs.readFileSync("./enums/restricted-diets.json")
);

module.exports = () => ({
  user: [],
  recipes: [
    {
      id: "1",
      recipeName: "pizza potato",
      picture: "/assets/pics/test.png",
      ingredients: [
        {
          name: "potato",
          amount: 5000,
          cost: 1000000,
        },
        {
          name: "MOREpotato",
          amount: 5000,
          cost: 1000000,
        },
        {
          name: "EVENMOREpotato",
          amount: 5000,
          cost: 1000000,
        },
      ],
      methods: ["fry"],
      prep_time: "5min",
      cost: "1000000$",
      keywords: ["potato", "fat", "ketchup"],
      preferences: [],
      category: [
        "vegan",
        "glutenfree",
        "transgender",
        "yoga",
        "lactosefree",
        "virgin",
        "kosher",
        "halal",
        "sugerfree",
        "but sweet",
        "esperanto",
        "are you veda?",
        "are you hungry?",
        "no, I'm finnish",
        "nordic walking",
        "bouldern",
      ],
      steps: ["step1", "step2", "step3"],
    },
    {
      id: "2",
      recipeName: "pizza",
      picture: "url...",
      ingredients: [
        {
          name: "potato",
          amount: 5000,
          cost: 1000000,
        },
      ],
      methods: ["fry"],
      prep_time: "5min",
      cost: "1000000$",
      keywords: ["potato", "fat", "ketchup"],
      preferences: [],
      category: [1, 2, 3, 4, 4, 4, 4, 4, , 4, 4, 4, 4, 4, 4, 4],
      steps: [1, 2, 3],
    },
    {
      id: "3",
      recipeName: "spaghetti",
      picture: "url...",
      ingredients: [
        {
          name: "potato",
          amount: 5000,
          cost: 1000000,
        },
      ],
      methods: ["fry"],
      prep_time: "5min",
      cost: "1000000$",
      keywords: ["potato", "fat", "ketchup"],
      preferences: [],
      category: "",
      steps: [],
    },
  ],
  ingredient: ingredients,
  foodGroupEnums: foodGroupEnums,
  foodGroupSubgroups: foodGroupSubgroups,
  foodNameEnums: foodNameEnums,
  foodSubgroupEnum: foodSubgroupEnum,
  restrictedDiets: restrictedDiets,
});
