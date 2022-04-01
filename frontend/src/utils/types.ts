export type Unit = "kilogram" | "gram" | "liter" | "milliliter";

export type Method =
  | "chop"
  | "dice"
  | "grate"
  | "press"
  | "blend"
  | "braise"
  | "boil"
  | "fry"
  | "bake"
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

export type ShoppingItem = {
  item: Ingredient;
  amount: number;
  note: string;
  unit: Unit;
};

export type ShoppingList = {
  id: string;
  items: Array<ShoppingItem>;
};

export type RecipeStep = {
  position: number;
  method: Method;
  ingredients: Array<Ingredient>;
  substeps: Array<RecipeStep>;
};

export type Recipe = {
  id: string;
  name: string;
  picture?: string;
  prepTime?: PrepTimeRating;
  cost?: CostRating;
  steps?: Array<RecipeStep>;
  cuisineTags?: Array<Cuisine>;
  keywords?: Array<string>;
  // below must be aggregated over all steps
  ingredients?: Array<Ingredient>;
  methods?: Array<Method>;
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
