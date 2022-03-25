export type User = {
  id: string;
  sign_up_date: string;
  last_log_in_date: string;
  user_name: string;
  profile_picture: string;
  password: string;
  email: string;
  collection: Recipe[];
  user_options: UserOptions;
  shopping_list: ShoppingList;
  suggestions: Recipe[];
};

export type UserOptions = Partial<GlobalOptions>;

export type ShoppingList = [
  {
    ingedient_name: Partial<Ingredient>;
    accAmount: string;
    accCost: string;
  }
];

export type Recipe = {
  ingredient_name: string;
  id: string;
  picture: string;
  ingredients: Ingredient[];
  methods: Partial<GlobalOptions>;
  prep_time: string;
  cost: string;
  keywords: Partial<GlobalOptions>;
  preferences: Partial<GlobalOptions>;
  category: Partial<GlobalOptions>;
  steps: []; //to be further defined!!!
};

export type Ingredient = {
  name: string;
  amount: number;
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
