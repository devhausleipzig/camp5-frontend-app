// third-party imports
const fs = require("fs");
const _ = require("lodash");

// local imports
const { renameKeys } = require("./utils/renameKeys");


///////////////
//// Enums ////
///////////////

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

//////////////
//// Data ////
//////////////

let ingredients = JSON.parse(
  fs.readFileSync("./data/ingredients.json")
);

ingredients = ingredients.map((ingredient) => {
  return renameKeys(ingredient, {
    name_scientific: "nameScientific",
    food_group: "foodGroup",
    food_subgroup: "foodSubgroup",
  });
});

const userData = JSON.parse(
  fs.readFileSync("./data/users.json")
);

const recipeData = JSON.parse(
  fs.readFileSync("./data/recipes.json")
);


////////////////
//// Export ////
////////////////

module.exports = () => ({
  user: userData,
  recipe: recipeData,
  ingredient: ingredients,
  enums: {
    foodGroups: foodGroupEnums,
    foodGroupSubgroups: foodGroupSubgroups,
    foodNames: foodNameEnums,
    foodSubgroups: foodSubgroupEnum,
    restrictedDiets: restrictedDiets,
  },
  allergens: [
    "celery",
    "gluten",
    "shellfish",
    "egg",
    "fish",
    "lupin",
    "milk",
    "mollusc",
    "mustard",
    "peanut",
    "sesame",
    "soy",
    "sulphur",
    "tree nuts",
  ]
});
