import React, { useState } from 'react';
import { Settings, Plus, Image, List, X } from 'lucide-react';
import { SettingsAction } from '../types';

interface Props {
  onAction: (actionId: string) => void;
}

export function SettingsMenu({ onAction }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const actions: SettingsAction[] = [
    { id: 'new-recipe', name: 'New Recipe', icon: 'Plus', action: () => onAction('new-recipe') },
    { id: 'add-recipe-image', name: 'Add Recipe Image', icon: 'Image', action: () => onAction('add-recipe-image') },
    { id: 'new-ingredient', name: 'New Ingredient', icon: 'List', action: () => onAction('new-ingredient') },
    { id: 'add-ingredient-icon', name: 'Add Ingredient Icon', icon: 'Image', action: () => onAction('add-ingredient-icon') },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Settings className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {actions.map((action) => {
              const Icon = action.icon === 'Plus' ? Plus :
                         action.icon === 'Image' ? Image :
                         action.icon === 'List' ? List : Settings;

              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.action();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  role="menuitem"
                >
                  <Icon className="w-4 h-4" />
                  {action.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}