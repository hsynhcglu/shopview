import React from 'react'
import cafe from '../images/cafe.jpg'
import {AiOutlineAmazon, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='container mx-auto'>
            <div className='relative flex items-center justify-center'>
                <h1 className='text-white text-7xl absolute italic'>Welcome to ShopView!</h1>
                <img className='w-full h-[550px]' src={cafe} alt="cafe" />
            </div>
        </div>
        <div className='bg-txt-c1 h-40 bottom-0 absolute w-full'>
            <div className='container mx-auto flex items-center justify-center h-28'>
                <AiOutlineAmazon size={65} className="text-white" />
                <AiOutlineFacebook size={65} className="text-white" />
                <AiOutlineTwitter size={65} className="text-white" />
            </div>
        </div>
    </>
  )
}

export default Home