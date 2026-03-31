import React from 'react';
import step1Img from '../../assets/user.png'
import step2Img from '../../assets/package.png'
import step3Img from '../../assets/rocket.png'
import StepsCard from './StepsCard';

const steps = [
  {
    id: 1,
    title: "Create Account",
    img: step1Img,
    description: "Sign up for free in seconds. No credit card required to get started."
  },
  {
    id: 2,
    title: "Choose Products",
    img:step2Img,
    description: "Browse our catalog and select the tools that fit your needs."
  },
  {
    id: 3,
    title: "Start Creating",
    img:step3Img,
    description: "Download and start using your premium tools immediately."
  }
];

const Steps = () => {
    return (
      <div className='bg-[#F9FAFC] p-10'>

    <div className='max-w-7xl mx-auto my-10 '>
         <div className='grid md:grid-cols-3 gap-4 place-items-center'>
          {
            steps.map(step=><StepsCard key={step.id} step={step}></StepsCard>)
       }
     </div>
    </div>
      </div>
    );
};

export default Steps;