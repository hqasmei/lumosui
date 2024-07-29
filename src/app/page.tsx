import Link from 'next/link';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { components } from '@/config/components';

export default function LandingPage() {
  return (
    <MaxWidthWrapper >
      <h1>Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {components.map((component, idx) => {
          return (
            <Link
              key={idx}
              href={component.path}
              className="border border-accent dark:hover:border-muted-foreground rounded-md p-4 text-center shadow hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <span className="font-medium text-xl">{component.title}</span>
            </Link>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}
