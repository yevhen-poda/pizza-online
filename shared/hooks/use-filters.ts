import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  minPrice?: number;
  maxPrice?: number;
}

interface QueryFilters extends PriceProps {
  pizzaType: string;
  size: string;
  ingredients: string;
}

export interface Filters {
  size: Set<string>;
  pizzaType: Set<string>;
  selectedIngredients: Set<string>;
  price: PriceProps;
}

interface ReturnProps extends Filters {
  setPrice: (name: keyof PriceProps, value: number) => void;
  setPizzaType: (value: string) => void;
  setSize: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  // Pizza type filter
  const [pizzaType, { toggle: togglePizzaType }] = useSet(
    new Set<string>(
      searchParams.has('pizzaType')
        ? searchParams.get('pizzaType')?.split(',')
        : []
    )
  );

  // Size filter
  const [size, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.has('size') ? searchParams.get('size')?.split(',') : []
    )
  );

  // Price filter
  const [price, setPrice] = useState<PriceProps>({
    minPrice: Number(searchParams.get('minPrice')) || undefined,
    maxPrice: Number(searchParams.get('maxPrice')) || undefined,
  });

  // Ingredients filter
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  );

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  };

  return {
    pizzaType,
    size,
    price,
    selectedIngredients,
    setPrice: updatePrice,
    setPizzaType: togglePizzaType,
    setSize: toggleSize,
    setSelectedIngredients: toggleIngredients,
  };
};
