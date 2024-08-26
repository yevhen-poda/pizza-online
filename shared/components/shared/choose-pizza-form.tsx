import React, { useEffect, useState } from 'react';
import { Ingredient, ProductVariation } from '@prisma/client';

import { cn } from '@/shared/lib/utils';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { IngredientItem } from './ingredient-item';
import { calcPizzaPrice } from '@/shared/lib';
import { usePizzaVariations } from '@/shared/hooks';

interface Props {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  variations: ProductVariation[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  variations,
  onClickAddCart,
  className,
}) => {
  const { size, type, setSize, setType, availableSizes, selectedIngredients, addIngredient } =
    usePizzaVariations(variations);

  const totalPrice = calcPizzaPrice(variations, type, size, ingredients, selectedIngredients);

  const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`;

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  // console.log(variations, availablePizzaSizes);

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="overflow-auto h-[420px] mt-5 p-5 bg-gray-50 rounded-md scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          // loading={loading}
          onClick={handleClickAdd}
          className="w-full h-[55px] mt-10 px-10 text-base rounded-[18px]"
        >
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
