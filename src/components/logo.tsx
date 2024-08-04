import React from 'react';

export type IconProps = {
  size: number;
};

export const LogoIcon: React.FC<IconProps> = ({ size }) => (
  <div className="bg-background rounded-md flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 256 256"
      className="bg-background rounded-md"
    >
      <path
        d="M128 0C128 16.8092 124.689 33.4538 118.257 48.9835C111.824 64.5132 102.396 78.6238 90.5097 90.5097C78.6238 102.396 64.5132 111.824 48.9835 118.257C33.4538 124.689 16.8092 128 0 128V0H128Z"
        className="fill-foreground"
      />
      <path
        d="M256 128C239.191 128 222.546 124.689 207.017 118.257C191.487 111.824 177.376 102.396 165.49 90.5097C153.604 78.6238 144.176 64.5132 137.743 48.9835C131.311 33.4538 128 16.8092 128 -5.59506e-06L256 0L256 128Z"
        className="fill-foreground"
      />
      <path
        d="M-5.59506e-06 128C16.8092 128 33.4538 131.311 48.9835 137.743C64.5132 144.176 78.6238 153.604 90.5097 165.49C102.396 177.376 111.824 191.487 118.257 207.017C124.689 222.546 128 239.191 128 256L0 256L-5.59506e-06 128Z"
        className="fill-foreground"
      />
      <path
        d="M128 256C128 239.191 131.311 222.546 137.743 207.017C144.176 191.487 153.604 177.376 165.49 165.49C177.376 153.604 191.487 144.176 207.017 137.743C222.546 131.311 239.191 128 256 128L256 256L128 256Z"
        className="fill-foreground"
      />
    </svg>
  </div>
);
