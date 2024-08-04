import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn('mx-auto w-full md:max-w-5xl px-4', className)}
    >
      {children}
    </div>
  );
}
