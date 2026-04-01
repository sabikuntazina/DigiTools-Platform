import React from 'react';

const SingleSelectedCard = ({cart,removeCarts}) => {
    return (
             <div className='bg-gray-200/30 rounded-2xl shadow-sm border-none' >
            <div className="flex justify-between items-center p-4 max-w-sm md:max-w-6xl mt-2">
  <div className="flex justify-between items-center gap-4">
   <h2 className="md:w-15 md:h-15 rounded-full border shadow-xl flex justify-center items-center md:text-4xl font-bold">
            {cart.icon}
          </h2>
    <div>
         <h2 className="card-title">
                {cart.name}
              </h2>
              <h2 className="text-lg text-gray-400 ">
                ${cart.price}

              </h2>
    </div>
  </div>
  <div>
    <button onClick={()=>removeCarts(cart)} className="btn rounded-full text-red-600">
      Remove
    </button>
  </div>
</div>

        </div>
    );
};

export default SingleSelectedCard;
// onClick={()=>handleFilter(selected)}