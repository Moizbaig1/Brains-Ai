import React from 'react';

const PromoCodeStats = () => {
  // Dummy data for promo code usage
  const promoCodeData = {
    code: "SAVE20",
    timesUsed: 150,
    description: "Get 20% off on your next purchase!",
  };

  return (
    <div className="my-16 p-6 text-center bg-[#111424] rounded-[40px] shadow-md">
      <h1 className="text-3xl text-white mb-4">Promo Code Stats</h1>
      <h2 className="text-2xl text-white mb-2">{promoCodeData.code}</h2>
      <p className="text-gray-400 mb-4">{promoCodeData.description}</p>
      <p className="text-xl text-white">
        This promo code has been used {promoCodeData.timesUsed} times!
      </p>
    </div>
  );
};

export default PromoCodeStats;
