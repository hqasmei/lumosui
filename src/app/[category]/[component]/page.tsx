import React from 'react';

import dynamic from 'next/dynamic';

import BackButton from '@/components/back-button';
import CodeBlock from '@/components/code-block';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { components } from '@/config/components';
import { getComponentSource } from '@/lib/get-component-source';

export default async function ComponentPage({
  params,
}: {
  params: { component: string };
}) {
  const componentName = params.component;

  const componentConfig = components
    .flatMap((category) => category.items)
    .find(
      (item) => item.name.toLowerCase().replace(/\s+/g, '-') === componentName,
    );

  if (!componentConfig) {
    return <MaxWidthWrapper>Component not found</MaxWidthWrapper>;
  }

  const DynamicComponent = dynamic(
    () => import(`@/components/${componentConfig.path}`),
  );

  // Fetch the component source code
  const sourceCode = await getComponentSource(componentConfig.path);

  return (
    <MaxWidthWrapper className='py-4'>
      <div className="flex flex-col gap-4">
        <BackButton />
        <div className="flex flex-col gap-4">
          <h1>{componentConfig.name}</h1>

          <div className="w-full flex-grow flex flex-col rounded-md gap-4 bg-accent/50 p-10 items-center justify-center border border-muted-foreground/10">
            <DynamicComponent {...componentConfig.props} />
          </div>

          <CodeBlock code={sourceCode} language="tsx" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
