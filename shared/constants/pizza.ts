export const mapPizzaSize = {
  20: 'klein',
  30: 'normal',
  40: 'groß',
} as const;

export const mapPizzaType = {
  1: 'standart',
  2: 'dünn',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  value,
  name,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  value,
  name,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
