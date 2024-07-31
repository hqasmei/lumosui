import React from 'react';

export default function HeroGradient() {
  return (
    <main className="text-center">
      <div className="mb-8">
        <span className="bg-neutral-800 text-teal-300 px-4 py-2 rounded-full text-sm">
          The Superwall Newsletter: Volume 3
        </span>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Quickly build & test paywalls
        <br />
        without shipping updates
      </h1>

      <p className="text-md mb-8 text-neutral-400">
        Stop wrestling with your codebase to build paywalls.
        <br />
        Start building & deploying paywalls in 10 minutes flat.
      </p>

      <div className="space-x-4">
        <button className="bg-teal-300 text-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-teal-400 transition duration-300">
          Start for free
        </button>
        <button className="bg-transparent border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-neutral-900 transition duration-300">
          Talk to sales 👋
        </button>
      </div>
    </main>
  );
}
