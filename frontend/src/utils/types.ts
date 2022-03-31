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
  ingredients: { name: string; amount: number; cost: number }[];
  methods: string[];
  prepTime: string;
  cost: string;
  keywords: string[];
  preferences: string[];
  category: string[];
  steps: string[]; //to be further defined!!!
};

export type Ingredient = {
  name: string;
  amount: string;
  cost: string;
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




export type FilterParams = {
  method?: string,
  preptime?: string,
  cost?: string
}

