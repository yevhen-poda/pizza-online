import React from 'react';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';
import { Container } from './container';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <div>
        <Container className="flex items-center justify-between py-8">
          {/* Linke Seite */}
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-2xl uppercase font-black">Pizza Online</h1>
                <p className="text-sm text-gray-400 leading-3">
                  Es war noch nie so lecker
                </p>
              </div>
            </div>
          </Link>

          {/* SerachBar */}
          <div className="flex-1 mx-10">
            <SearchInput />
          </div>

          {/* Rechte Seite */}
          <div className="flex item-center gap-3">
            <Button variant="outline" className="flex items-center gap-1">
              <User size={16} />
              Anmelden
            </Button>

            <div className="">
              <Button className="group relative">
                <b>12 €</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                  <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                  <b>3</b>
                </div>
                <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
