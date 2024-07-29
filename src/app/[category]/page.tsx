import React from 'react';

import { notFound } from 'next/navigation';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { ComponentConfig, components } from '@/config/components';

type CategoryPageProps = {
  params: { category: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const componentData = components.find((c) => c.path === `/${category}`);

  if (!componentData) {
    notFound();
  }

  return (
    <MaxWidthWrapper>
      <h1>{componentData.title}</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {componentData.items.map(
          (itemConfig: ComponentConfig, index: number) => {
            const ItemComponent = itemConfig.Component;
            return (
              <div
                key={index}
                className="flex flex-col rounded-md gap-4 bg-accent/50 p-4 items-center justify-center"
              >
                <ItemComponent {...itemConfig.props} />
              </div>
            );
          },
        )}
      </div>
    </MaxWidthWrapper>
  );
}

export async function generateStaticParams() {
  return components.map((component) => ({
    category: component.path.slice(1), // Remove leading slash
  }));
}
