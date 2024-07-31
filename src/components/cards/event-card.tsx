import React from 'react';

import Image from 'next/image';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
};

export default function EventCard({
  title,
  date,
  location,
  description,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-200">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} layout="fill" className='object-cover' />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-neutral-800 dark:text-white">
          {title}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base mb-2">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-base mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
