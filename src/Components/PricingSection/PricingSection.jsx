import React, { use } from 'react';
import PricingCard from './PricingCard';
import ToggleSection from '../ToggleSection/ToggleSection';


const PricingSection = ({pricePromise,addCarts,toggle,removeCarts}) => {
    const priceData=use(pricePromise);
    // console.log(priceData)
    return (
        <div  className='lg:max-w-7xl lg:mx-auto space-y-5 my-20'>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3  place-items-center'>
             {
            priceData.map(price=> <PricingCard price={price} addCarts={addCarts} toggle={toggle} removeCarts={removeCarts}></PricingCard>)
           }
          </div>
        </div>
    );
};

export default PricingSection;