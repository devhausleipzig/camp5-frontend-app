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

const getUsersData = JSON.parse(
  fs.readFileSync("./data/usersdata.json")
);

// rewrite whole Users data (which not optimal)
// TODO: get 'user_id' to update one user and modifiy it
/*
const SaveUsersData = JSON.stringify(
  fs.writeFileSync("./data/usersdata.json")
);
*/
module.exports = () => ({
  user: getUsersData,
  recipes: [
    {
      id: "1",
      recipeName: "potato",
      picture: "url...",
      ingredients: [
        {
          name: "potato",
          amount: 5000,
          cost: 1000000,
        },
      ],
      methods: "fry",
      prep_time: "5min",
      cost: "1000000$",
      keywords: ["potato", "fat", "ketchup"],
      preferences: [],
      category: "",
      steps: [],
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
      methods: "bake",
      prep_time: "5min",
      cost: "1000000$",
      keywords: ["potato", "fat", "ketchup"],
      preferences: [],
      category: "",
      steps: [],
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
      methods: "boil",
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
