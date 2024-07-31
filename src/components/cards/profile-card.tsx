import React from 'react';

import Image from 'next/image';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
};

export default function ProfileCard({
  name,
  role,
  avatarUrl,
  bio,
}: ProfileCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-200">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 mr-4">
            <Image
              src={avatarUrl}
              alt={name}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
              {name}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">{role}</p>
          </div>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          {bio}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}
