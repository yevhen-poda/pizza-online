import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  name: string;
  imageUrl: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, onClickAdd, className }) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 25;

  return (
    <div className={cn('flex flex-1', className)}>
      <div className="relative flex flex-1 justify-center items-center w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative top-2 left-2 z-10 w-[350px] h-[350px] transition-all duration-300"
        />
      </div>

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <Title text={name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">{textDetails}</p>
        <Button
          // loading={loading}
          // onClick={handleClickAdd}
          className="w-full h-[55px] mt-10 px-10 text-base rounded-[18px]"
        >
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
