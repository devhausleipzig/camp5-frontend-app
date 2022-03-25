const fs = require('fs')

const ingredients = JSON.parse( fs.readFileSync('./data/ingredients.json'))

module.exports = () => ({
  "user": [],
  "recipe": [],
  "ingredient": ingredients
});

