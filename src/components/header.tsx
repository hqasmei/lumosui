'use client';

import React from 'react';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { GithubIcon } from 'lucide-react';

import MainNav from './main-nav';
import MaxWidthWrapper from './max-width-wrapper';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header>
      <nav className="w-full h-16 items-center flex justify-center">
        <MaxWidthWrapper className="flex flex-row items-center justify-between">
          <div className="flex items-end gap-4">
            <MainNav />
            <Link href="/layout-builder" className="text-muted-foreground">
              Landing Page Builder
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
