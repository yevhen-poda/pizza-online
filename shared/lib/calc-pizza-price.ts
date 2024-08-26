import { Ingredient, ProductVariation } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Berechnung des Gesamtpreises einer Pizza
 * @param variations Verfügbare Pizzavariationen
 * @param type Teigtype der ausgewählten Pizza
 * @param size Ausgewählte Pizzagröße
 * @param ingredients Zutatenliste
 * @param selectedIngredients Ausgewählte Zutaten
 *
 * @returns Gesamtpreis
 */
export const calcPizzaPrice = (
  variations: ProductVariation[],
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    variations.find((variation) => variation.pizzaType === type && variation.size === size)
      ?.price || 0;

  const ingredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + ingredientsPrice;
};
