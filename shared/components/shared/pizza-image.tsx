import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  size: 20 | 30 | 40;
  className?: string;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        'relative flex flex-1 justify-center items-center w-full',
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Product"
        className={cn(
          'relative top-2 left-2 z-10 transition-all duration-300',
          {
            'w-[300px] h-[300px]': size === 20,
            'w-[400px] h-[400px]': size === 30,
            'w-[500px] h-[500px]': size === 40,
          }
        )}
      />
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] border-2 rounded-full border-gray-200 border-dashed -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[370px] h-[370px] border-2 rounded-full border-gray-100 border-dotted -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
