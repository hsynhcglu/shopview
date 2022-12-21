import React from 'react'
import cafe from '../images/cafe2.jpg'
import profile from '../images/detailphoto.jpg'
import Header from '../components/Header'

const ShopDetail = () => {
  return (
    <>
        <Header />
        <div className='container mx-auto'>
            <div className='w-full h-96'>
                <img className='w-full h-full rounded-md' src={cafe} alt="cafe" />
            </div>
            <div className='w-full flex px-16'>
                <div className='w-96 rounded-md bg-white h-auto -mt-44 px-4'>
                    <div className='w-full flex justify-center -mt-16'>
                        <img className='w-32 h-32 rounded-full object-fill' src={profile} alt="profile"/>
                    </div>
                    <div className='w-full flex justify-center'>
                        <a href='https://www.google.com' className='mt-6 px-10 py-4 bg-txt-c2 text-white rounded-md text-sm'>Website</a>
                    </div>
                    <hr className='h-[1px] bg-gray-200 w-full px-10 mt-10' />
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopDetail