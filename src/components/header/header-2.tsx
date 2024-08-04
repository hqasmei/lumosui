'use client';

import React, { useState } from 'react';

import { HeaderConfig } from '@/config/headerConfig';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

export default function Header2({ config }: { config: HeaderConfig }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">
            {config.companyName}
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {config.navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-foreground hover:text-muted-foreground transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-foreground hover:text-muted-foreground transition duration-300">
              <Search size={20} />
            </button>
            <button className="text-foreground hover:text-muted-foreground transition duration-300">
              <User size={20} />
            </button>
            <button className="text-foreground hover:text-muted-foreground transition duration-300">
              <ShoppingCart size={20} />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-muted-foreground transition duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 text-foreground hover:text-muted-foreground transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-foreground hover:text-muted-foreground transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-foreground hover:text-muted-foreground transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-foreground hover:text-muted-foreground transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex justify-between mt-4">
              <button className="text-foreground hover:text-muted-foreground transition duration-300">
                <Search size={20} />
              </button>
              <button className="text-foreground hover:text-muted-foreground transition duration-300">
                <User size={20} />
              </button>
              <button className="text-foreground hover:text-muted-foreground transition duration-300">
                <ShoppingCart size={20} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
