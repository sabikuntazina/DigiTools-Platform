import React from "react";

const PopularSection = () => {
  return (
    <div className=" py-15  bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        <div className="space-y-4 text-center">
          <p className="font-extrabold text-5xl">50K+</p>
          <p className="text-gray-200 text-xl">Active Users</p>
        </div>
        <div className="space-y-4 text-center border-l-2 border-gray-400">
          <p className="font-extrabold text-5xl">200+</p>
          <p className="text-gray-200 text-xl">Premium Tools</p>
        </div>
        
        <div className="space-y-4 text-center border-l-2 border-gray-400">
          <p className="font-extrabold text-5xl">4.9</p>
          <p className="text-gray-200 text-xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
