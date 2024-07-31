'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="flex items-center group gap-1 text-sm text-muted-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 rotate-180 fill-muted-foreground group-hover:fill-foreground group-hover:-translate-x-0.5 transition-colors duration-200"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="group-hover:text-foreground transition-colors duration-200">
        Back
      </span>
    </button>
  );
}