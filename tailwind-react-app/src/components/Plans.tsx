import shopping_cart from '../assets/img/shopping_cart.png'
import shopping_cart1 from '../assets/img/shopping_cart1.png'
import offer from '../assets/img/offer.png'
export const Plans = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={shopping_cart} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Shopping</h2>
                    <p className='text-center text-4xl font-bold'>start from 149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Click here</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={shopping_cart1} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Collection</h2>
                    <p className='text-center text-4xl font-bold'>Women</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Click here</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={offer} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Explore Offer</h2>
                    <p className='text-center text-4xl font-bold'>start from 99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Click here</button>
                </div>
            </div>
        </div>
  );
};
