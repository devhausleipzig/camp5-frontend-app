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
  "cuisines": includesFilter,
  "diets": includesFilter,
  "ingredients": includesAndExcludesFilter,
  "methods": includesFilter,
  "prepTime": mappedLessThanFilter,
  "cost": mappedLessThanFilter
}

export function recipeFilter(user, filterParams: RecipeFilterParams){
  console.log(filterParams)
  const filters = [];

  for (const [sharedKey, arg] of Object.entries(filterParams)){
    let newFilter;

    if(sharedKey == "ingredients"){
      newFilter = RecipeFilterMap[sharedKey]
      newFilter = leftPartial(newFilter, user.avoidIngredients, arg, sharedKey);
    } else {
      newFilter = RecipeFilterMap[sharedKey]
      newFilter = leftPartial(newFilter, arg, sharedKey);
    }

    filters.push( newFilter )
  }
  console.log('inside recipe filters', filters)
  return composeFilters(and, filters)
}