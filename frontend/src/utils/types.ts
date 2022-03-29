export type User = {
  id: string;
  signUpDate: string;
  lastLogInDate: string;
  userName: string;
  profilePicture: string;
  password: string;
  email: string;
  collection: Recipe[];
  userOptions: UserOptions;
  shoppingList: ShoppingList;
  suggestions: Recipe[];
};

export type UserOptions = Partial<GlobalOptions>;

export type ShoppingList = [
  {
    ingedientName: Partial<Ingredient>;
    accAmount: string;
    accCost: string;
  }
];

export type Recipe = {
  recipeName: string;
  id: string;
  picture: string;
  ingredients: Ingredient[];
  methods: Partial<GlobalOptions>;
  prepTime: string;
  cost: string;
  keywords: Partial<GlobalOptions>;
  preferences: Partial<GlobalOptions>;
  category: Partial<GlobalOptions>;
  steps: []; //to be further defined!!!
};

export type Ingredient = {
  name: string;
  amount: string;
  cost: number;
};

export type GlobalOptions = [
  {
    preferences: string[]; // to be converted to Union Type?
    categories: string[]; // to be converted to Union Type?
    allergies: string[]; // to be converted to Union Type?
    ingredients: Ingredient[];
    methods: string[]; // to be converted to Union Type?
    keywords: string[];
  }
];



// some fixed types for filter function:
export type CookingTime = 'quick' | 'regular' | 'long' | 'any';
export type CookingMethod = 'fry' | 'boil' | 'roast' | 'steam' | 'grill' | 'bake' | 'any';

export type RecipeFilter = {
  recipeName: string;
  id: string;
  ingredients: Ingredient[];
  methods: CookingMethod;
  prepTime: CookingTime;
  cost: string;
  keywords: Partial<GlobalOptions>;
  preferences: Partial<GlobalOptions>;
  category: Partial<GlobalOptions>;
};