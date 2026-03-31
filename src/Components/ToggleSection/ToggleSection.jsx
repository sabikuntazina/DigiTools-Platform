import React from 'react';

const ToggleSection = ({toggle,setToggle,carts}) => {
    return (
      <div className="lg:max-w-7xl lg:mx-auto ">
       <div className='flex justify-center  items-center mt-10 space-x-0'>
         <button onClick={()=>setToggle(true)} className={`btn text-xl rounded-l-full py-6 px-4 shadow-2xl ${toggle &&'bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white rounded-r-full '} font-semibold`}>Products</button>
        <button onClick={()=>setToggle(false)}  className={`btn text-xl rounded-r-full py-6 px-4 shadow-2xl ${toggle===false &&'bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white rounded-l-full'} font-semibold`}>Cart({carts.length})</button>
       </div>
      </div>
    );
};

export default ToggleSection;
// {selectedPlayer.length}