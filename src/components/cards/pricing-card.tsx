import React from 'react';

type PricingCardProps = {
  planName: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
};

export default function PricingCard({
  planName,
  price,
  period,
  features,
  ctaText,
}: PricingCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-4 text-center text-neutral-800 dark:text-white">
        {planName}
      </h2>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-neutral-800 dark:text-white">
          {price}
        </span>
        <span className="text-neutral-500 dark:text-neutral-400">/{period}</span>
      </div>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center mb-2 text-neutral-700 dark:text-neutral-300"
          >
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
        {ctaText}
      </button>
    </div>
  );
}
