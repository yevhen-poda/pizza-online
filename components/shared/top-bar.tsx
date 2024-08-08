import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 py-5 bg-white shadow-lg shadow-black/5',
        className
      )}
    >
      <Container className="flex justify-between items-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
