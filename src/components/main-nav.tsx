'use client';

import React from 'react';

import Link from 'next/link';

import { Sparkle } from 'lucide-react';

export default function MainNav() {
  return (
    <Link href="/" className="gap-2 flex items-center">
      <div className="bg-foreground rounded-md p-1 w-7 h-7 flex items-center justify-center">
        <Sparkle className="stroke-background" size={20} />
      </div>
      <span className="font-bold text-xl">LumosUI</span>
    </Link>
  );
}
