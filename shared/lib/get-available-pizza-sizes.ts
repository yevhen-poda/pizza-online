import { ProductVariation } from '@prisma/client';
import { pizzaSizes, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

export const getAvailablePizzaSizes = (
  variations: ProductVariation[],
  type: PizzaType
): Variant[] => {
  const filteredPizzasByType = variations.filter((variation) => variation.pizzaType === type);

  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));

  return availablePizzaSizes;
};
