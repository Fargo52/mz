import React, { useState } from 'react';
import { ingredients as initialIngredients, recipes } from './data';
import { IngredientCard } from './components/IngredientCard';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { SettingsMenu } from './components/SettingsMenu';
import { LanguageSelector } from './components/LanguageSelector';
import { Search } from 'lucide-react';
import { Language } from './types';
import { translations } from './i18n/translations';

function App() {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const toggleIngredientStock = (id: string) => {
    setIngredients(ingredients.map(ing =>
      ing.id === id ? { ...ing, inStock: !ing.inStock } : ing
    ));
  };

  const handleSettingsAction = (actionId: string) => {
    switch (actionId) {
      case 'new-recipe':
        alert('New Recipe feature coming soon!');
        break;
      case 'add-recipe-image':
        alert('Add Recipe Image feature coming soon!');
        break;
      case 'new-ingredient':
        alert('New Ingredient feature coming soon!');
        break;
      case 'add-ingredient-icon':
        alert('Add Ingredient Icon feature coming soon!');
        break;
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{t.appName}</h1>
          <div className="flex items-center gap-4">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <SettingsMenu onAction={handleSettingsAction} translations={t.settings} />
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Recipe Cards Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.recipes}</h2>
            <div className="grid gap-6">
              {filteredRecipes.map(recipe => (
                <div 
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe.id)}
                  className="cursor-pointer transform transition-transform hover:scale-105"
                >
                  <RecipeCard
                    recipe={recipe}
                    ingredients={ingredients}
                    compact={true}
                    translations={{ inStock: t.inStock, outOfStock: t.outOfStock }}
                    language={language}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Detail Section */}
          <div className="md:col-span-2">
            {selectedRecipe ? (
              <RecipeDetail
                recipe={recipes.find(r => r.id === selectedRecipe)!}
                ingredients={ingredients}
                onClose={() => setSelectedRecipe(null)}
                translations={{ inStock: t.inStock, outOfStock: t.outOfStock }}
                language={language}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                {t.selectRecipe}
              </div>
            )}
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{t.ingredients}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {ingredients.map(ingredient => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                onToggleStock={toggleIngredientStock}
                translations={{ inStock: t.inStock, outOfStock: t.outOfStock }}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;