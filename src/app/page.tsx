import { createElement } from 'react';

import Link from 'next/link';

import MainNav from '@/components/main-nav';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { components } from '@/config/components';
import { siteConfig } from '@/config/site';

export default function LandingPage() {
  return (
    <MaxWidthWrapper className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden">
        <div className="h-[400px]" />
        <div className="absolute inset-0 flex flex-col items-center text-center justify-center bg-accent">
          <span className="text-5xl font-bold mb-4 ">{siteConfig.name}</span>
          <p className="text-xl mb-6 text-balance text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </div>

      {/* Featured Components Section */}
      <section className='pb-10'>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="space-y-4">
          {components.map((component, idx) => (
            <Link key={idx} href={component.path} className="block w-full">
              <div className="group relative rounded-lg overflow-hidden bg-accent/50 hover:shadow-lg transition-all duration-300 ease-in-out pt-4 px-4  pb-8">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <span className="font-medium text-foreground text-lg">
                      {component.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    {createElement(
                      component.items[0].Component,
                      component.items[0].props,
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
