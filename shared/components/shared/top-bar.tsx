import React from 'react';
import { Category } from '@prisma/client';
import { cn } from '@/shared/lib/utils';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 py-5 bg-white shadow-lg shadow-black/5',
        className
      )}
    >
      <Container className="flex justify-between items-center">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
