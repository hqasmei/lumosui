import React from 'react';

export default function Main2() {
  return (
    <main className="bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Streamline your processes and achieve more with our cutting-edge
            tools.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
              Try it Free
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-2xl">
            <div className="bg-gray-200 h-80 rounded flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Product Screenshot Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
