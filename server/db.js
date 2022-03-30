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
  fs.readFileSync("./data/users.json")
);

const recipesData = JSON.parse(
  fs.readFileSync("./data/recipes.json")
);


module.exports = () => ({
  user: getUsersData,
  recipes:recipesData ,
  ingredient: ingredients,
  foodGroupEnums: foodGroupEnums,
  foodGroupSubgroups: foodGroupSubgroups,
  foodNameEnums: foodNameEnums,
  foodSubgroupEnum: foodSubgroupEnum,
  restrictedDiets: restrictedDiets,
});
