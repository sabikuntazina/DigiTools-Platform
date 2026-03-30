import React from "react";
import { CiPlay1 } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/banner.png" className="max-w-md rounded-lg shadow-2xl" />
        <div>
            <button className='hidden md:inline-block rounded-full py-3 px-5 bg-[#E1E7FF] text-[#9829f8] text-lg font-semibold mt-7'> <a className="circle-icon"></a> New: AI-Powered Tools Available</button>
          <h1 className="text-4xl text-center md:text-left md:text-7xl font-extrabold md:leading-24">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-center md:text-left text-xl text-gray-500 leading-9">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <button className='btn rounded-full p-5 bg-linear-to-bl from-violet-500 to-[#4F39F6] text-lg font-semibold text-white'>Explore Products</button>
          <button className='btn rounded-full p-5 ml-4 border-2 border-[#4F39F6] text-lg font-semibold text-[#4F39F6] '><CiPlay1></CiPlay1> Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
