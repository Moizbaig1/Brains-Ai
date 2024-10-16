import React from 'react';
import { Link } from 'react-router-dom';

const PreviewSection = () => {
  return (
    <div className="my-16 p-6">
      <h1 className="font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center text-white mb-8">
        Explore Our AI Solutions
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        {/* AI Software Brains Preview */}
        <div className="flex flex-col items-center text-center bg-[#111424] p-6 rounded-[40px] transition-transform transform hover:scale-105 shadow-md">
          <h2 className="text-white text-2xl mb-2">AI Software Brains</h2>
          <p className="text-gray-400 mb-4">
            Transform your business processes and enhance decision-making with our AI Software Brains.
          </p>
          <Link 
            to="/AiBrainLandingPage"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>

        {/* AI Marketing Plugin Preview */}
        <div className="flex flex-col items-center text-center bg-[#111424] p-6 rounded-[40px] transition-transform transform hover:scale-105 shadow-md">
          <h2 className="text-white text-2xl mb-2">AI Marketing Plugin</h2>
          <p className="text-gray-400 mb-4">
            Optimize your marketing strategy and boost engagement with our AI Marketing Plugin.
          </p>
          <Link 
            to='/AiMarketingLandingPage'
            className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PreviewSection;
