import React from 'react';

const StepsCard = ({step}) => {
    return (
       <div className="card bg-base-100 shadow-sm py-10 rounded-3xl  hover:scale-100 hover:shadow-xl 
                transition duration-300">
            <div className='flex justify-end mr-7'>
                <div className='w-10 h-10 bg-linear-to-bl from-violet-500 to-[#4F39F6] text-lg font-extrabold text-white rounded-full flex justify-center items-center' >01</div>
            </div>
  <div className='flex justify-center items-center'>
    <figure className="rounded-full bg-[#f1e9fe] w-50 h-50 ">
    <img 
      src={step.img}
      className="flex justify-center items-center w-[50%]" />
  </figure>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold my-3">{step.title}</h2>
    <p className='text-lg text-gray-500'>{step.description}</p>
  </div>
</div>
    );
};

export default StepsCard;