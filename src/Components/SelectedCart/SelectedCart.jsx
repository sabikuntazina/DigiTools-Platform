import React from 'react';
import SingleSelectedCard from './SingleSelectedCard';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';

const SelectedCart = ({carts,removeCarts,setCarts}) => {
    let total= 0
    carts.map(cart=>total=total+cart.price)
    const handlePayment=()=>{
      setCarts([]);
      toast.success("Payment is Done")
    }
    
    return (
        <div className='lg:max-w-7xl lg:mx-auto my-20 shadow-2xl p-15 shadow-2xl rounded-2xl'>
             <h1 className='text-3xl font-bold mb-10'>Your Cart</h1>
          {
            carts.length==0 ? <div className='flex flex-col justify-center items-center gap-4  '>
                <CiShoppingCart className='text-8xl'></CiShoppingCart>
                <h2 className='text-2xl text-gray-500 font-bold'>Your Cart is empty</h2>
            </div>
            
            :<div className='space-y-5 '>
           
           <div className='space-y-6 '>
              {
            carts.map(cart=><SingleSelectedCard cart={cart} removeCarts={removeCarts}></SingleSelectedCard> )
           }
           </div>
          <div className='flex justify-between items-center px-8 py-4  mt-2 bg-gray-200/30 rounded-2xl shadow-sm border-none'>
             <h2 className='text-xl font-bold'>Total</h2>
           <h2 className='text-xl font-bold'>${total}</h2>
          </div>
          <button onClick={handlePayment} className='btn rounded-full bg-linear-to-bl from-violet-500 to-[#4F39F6] text-xl font-bold text-white w-full px-5 py-8'>Proceed to Checkout</button>
          </div>
          }
        </div>
    );
};

export default SelectedCart;