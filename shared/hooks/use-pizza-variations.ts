import { useEffect, useState } from 'react';
import { useSet } from 'react-use';
import { Variant } from '../components/shared/group-variants';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { getAvailablePizzaSizes } from '../lib';
import { ProductVariation } from '@prisma/client';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  availableSizes: Variant[];
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
}

export const usePizzaVariations = (variations: ProductVariation[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const availableSizes = getAvailablePizzaSizes(variations, type);

  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    availableSizes,
    selectedIngredients,
    addIngredient,
  };
};
