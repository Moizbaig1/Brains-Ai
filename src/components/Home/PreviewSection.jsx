import React from 'react';
import { Link } from 'react-router-dom';
 import AIBrainLandingPage from '../AiSoftwareBrains/AIBrainLandingPage';
import AIMarketingLandingPage from '../AiSoftwareBrains/AIMarketingLandingPage';

const PreviewSection = () => {
  return (
    <div>
      <section className="my-10 p-5 lg:p-10">
        <h1 className="font-varino text-[30px] xl:text-[50px] text-center mb-5">
          Explore Our AI Solutions
        </h1>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
          
          <div className="flex flex-col items-center text-center bg-gray-800 p-5 rounded-lg">
            <h2 className="text-white text-xl mb-2">AI Software Brains</h2>
            <p className="text-gray-400 mb-4">
              Discover how our AI Software Brains can transform your business processes and enhance decision-making.
            </p>
            <Link 
              to="/AiBrainLandingPage"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Learn More
            </Link>
          </div>

          {/* AI Marketing Plugin Preview */}
          <div className="flex flex-col items-center text-center bg-gray-800 p-5 rounded-lg">
            <h2 className="text-white text-xl mb-2">AI Marketing Plugin</h2>
            <p className="text-gray-400 mb-4">
              Elevate your marketing strategy with our AI Marketing Plugin, designed to optimize campaigns and boost engagement.
            </p>
            <Link 
              to='/AiMarketingLandingPage'
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PreviewSection;
