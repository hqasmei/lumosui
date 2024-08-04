'use client';

import React from 'react';

import Link from 'next/link';

import { LogoIcon } from './logo';

export default function MainNav() {
  return (
    <Link href="/" className="gap-2 flex items-center">
      <LogoIcon size={24} />
      <span className="font-bold text-xl">LumosUI</span>
    </Link>
  );
}
