'use client';

import React from 'react';
import { Category } from '@prisma/client';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {items.map(({ id, name }, index) => (
        <a
          href={`/#${name}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeCategoryId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={index}
        >
          <button className="">{name}</button>
        </a>
      ))}
    </div>
  );
};
