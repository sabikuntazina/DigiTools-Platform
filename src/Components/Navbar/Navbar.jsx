import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({carts}) => {
    return (
 <div className=" bg-base-100 shadow-sm ">
    <div className='navbar lg:max-w-7xl lg:mx-auto'>
          <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 shadow">
            <li className='text-lg flex items-center font-semibold'><a>Products</a></li>
            <li className='text-lg flex items-center font-semibold'><a>Features</a></li>
            <li className='text-lg flex items-center font-semibold'><a>Pricing</a></li>
            <li className='text-lg flex items-center font-semibold'><a>Testimonials</a></li>
            <li className='text-lg flex items-center font-semibold'><a>FAQ</a></li>
      </ul>
    </div>
    <h1 className="text-[#4F39F6] font-extrabold text-xl md:text-4xl ">DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            <li className='text-lg font-semibold'><a>Products</a></li>
            <li className='text-lg font-semibold'><a>Features</a></li>
            <li className='text-lg font-semibold'><a>Pricing</a></li>
            <li className='text-lg font-semibold'><a>Testimonials</a></li>
            <li className='text-lg font-semibold'><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-4 ">
    <div className="indicator mr-6 hidden md:flex">
 {
  carts.length>0 &&  <span className="indicator-item badge rounded-full badge-error text-white">{carts.length}</span>
 }
   <CiShoppingCart size={30} className=' text-2xl font-semibold'></CiShoppingCart>
</div>
  
    <button className='hidden md:flex text-lg font-semibold'>Login</button>
    <button className='btn rounded-full bg-linear-to-bl from-violet-500 to-[#4F39F6] text-lg font-semibold text-white'>Get Started</button>
  </div>
    </div>
</div>
    );
};

export default Navbar;