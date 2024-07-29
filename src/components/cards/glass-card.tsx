import React from 'react';

type GlassCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function GlassCard({
  title,
  subtitle,
  buttonText,
}: GlassCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md shadow-lg p-8">
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-6">{subtitle}</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
