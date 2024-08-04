import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

import { ContextProvider } from '@/components/context-provider';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${inter.className}`, 'flex flex-col h-screen')}>
        <ContextProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ContextProvider>
      </body>
    </html>
  );
}
