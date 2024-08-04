'use client';

import React from 'react';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-react';

import MainNav from './main-nav';
import MaxWidthWrapper from './max-width-wrapper';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        `inset-x-0 top-0 z-30 w-full border-accent transition-all duration-300 sticky`,
        {
          'border-b backdrop-blur-lg sticky': scrolled,
        },
      )}
    >
      <nav className="w-full h-16 items-center flex justify-center">
        <MaxWidthWrapper className="flex flex-row items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/builder" className="text-muted-foreground">
              Builder
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="p-1 w-7 h-7 rounded-md hover:bg-accent transition-colors duration-200"
            >
              <GithubIcon size={20} className="stroke-muted-foreground" />
            </Link>
            <ThemeToggle />
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
