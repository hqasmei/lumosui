import React from 'react';

export const Main1 = ({
  backgroundColor = 'bg-blue-500',
  backgroundStyle,
  backgroundComponent: BackgroundComponent,
}: {
  backgroundColor?: string;
  backgroundStyle?: any;
  backgroundComponent?: any;
}) => {
  return (
    <main
      className={`${backgroundColor.startsWith('bg-') ? backgroundColor : ''} text-white relative`}
      style={backgroundStyle}
    >
      {BackgroundComponent && <BackgroundComponent />}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl mb-6">
          Discover amazing features and boost your productivity.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300">
            Customize
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 z-10">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Hero Image Placeholder
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
