import React from 'react';

export default function Footer1() {
  return (
    <footer className="bg-background text-foreground p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Company Name</h2>
          <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
        </div>
        <nav className="flex flex-col md:flex-row md:space-x-4">
          <a href="#" className="hover:text-muted-foreground">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-muted-foreground">
            Terms of Service
          </a>
          <a href="#" className="hover:text-muted-foreground">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
}
