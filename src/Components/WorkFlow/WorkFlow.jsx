import React from 'react';

const WorkFlow = () => {
    return (
       <div className="hero  bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white py-25 px-5">
  <div className="hero-content text-center">
    <div className="md:max-w-5xl">
      <h1 className="text-5xl font-bold">Ready to Transform Your Workflow?</h1>
       <p className="py-6 text-gray-300 text-lg">
        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
      </p>
      <div className="flex items-center justify-center gap-4">
         <button className='btn rounded-full p-5 ml-4 border-2 border-[#4F39F6] md:text-lg font-semibold text-[#4F39F6] '> Explore Products</button>
                        <button className='btn rounded-full p-5 bg-linear-to-bl from-violet-500 to-[#4F39F6] md:text-lg font-semibold text-white'>View Pricing</button>
                     
                      </div>
      <p className="pt-6 text-gray-300 text-lg">
       14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  </div>
</div>
    );
};

export default WorkFlow;