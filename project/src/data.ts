import { Ingredient, Recipe, Language } from './types';

export const getIngredientTranslations = (language: Language) => {
  const translations = {
    en: {
      flour: 'Flour',
      sugar: 'Sugar',
      eggs: 'Eggs',
      milk: 'Milk',
      butter: 'Butter',
      paprika: 'Paprika',
      pickledCucumbers: 'Pickled Cucumbers',
      mayonnaise: 'Mayonnaise',
      sourCream: 'Sour Cream',
      salt: 'Salt',
      blackPepper: 'Black Pepper',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'pcs',
        pinch: 'pinch'
      }
    },
    tr: {
      flour: 'Un',
      sugar: 'Şeker',
      eggs: 'Yumurta',
      milk: 'Süt',
      butter: 'Tereyağı',
      paprika: 'Biber',
      pickledCucumbers: 'Turşu',
      mayonnaise: 'Mayonez',
      sourCream: 'Ekşi Krema',
      salt: 'Tuz',
      blackPepper: 'Karabiber',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'adet',
        pinch: 'tutam'
      }
    },
    de: {
      flour: 'Mehl',
      sugar: 'Zucker',
      eggs: 'Eier',
      milk: 'Milch',
      butter: 'Butter',
      paprika: 'Paprika',
      pickledCucumbers: 'Gewürzgurken',
      mayonnaise: 'Mayonnaise',
      sourCream: 'Sauerrahm',
      salt: 'Salz',
      blackPepper: 'Schwarzer Pfeffer',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'Stk',
        pinch: 'Prise'
      }
    },
    hu: {
      flour: 'Liszt',
      sugar: 'Cukor',
      eggs: 'Tojás',
      milk: 'Tej',
      butter: 'Vaj',
      paprika: 'Paprika',
      pickledCucumbers: 'Savanyú Uborka',
      mayonnaise: 'Majonéz',
      sourCream: 'Tejföl',
      salt: 'Só',
      blackPepper: 'Fekete Bors',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'db',
        pinch: 'csipet'
      }
    },
    hr: {
      flour: 'Brašno',
      sugar: 'Šećer',
      eggs: 'Jaja',
      milk: 'Mlijeko',
      butter: 'Maslac',
      paprika: 'Paprika',
      pickledCucumbers: 'Kiseli Krastavci',
      mayonnaise: 'Majoneza',
      sourCream: 'Kiselo Vrhnje',
      salt: 'Sol',
      blackPepper: 'Crni Papar',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'kom',
        pinch: 'prstohvat'
      }
    },
    es: {
      flour: 'Harina',
      sugar: 'Azúcar',
      eggs: 'Huevos',
      milk: 'Leche',
      butter: 'Mantequilla',
      paprika: 'Pimentón',
      pickledCucumbers: 'Pepinillos',
      mayonnaise: 'Mayonesa',
      sourCream: 'Crema Agria',
      salt: 'Sal',
      blackPepper: 'Pimienta Negra',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'uds',
        pinch: 'pizca'
      }
    },
    cs: {
      flour: 'Mouka',
      sugar: 'Cukr',
      eggs: 'Vejce',
      milk: 'Mléko',
      butter: 'Máslo',
      paprika: 'Paprika',
      pickledCucumbers: 'Nakládané Okurky',
      mayonnaise: 'Majonéza',
      sourCream: 'Zakysaná Smetana',
      salt: 'Sůl',
      blackPepper: 'Černý Pepř',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'ks',
        pinch: 'špetka'
      }
    },
    ru: {
      flour: 'Мука',
      sugar: 'Сахар',
      eggs: 'Яйца',
      milk: 'Молоко',
      butter: 'Масло',
      paprika: 'Паприка',
      pickledCucumbers: 'Маринованные Огурцы',
      mayonnaise: 'Майонез',
      sourCream: 'Сметана',
      salt: 'Соль',
      blackPepper: 'Черный Перец',
      units: {
        g: 'г',
        ml: 'мл',
        pcs: 'шт',
        pinch: 'щепотка'
      }
    },
    sv: {
      flour: 'Mjöl',
      sugar: 'Socker',
      eggs: 'Ägg',
      milk: 'Mjölk',
      butter: 'Smör',
      paprika: 'Paprika',
      pickledCucumbers: 'Inlagda Gurkor',
      mayonnaise: 'Majonnäs',
      sourCream: 'Gräddfil',
      salt: 'Salt',
      blackPepper: 'Svartpeppar',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'st',
        pinch: 'nypa'
      }
    },
    bs: {
      flour: 'Brašno',
      sugar: 'Šećer',
      eggs: 'Jaja',
      milk: 'Mlijeko',
      butter: 'Maslac',
      paprika: 'Paprika',
      pickledCucumbers: 'Kiseli Krastavci',
      mayonnaise: 'Majoneza',
      sourCream: 'Kisela Pavlaka',
      salt: 'So',
      blackPepper: 'Crni Biber',
      units: {
        g: 'g',
        ml: 'ml',
        pcs: 'kom',
        pinch: 'prstohvat'
      }
    }
  };

  return translations[language];
};

export const ingredients: Ingredient[] = [
  { id: '1', name: 'flour', quantity: 1000, unit: 'g', inStock: true, icon: 'Wheat' },
  { id: '2', name: 'sugar', quantity: 500, unit: 'g', inStock: true, icon: 'Cookie' },
  { id: '3', name: 'eggs', quantity: 60, unit: 'pcs', inStock: true, icon: 'Egg' },
  { id: '4', name: 'milk', quantity: 1000, unit: 'ml', inStock: true, icon: 'Milk' },
  { id: '5', name: 'butter', quantity: 250, unit: 'g', inStock: true, icon: 'Sandwich' },
  { id: '6', name: 'paprika', quantity: 6, unit: 'pcs', inStock: true, icon: 'Pepper' },
  { id: '7', name: 'pickledCucumbers', quantity: 10, unit: 'pcs', inStock: true, icon: 'Vegetable' },
  { id: '8', name: 'mayonnaise', quantity: 200, unit: 'g', inStock: true, icon: 'Bottle' },
  { id: '9', name: 'sourCream', quantity: 300, unit: 'g', inStock: true, icon: 'Cup' },
  { id: '10', name: 'salt', quantity: 100, unit: 'g', inStock: true, icon: 'Container' },
  { id: '11', name: 'blackPepper', quantity: 50, unit: 'g', inStock: true, icon: 'Pepper' },
];

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Chocolate Cake',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { ingredientId: '1', amount: 200, unit: 'g' },
      { ingredientId: '2', amount: 150, unit: 'g' },
      { ingredientId: '3', amount: 2, unit: 'pcs' },
      { ingredientId: '4', amount: 200, unit: 'ml' },
      { ingredientId: '5', amount: 100, unit: 'g' },
    ],
    instructions: [
      'Preheat oven to 180°C',
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake for 30 minutes'
    ]
  },
  {
    id: '2',
    name: 'Egg Salad',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7X477iMrcStfr5occNET3GlI0b5TLjx4A&s',
    ingredients: [
      { ingredientId: '3', amount: 60, unit: 'pcs' },
      { ingredientId: '6', amount: 6, unit: 'pcs' },
      { ingredientId: '7', amount: 10, unit: 'pcs' },
      { ingredientId: '8', amount: 200, unit: 'g' },
      { ingredientId: '9', amount: 300, unit: 'g' },
      { ingredientId: '10', amount: 1, unit: 'pinch' },
      { ingredientId: '11', amount: 1, unit: 'pinch' },
    ],
    instructions: [
      'We boil 60 eggs and chop them with a chopper. We transfer them to a large bowl.',
      'We cut 6 paprikas into thin pieces.',
      'We cut 10 pickled cucumbers into thin pieces and transfer them to the same bowl.',
      'We mix 200gr mayonnaise, 300gr sour cream, then we add a pinch of salt and a pinch of black pepper.',
      'We mix all the ingredients.',
      'Our salad is ready.'
    ]
  }
];