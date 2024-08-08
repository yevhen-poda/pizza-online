'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { cn } from '@/lib/utils';
import { ApiClient } from '@/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await ApiClient.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50" />
      )}

      <div
        ref={ref}
        className={cn(
          'relative z-30 flex flex-1 justify-between h-11 rounded-2xl',
          className
        )}
      >
        <Search className="absolute top-1/2 left-3 h-5 text-gray-400 translate-y-[-50%]" />
        <input
          className="w-full pl-11 rounded-2xl outline-none  bg-gray-100 "
          type="text"
          placeholder="Suche Pizza, Getränk, etc."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'invisible absolute top-14 z-30 w-full py-2 rounded-xl bg-white shadow-md transition-all duration-200 opacity-0',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                onClick={onClickItem}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-8 h-8 rounded-sm"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
