'use client';

import React, { useState } from 'react';

import { HeaderConfig } from '@/config/headerConfig';
import { Menu, X } from 'lucide-react';

export default function Header1({ config }: { config: HeaderConfig }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex justify-between items-center p-4 bg-background">
      <div className="text-xl font-bold">{config.companyName}</div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {config.navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-foreground hover:text-muted-foreground">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background md:hidden">
          <ul className="flex flex-col items-center py-2">
            <li className="py-2">
              <a href="#" className="text-foreground hover:text-muted-foreground">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-foreground hover:text-muted-foreground">
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-foreground hover:text-muted-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
