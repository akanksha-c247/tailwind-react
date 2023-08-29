import React from 'react'
import shopping from '../assets/img/shopping.jpg';
export const Expert = () => {
  return (
    <div className='p-2 max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={shopping} alt='' className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>online shopping</h1>
            <p className='my-2 text-justify'>"Welcome to our online store, where shopping becomes an immersive experience. Discover a world of convenience and endless choices right at your fingertips. Whether you're in search of the latest fashion trends, cutting-edge electronics, or home essentials, our curated collection has something for everyone. Browse through our user-friendly interface and effortlessly explore a diverse range of products. With secure payment options and swift delivery, your shopping journey is designed to be seamless. Say goodbye to long queues and crowded aisles – embrace the future of shopping with us."</p>
            <button className='w-[30%] bg-black text-white p-3 rounded'>Shop Now</button>        
        </div>
    </div>
  )
}
