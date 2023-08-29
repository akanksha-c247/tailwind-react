import React from 'react'
import Typed from 'react-typed';
export const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50]'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[20px]'>
                Make your Design Exclusive 
            </div>
            <h2 className='text-white text-3xl md:text-[40px] md:p-[20px]'>Let's Personalize your Experience</h2>
            <div className='text-[20px] md:text-[50px]  md:p-[20px] text-white'> 
                Shop
                <Typed
                className='pl-3'
                strings={['Ethnic Wear','Western Wear','Jewelry','bags']}
                typeSpeed={100}
                loop={true}
                backSpeed={50}
                />
            </div>
            <button className='bg-black text-white p-3 rounded'>Shop Now</button>        
        </div>
    </div>
  )
}
