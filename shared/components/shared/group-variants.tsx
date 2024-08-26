'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  value?: Variant['value'];
  onClick?: (value: Variant['value']) => void;
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({ items, value, onClick, className }) => {
  return (
    <div className={cn('flex justify-between p-1 bg-[#F3F3F7] rounded-3xl select-none', className)}>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex flex-1 justify-center items-center px-5 h-[30px] text-sm rounded-3xl transition-all duration-400 cursor-pointer',
            {
              'bg-white shadow': item.value === value,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
