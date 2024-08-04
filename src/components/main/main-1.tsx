import React from 'react';

export default function Main1() {
  return (
    <main className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-xl mb-6">
              Discover amazing features and boost your productivity.
            </p>
            <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Hero Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
