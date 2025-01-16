import React from 'react';
import { Recipe, Ingredient } from '../types';
import { ChefHat } from 'lucide-react';
import { getIngredientTranslations } from '../data';

interface Props {
  recipe: Recipe;
  ingredients: Ingredient[];
  compact?: boolean;
  translations: {
    inStock: string;
    outOfStock: string;
  };
  language: string;
}

export function RecipeCard({ recipe, ingredients, compact = false, translations, language }: Props) {
  const ingredientTranslations = getIngredientTranslations(language as any);
  
  const canBeMade = recipe.ingredients.every(recipeIng => {
    const ing = ingredients.find(i => i.id === recipeIng.ingredientId);
    return ing?.inStock;
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              canBeMade
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {canBeMade ? translations.inStock : translations.outOfStock}
          </span>
        </div>
        {!compact && (
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              Ingredients:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map(ing => {
                const ingredient = ingredients.find(i => i.id === ing.ingredientId);
                return ingredient ? (
                  <li
                    key={ing.ingredientId}
                    className={ingredient.inStock ? 'text-gray-700' : 'text-red-500'}
                  >
                    {ingredientTranslations[ingredient.name]} ({ing.amount} {ingredientTranslations.units[ing.unit]})
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}