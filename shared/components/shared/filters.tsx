'use client';

import React from 'react';
import { Input } from '../ui';
import { Title } from './title';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { RangeSlider } from './range-slider';
import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (price: number[]) => {
    filters.setPrice('minPrice', price[0]);
    filters.setPrice('maxPrice', price[1]);
  };

  return (
    <div className={className}>
      {/* <Title text="Filtration" size="sm" className="mb-5 font-bold" /> */}

      {/* <div className="flex flex-col gap-4">
        <FilterCheckbox name="name1" text="Selbst zusammenstellen" value="1" />
        <FilterCheckbox name="name2" text="Neu" value="2" />
      </div> */}

      {/* Pizza type filter */}
      <CheckboxFiltersGroup
        title="Pizzateig"
        name="pizzaType"
        className="mb-5"
        selected={filters.pizzaType}
        onClickCheckbox={filters.setPizzaType}
        items={[
          { text: 'dünn', value: '1' },
          { text: 'standart', value: '2' },
        ]}
      />

      {/* Size filter */}
      <CheckboxFiltersGroup
        title="Größe"
        name="size"
        className="mt-5"
        selected={filters.size}
        onClickCheckbox={filters.setSize}
        items={[
          { text: '20 cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

      {/* Price filter */}
      <div className="mt-5 py-6 pb-7 border-y border-y-neutral-100">
        <p className="mb-3 font-bold">Preis von - bis:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            value={String(filters.price.minPrice)}
            min={0}
            max={10}
            placeholder="0"
            onChange={(e) =>
              filters.setPrice('minPrice', Number(e.target.value))
            }
          />
          <Input
            type="number"
            value={String(filters.price.maxPrice)}
            min={10}
            max={25}
            placeholder="10"
            onChange={(e) =>
              filters.setPrice('maxPrice', Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          value={[filters.price.minPrice || 0, filters.price.maxPrice || 25]}
          min={0}
          max={25}
          step={1}
          onValueChange={updatePrice}
        />
      </div>

      {/* Ingredients filter */}
      <CheckboxFiltersGroup
        title="Zutaten"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
