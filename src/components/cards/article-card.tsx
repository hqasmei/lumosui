import React from 'react';

import Image from 'next/image';

type ArticleCardProps = {
  title: string;
  authorName: string;
  date: string;
  imageUrl: string;
  authorImageUrl: string;
};

export default function ArticleCard({
  title,
  authorName,
  date,
  imageUrl,
  authorImageUrl,
}: ArticleCardProps) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-background dark:bg-accent gap-2 flex flex-col p-4">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt="Coffee cup"
          layout="fill" 
          className="rounded-md object-cover"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex items-center gap-2">
          <Image
            src={authorImageUrl}
            alt="Tara Gibson"
            width={28}
            height={28}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-foreground font-semibold text-sm">
              {authorName}
            </span>
            <span className="text-gray-400 text-xs">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
