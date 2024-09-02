import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
    <section>
      id='Home'
      className="w-full flex xl:flex-row flex-col justify-centermin-h-screen gap-10 max-contaniner"
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
          
          <p className='tex-xl font-montserrat text-coral-red'>
            Our summer coolections
          </p>

          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              Teh New Arrival
            </span><br />
            
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>

          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Dicover stylish Nile arrivals, quality comfort,
            and innovation for your active life.
          </p>

          {/*<Button />*/}
        
        </div>
    </section>
  );
};

export default Hero