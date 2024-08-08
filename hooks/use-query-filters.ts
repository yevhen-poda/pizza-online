import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.price,
      pizzaType: Array.from(filters.pizzaType),
      size: Array.from(filters.size),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};
