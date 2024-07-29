'use client';

import React from 'react';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

import MainNav from './main-nav';
import MaxWidthWrapper from './max-width-wrapper';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const scrolled = useScroll(20);
  console.log(scrolled);
  return (
    <header
      className={cn(
        `inset-x-0 top-0 z-30 w-full transition-all duration-300 sticky`,
        {
          'border-b border-accent backdrop-blur-lg sticky': scrolled,
        },
      )}
    >
      <nav className="w-full h-16 items-center flex justify-center">
        <MaxWidthWrapper className="flex flex-row items-center justify-between">
          <MainNav />
          <ThemeToggle />
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
