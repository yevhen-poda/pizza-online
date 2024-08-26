import React from 'react';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center w-32 p-1 text-center bg-white rounded-md shadow-md cursor-pointer',
        { 'border border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img src={imageUrl} width={110} height={110} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} €</span>
    </div>
  );
};
