import React from 'react';
import { Ingredient } from '../types';
import * as Icons from 'lucide-react';
import { getIngredientTranslations } from '../data';

interface Props {
  ingredient: Ingredient;
  onToggleStock: (id: string) => void;
  translations: {
    inStock: string;
    outOfStock: string;
  };
  language: string;
}

export function IngredientCard({ ingredient, onToggleStock, translations, language }: Props) {
  const IconComponent = (Icons as any)[ingredient.icon] || Icons.Package;
  const ingredientTranslations = getIngredientTranslations(language as any);

  return (
    <div className={`p-4 rounded-lg shadow-md ${ingredient.inStock ? 'bg-green-50' : 'bg-red-50'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconComponent className="w-5 h-5" />
          <h3 className="font-semibold">{ingredientTranslations[ingredient.name]}</h3>
        </div>
        <button
          onClick={() => onToggleStock(ingredient.id)}
          className={`px-3 py-1 rounded-full text-sm ${
            ingredient.inStock
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {ingredient.inStock ? translations.inStock : translations.outOfStock}
        </button>
      </div>
      <div className="mt-2 text-gray-600">
        {ingredient.quantity} {ingredientTranslations.units[ingredient.unit]}
      </div>
    </div>
  );
}