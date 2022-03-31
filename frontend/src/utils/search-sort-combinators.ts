// third-party imports
import { filter as loFilter, gt, gte, lt, lte } from 'lodash';
import { inPlaceSort } from 'fast-sort';

// local imports
import { leftPartial } from './leftPartial';


export {
    gt,
    gte,
    lt,
    lte
}

export const sort = (sortBasis, direction) => {
    return (items) => {
        return inPlaceSort(items)[direction](sortBasis);
    }
}

export const and = (first: Boolean, second: Boolean): Boolean => {
    console.log('inside and func', first, second)
    return first && second;
}

export const or = (first: Boolean, second: Boolean): Boolean => {
    return first || second;
}

export const xor = (first: Boolean, second: Boolean): Boolean => {
    return (first && !second) || (!first && second)
}

export const includesFilter = (tags, key, obj) => {
    const ingredientTags = obj.ingredients;

    for(let tagIndex = 0; tagIndex < tags.length; tagIndex++){
    if( ingredientTags.includes(tags[tagIndex]) ){
        continue;
    }
    else{
        return false;
    }

    return true;
    }
};

export const excludesFilter = (tags, key, obj) => {
    const ingredientTags = obj.ingredients;

    for(let tagIndex = 0; tagIndex < tags.length; tagIndex++){

    if( !ingredientTags.includes(tags[tagIndex]) ){
        continue;
    }
    else{
        return false;
    }

    return true;
    }
};

export const textFilter = (text, key, obj) => {
    console.log('inside text filter', text, key, obj)
    if(!text){ return true; }
    return obj[key].includes(text);
}

export const mappedInequalityFilter = (inequality, map, key) => {
    const reference = map[key]
    const keepPairs = loFilter(Object.entries(map), ([,value]) => inequality(value, reference) )
    const keepArray = keepPairs.map( (pair) => pair[0] )
    const keepSet = new Set(keepArray)
    return (obj) => {
        return keepSet.has(obj[key])
    }
}

export const composeFilters = (binaryOperator, filters: Array<Function>) => {
    return  (obj) => {
        let keep = true;
        for (const filter of filters){
            //@ts-ignore
            keep = binaryOperator(keep, filter(obj));
            if (!keep) { return false; }
        }
        return true;
    }
}