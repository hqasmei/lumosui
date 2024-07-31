import React from 'react';

import Image from 'next/image';

type ButtonProps = {
  text: string;
  href: string;
  primary?: boolean;
};

type HeroSectionProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  buttons?: ButtonProps[];
};

export default function BasicHeroSection({
  title,
  subtitle,
  backgroundImage,
  buttons = [],
}: HeroSectionProps) {
  return (
    <div className="relative py-16 flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0  opacity-50"></div>
        </div>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  mb-4">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
