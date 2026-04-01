import React from 'react';

const StepsCard = ({step}) => {
    return (
       <div className="card w-full md:w-96 bg-base-100 shadow-sm md:py-10 rounded-3xl  place-items-center  hover:scale-100 hover:shadow-xl 
                transition duration-300">
            <div className='flex justify-end items-end absolute top-2 right-3 '>
                <div className='w-10 h-10 bg-linear-to-bl from-violet-500 to-[#4F39F6] text-lg font-extrabold text-white rounded-full flex justify-center items-center' >0{step.id}</div>
            </div>
  <div className='flex justify-center items-center'>
    <figure className="rounded-full bg-[#f1e9fe] w-30 h-30 md:w-50 md:h-50 ">
    <img 
      src={step.img}
      className="flex justify-center items-center w-[30%] md:w-[50%]" />
  </figure>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl md:text-4xl font-bold my-3">{step.title}</h2>
    <p className='md:text-lg text-gray-500'>{step.description}</p>
  </div>
</div>
    );
};

export default StepsCard;