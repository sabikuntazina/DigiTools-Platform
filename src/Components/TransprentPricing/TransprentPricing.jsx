import React from 'react';
import TransparentPricingCard from './TransparentPricingCard';
const pricingPlans = [
  {
    id: 1,
    planName: "Starter",
    price: 0,
    billing: "Month",
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Basic templates",
      "Community support",
      "Community support",
      "1 project per month"
    ],
    buttonText: "Get Started Free"
  },
  {
    id: 2,
    planName: "Pro",
    price: 29,
    billing: "Month",
    description: "Best for professionals",
    tag: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    buttonText: "Start Pro Trial"
  },
  {
    id: 3,
    planName: "Enterprise",
    price: 99,
    billing: "Month",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    buttonText: "Contact Sales"
  }
];

const TransprentPricing = () => {
    return (
        <div className='lg:max-w-7xl lg:mx-auto space-y-5 my-20'>
            <h1 className='text-center text-3xl leading-relaxed md:text-5xl font-bold'>Simple, Transparent Pricing</h1>
            <p className='text-center text-xl  md:text-2xl font-semibold text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
           <div className='grid md:grid-cols-3  place-items-center'>
             {
                pricingPlans.map(price=><TransparentPricingCard key={price.id} price={price}></TransparentPricingCard>)
            }
           </div>
        </div>
    );
};

export default TransprentPricing;