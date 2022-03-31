// third-party imports
import { filter } from "lodash";

// local imports
import { Recipe, RecipeFilterParams } from "./types";
import { leftPartial } from "./leftPartial";
import {
  and,
  lte,
  sort,
  mappedInequalityFilter,
  includesFilter,
  excludesFilter,
  composeFilters,
  textFilter,
} from './search-sort-combinators';


export {
  sort
}

function includesAndExcludesFilter(excludeTags, includeTags, key, obj) {
    return composeFilters(
      and,
      [
        leftPartial(includesFilter, includeTags, key),
        leftPartial(excludesFilter, excludeTags, key)
      ]
    )(obj)
}

function mappedLessThanFilter(map, key) {
  return mappedInequalityFilter(lte, map, key);
}

const RecipeFilterMap = {
  "name": textFilter,
  "keywords": includesFilter,
  "cuisine": includesFilter,
  "ingredients": includesAndExcludesFilter,
  "methods": includesFilter,
  "prepTime": mappedLessThanFilter,
  "cost": mappedLessThanFilter
}

export function recipeFilter(user, filterParams: RecipeFilterParams){
  const filters = [];

  for (const [key, value] of Object.entries(filterParams)){
    let newFilter;

    if(key == "ingredients"){
      newFilter = RecipeFilterMap[key]
      newFilter = leftPartial(newFilter, user.avoidIngredients, value, key);
    } else {
      newFilter = RecipeFilterMap[key]
      newFilter = leftPartial(newFilter, value, key);
    }

    filters.push( newFilter )
  }

  return composeFilters(and, filters)
}