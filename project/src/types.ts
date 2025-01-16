export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  inStock: boolean;
  icon: string;
}

export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: {
    ingredientId: string;
    amount: number;
    unit: string;
  }[];
  instructions: string[];
}

export interface SettingsAction {
  id: string;
  name: string;
  icon: string;
  action: () => void;
}

export type Language = 'en' | 'tr' | 'de' | 'hu' | 'hr' | 'es' | 'cs' | 'ru' | 'sv' | 'bs';

export interface Translation {
  appName: string;
  search: string;
  recipes: string;
  ingredients: string;
  selectRecipe: string;
  inStock: string;
  outOfStock: string;
  settings: {
    newRecipe: string;
    addRecipeImage: string;
    newIngredient: string;
    addIngredientIcon: string;
  };
}

export type Translations = {
  [key in Language]: Translation;
};