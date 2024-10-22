import React from "react";

const PricingCard = () => {
  return (
    <div className="bg-black text-white text-center p-8 font-sans">
      <h1 className="font-varino text-4xl mb-2">PRICING</h1>
      <p className="font-monosans text-base mb-8">
        Information On All The Available Packages, Including AI Software Brains
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-[135px]">
        {/* Pricing Card 1 */}
        <div className="bg-white text-black rounded-2xl p-8 max-w-md mx-auto shadow-xl m-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-varino text-2xl font-bold">START</h2>
            <div className="bg-black text-white rounded-full px-4 py-1 text-sm">
              Monthly
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-justify">
            Get essential tools and support to kickstart your project, perfect
            for individuals or small teams starting out
          </p>

          <h3 className="text-3xl font-bold mb-6 text-left">
            $199<span className="text-lg font-normal">/month</span>
          </h3>

          <button className="bg-black text-white w-full py-3 rounded-md font-medium mb-6 hover:bg-gray-800 transition duration-300">
            Buy Plan
          </button>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Plan Includes:</h4>
            <ul className="list-none space-y-2">
              <li>
                &#10003; Limited number of SEO articles and media distribution.
                Ideal for small businesses.
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div className="bg-white text-black rounded-2xl p-8 max-w-md mx-auto shadow-xl m-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-varino text-2xl font-bold">STANDARD</h2>
            <div className="bg-black text-white rounded-full px-4 py-1 text-sm">
              Monthly
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-justify">
            Upgrade to the Standard Plan for enhanced features, better support,
            and advanced tools, ideal for growing teams and expanding projects.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-left">
            $690<span className="text-lg font-normal">/month</span>
          </h3>

          <button className="bg-black text-white w-full py-3 rounded-md font-medium mb-6 hover:bg-gray-800 transition duration-300">
            Buy Plan
          </button>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Plan Includes:</h4>
            <ul className="list-none space-y-2">
              <li>
                &#10003; More articles and wider media coverage. Suitable for
                medium-sized businesses.
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div className="bg-white text-black rounded-2xl p-8 max-w-md mx-auto shadow-xl m-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-varino text-2xl font-bold">PREMIUM</h2>
            <div className="bg-black text-white rounded-full px-4 py-1 text-sm">
              Monthly
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-justify">
            Experience the full power with the Premium Plan, offering
            comprehensive features, priority support, and exclusive tools for
            maximum growth and efficiency.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-left">
            $1,490<span className="text-lg font-normal">/month</span>
          </h3>

          <button className="bg-black text-white w-full py-3 rounded-md font-medium mb-6 hover:bg-gray-800 transition duration-300">
            Buy Plan
          </button>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Plan Includes:</h4>
            <ul className="list-none space-y-2">
              <li>
                &#10003; Personalized SEO strategy and access to high-profile
                media platforms. Perfect for businesses seeking rapid growth.
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Card 4 */}
        <div className="bg-white text-black rounded-2xl p-8 max-w-md mx-auto shadow-xl m-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-varino text-2xl font-bold">PREMIUM GOLD</h2>
            <div className="bg-black text-white rounded-full px-4 py-1 text-sm">
              Monthly
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-justify">
            Unlock the ultimate package with the Premium Gold Plan, VIP support,
            and unmatched tools for the highest level of performance and growth.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-left">
            $4,900<span className="text-lg font-normal">/month</span>
          </h3>

          <button className="bg-black text-white w-full py-3 rounded-md font-medium mb-6 hover:bg-gray-800 transition duration-300">
            Buy Plan
          </button>

          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Plan Includes:</h4>
            <ul className="list-none space-y-2">
              <li>
                &#10003; Unlimited articles and global media distribution. Ideal
                for large companies needing extensive support.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
