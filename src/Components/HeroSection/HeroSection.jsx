import React from "react";
import { CiPlay1 } from "react-icons/ci";

const HeroSection = () => {
  return (
     <div className="hero bg-base-200 min-h-screen">
        
  <div className="hero-content flex-col lg:flex-row-reverse">     
    <img
      src="/banner.png"
      className="max-w-sm w-full rounded-lg shadow-2xl"
    />
    <div className='text-center md:text-left md:mr-20'>
         <button className='hidden md:inline-block rounded-full py-3 px-5 bg-[#E1E7FF] text-[#9829f8] text-lg font-semibold mt-7'> <a className="circle-icon"></a> New: AI-Powered Tools Available</button>
      <h1 className="text-4xl md:text-7xl font-bold md:font-extrabold leading-tight"> Supercharge Your <br />   <span className="bg-linear-to-r 
            from-violet-700 to-[#950dcf]  
           bg-clip-text 
           text-transparent">Digital Workflow</span></h1>
      <p className="py-6  md:text-lg text-gray-500 ">
         Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. Explore
            Products
      </p>
       <div className="flex items-center justify-center md:justify-start">
                  <button className='btn rounded-full p-5 bg-linear-to-bl from-violet-500 to-[#4F39F6] md:text-lg font-semibold text-white'>Explore Products</button>
                <button className='btn rounded-full p-5 ml-4 border-2 border-[#4F39F6] md:text-lg font-semibold text-[#4F39F6] '><CiPlay1></CiPlay1> Watch Demo</button>
                </div>
    </div>
  </div>
</div>
    
  );
};

export default HeroSection;
