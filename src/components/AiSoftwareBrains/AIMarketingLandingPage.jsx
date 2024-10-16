import React from 'react';

const AIMarketingLandingPage = () => {
  return (
    <div className='max-w-3xl mx-auto p-6 bg-black rounded-lg shadow-md mt-10 mb-10'>
      <header className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-white'>AI Marketing Plugin</h1>
        <p className='text-lg text-gray-300'>Your Comprehensive Marketing Solution</p>
      </header>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold text-white mb-2'>Service Description</h2>
        <p className='text-gray-300'>
          The AI Marketing Plugin is an all-in-one solution that combines SEO AI and Media Press AI to provide comprehensive marketing support. It automates off-page SEO optimization and media outreach, enhancing both search engine rankings and global visibility.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold text-white mb-2'>How It Works</h2>
        <ul className='list-disc list-inside text-gray-300'>
          <li><strong>SEO Article Generation:</strong> The plugin connects to your website and generates off-page SEO optimized articles to boost your rankings.</li>
          <li><strong>Media Distribution:</strong> The plugin automatically distributes these articles across major international media platforms to enhance your visibility.</li>
          <li><strong>Performance Monitoring:</strong> The system generates detailed reports to track the performance of your SEO and media campaigns.</li>
        </ul>
      </section>

      <section className='AiMarketingLandingPage'>
        <h2 className='text-2xl font-semibold text-white mb-2'>Available Packages</h2>
        <div className='space-y-4'>
          <div className='p-4 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-bold text-white'>Start</h3>
            <p className='text-lg text-gray-300'>Price: <span className='font-bold text-green-400'>$199/month</span></p>
            <p className='text-gray-300'>Limited number of SEO articles and media distribution. Ideal for small businesses.</p>
          </div>
          <div className='p-4 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-bold text-white'>Standard</h3>
            <p className='text-lg text-gray-300'>Price: <span className='font-bold text-green-400'>$690/month</span></p>
            <p className='text-gray-300'>More articles and wider media coverage. Suitable for medium-sized businesses.</p>
          </div>
          <div className='p-4 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-bold text-white'>Premium</h3>
            <p className='text-lg text-gray-300'>Price: <span className='font-bold text-green-400'>$1,490/month</span></p>
            <p className='text-gray-300'>Personalized SEO strategy and access to high-profile media platforms. Perfect for businesses seeking rapid growth.</p>
          </div>
          <div className='p-4 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-bold text-white'>Premium Gold</h3>
            <p className='text-lg text-gray-300'>Price: <span className='font-bold text-green-400'>$4,900/month</span></p>
            <p className='text-gray-300'>Unlimited articles and global media distribution. Ideal for large companies needing extensive support.</p>
          </div>
        </div>
      </section>
    </div>
   
  );
 
};


export default AIMarketingLandingPage;
