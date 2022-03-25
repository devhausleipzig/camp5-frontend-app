export type User = {
  id: string;
  sign_up_date: string;
  last_log_in_date: string;
  user_name: string;
  profile_picture: string;
  password: string;
  email: string;
  collection: Recepie[];
  user_options: UserOptions;
  shopping_list: ShoppingList;
  suggestions: Recepie[];
};

export type UserOptions = Partial<GlobalOptions>;

export type ShoppingList = [
  {
    name: Partial<Ingredient>;
    accAmount: string;
    accCost: string;
  }
];

export type Recepie = {
  id: string;
  picture: string;
  ingredients: Ingredient[];
  method: Partial<GlobalOptions>;
  time: string;
  cost: string;
  name: string;
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
    preferences: string[];
    categories: string[];
    allergies: string[];
    ingredients: Ingredient[];
    methods: string[];
    keywords: string[];
  }
];
