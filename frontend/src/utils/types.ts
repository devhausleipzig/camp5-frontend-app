export type Unit = "kilogram" | "gram" | "liter" | "milliliter";

export type Method =
  | "chop"
  | "dice"
  | "grate"
  | "grind"
  | "press"
  | "blend"
  | "braise"
  | "boil"
  | "fry"
  | "bake"
  | "baste"
  | "tenderize"
  | "grill";

export type PrepTimeRating =
  | "very fast"
  | "quick"
  | "medium"
  | "long"
  | "very long";

export type CostRating =
  | "very cheap"
  | "cheap"
  | "medium"
  | "expensive"
  | "very expensive";

export type Cuisine = "German" | "Italian" | "American" | "Chinese" | "Indian";

export type Ingredient = {
  id: string;
  name: string;
  nameScientific: string;
  foodGroup: string;
  foodSubgroup: string;
};

export type Item = {
  ingredient: Ingredient;
  amount: number;
  unit: Unit;
  note: string;
};

export type ShoppingList = {
  id: string;
  items: Array<Item>;
};

export type RecipeStep = {
  position: number;
  method: Method;
  items: Array<Item>;
  substeps: Array<RecipeStep>;
  note: string;
};

export type Recipe = {
  id: string;
  name: string;
  picture?: string;
  prepTime?: PrepTimeRating;
  cost?: CostRating;
  steps?: Array<RecipeStep>;
  cuisines?: Array<Cuisine>;
  keywords?: Array<string>;
  // below must be aggregated over all steps
  ingredients?: Array<Ingredient>;
  methods?: Array<Method>;
  diets: string[];
};

// make this type more generic in the future
export type RecipeFilterParams = {
  name?: string;
  methods?: Array<Method>;
  prepTime?: PrepTimeRating;
  cost?: CostRating;
  ingredients?: Array<Ingredient["id"]>;
};

export type User = {
  id: string;
  signUpDate: string;
  lastLogInDate: string;
  userName: string;
  profilePicture: string;
  password: string;
  email: string;
  userOptions: {
    avoidIngredients: string[];
  };
  collection: Array<Recipe["id"]>;
  shoppingList: Array<ShoppingList["id"]>;
};
