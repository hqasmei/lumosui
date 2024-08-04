import { createElement } from 'react';

import Link from 'next/link';

import Header from '@/components/header';
import { LogoIcon } from '@/components/logo';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { components } from '@/config/components';
import { siteConfig } from '@/config/site';

export default function LandingPage() {
  return (
    <>
      <Header />
      <MaxWidthWrapper className="pb-10">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden py-10 h-[300px]">
          <div className="absolute inset-0 flex flex-col items-center text-center justify-center gap-2">
            <LogoIcon size={60} />
            <span className="text-5xl font-bold">{siteConfig.name}</span>
            <p className="text-xl mb-6 text-balance text-muted-foreground px-6">
              {siteConfig.description}
            </p>
          </div>
        </div>

        {/* Featured Components Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Components</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {components.map((component, idx) => (
              <Link
                key={idx}
                href={component.path}
                className="block w-full border rounded-lg border-accent"
              >
                <div className="group relative rounded-lg overflow-hidden h-full ju bg-accent/50 hover:shadow-lg transition-all duration-300 ease-in-out pt-4 px-4  pb-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="font-medium text-foreground text-lg">
                        {component.title}
                      </span>
                    </div>
                    <div className="flex items-center justify-center flex-1 h-full">
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
    </>
  );
}
