import React from "react";

const PricingCard = () => {
  return (
    <div className=" text-white text-center  p-8 font-sans">
      <h1 className="text-4xl mb-2">PRICING</h1>
      <p className="text-base font-light mb-8">
        Information On All The Available Packages, Including AI Software Brains
      </p>

      <div className="bg-white text-black rounded-2xl p-8 max-w-md mx-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">PREMIUM</h2>
          <div className="bg-black text-white rounded-full px-4 py-1 text-sm">
            Monthly
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-6 text-justify">
          Experience the full power with the Premium Plan, offering
          comprehensive features, priority support, and exclusive tools for
          maximum growth and efficiency
        </p>

        <h3 className="text-3xl font-bold mb-6 text-left">
          $5,000<span className="text-lg font-normal">/month</span>
        </h3>

        <button className="bg-black text-white w-full py-3 rounded-md font-medium mb-6 hover:bg-gray-800 transition duration-300">
          Buy Plan
        </button>

        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Plan Includes:</h4>
          <ul className="list-none space-y-2">
            <li>
              &#10003; The bot handles the entire project lifecycle, from
              initial instructions to final delivery, with minimal human
              intervention.
            </li>
          </ul>
          <p className="text-sm mt-6">
            Demo:{" "}
            <span className="italic text-gray-600">
              Available upon request (waiting list due to high demand).
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
