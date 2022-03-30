const fs = require("fs");


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

const ingredients = JSON.parse(
  fs.readFileSync("./data/ingredients.json")
);

const getUsersData = JSON.parse(
  fs.readFileSync("./data/users.json")
);

const recipesData = JSON.parse(
  fs.readFileSync("./data/recipes.json")
);


////////////////
//// Export ////
////////////////

module.exports = () => ({
  user: getUsersData,
  recipes:recipesData ,
  ingredient: ingredients,
  enums: {
    foodGroups: foodGroupEnums,
    foodGroupSubgroups: foodGroupSubgroups,
    foodNames: foodNameEnums,
    foodSubgroups: foodSubgroupEnum,
    restrictedDiets: restrictedDiets
  }
});
