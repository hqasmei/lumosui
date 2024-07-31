import React from 'react';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { ComponentConfig, components } from '@/config/components';
import { cn, makeIntoSlug } from '@/lib/utils';

type CategoryPageProps = {
  params: { category: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;

  const componentData = components.find((c) => c.path === `/${category}`);

  console.log(category);
  if (!componentData) {
    notFound();
  }

  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h1 className="text-2xl md:text-4xl font-bold">
          {componentData.title}
        </h1>
        <p className="text-lg text-muted-foreground text-balance">
          {componentData.description}
        </p>
      </div>

      <div
        className={cn(
          'flex gap-4 mt-4',
          componentData.columns === 1 ? 'flex-col' : ' flex-wrap',
        )}
      >
        {componentData.items.map(
          (itemConfig: ComponentConfig, index: number) => {
            const ItemComponent = itemConfig.Component;
            const slug = makeIntoSlug(itemConfig.name);

            return (
              <Link
                key={index}
                href={`${category}/${slug}`}
                className={cn(
                  componentData.columns === 1
                    ? 'w-full'
                    : 'w-full sm:w-[calc(50%-0.5rem)]',
                  'flex-grow flex flex-col rounded-md gap-4 bg-accent/50 p-10 cursor-pointer items-center justify-center border border-muted-foreground/10',
                )}
              >
                <ItemComponent {...itemConfig.props} />
              </Link>
            );
          },
        )}
      </div>
    </MaxWidthWrapper>
  );
}
