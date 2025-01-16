import React from 'react';
import { Recipe, Ingredient } from '../types';
import { ChefHat, X, CheckCircle, XCircle } from 'lucide-react';
import { getIngredientTranslations } from '../data';

interface Props {
  recipe: Recipe;
  ingredients: Ingredient[];
  onClose: () => void;
  translations: {
    inStock: string;
    outOfStock: string;
  };
  language: string;
}

export function RecipeDetail({ recipe, ingredients, onClose, translations, language }: Props) {
  const ingredientTranslations = getIngredientTranslations(language as any);
  
  const canBeMade = recipe.ingredients.every(recipeIng => {
    const ing = ingredients.find(i => i.id === recipeIng.ingredientId);
    return ing?.inStock;
  });

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="relative">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <span
            className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
              canBeMade
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {canBeMade ? (
              <>
                <CheckCircle className="w-5 h-5" />
                {translations.inStock}
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5" />
                {translations.outOfStock}
              </>
            )}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <ChefHat className="w-6 h-6" />
              Ingredients
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {recipe.ingredients.map(ing => {
                const ingredient = ingredients.find(i => i.id === ing.ingredientId);
                return ingredient ? (
                  <li
                    key={ing.ingredientId}
                    className={`flex items-center gap-2 ${
                      ingredient.inStock ? 'text-gray-700' : 'text-red-500'
                    }`}
                  >
                    {ingredient.inStock ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span>
                      {ingredientTranslations[ingredient.name]} ({ing.amount} {ingredientTranslations.units[ing.unit]})
                    </span>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-bold text-gray-400">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}