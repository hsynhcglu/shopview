import React from 'react'
import profile from '../images/profile.png'
import {MdOutlineDashboard} from 'react-icons/md'
import {BsShop} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'

const AdminHome = () => {
  return (
    <div className='flex'>
        <div className='w-[15%] h-screen'>
            <h1 className='text-2xl text-txt-c1 font-bold text-center mt-4'>Shop<span className='text-txt-c2'>View</span></h1>
            <div className='grid w-full justify-center'>
                <img className='w-32 h-32 rounded-full mt-10' src={profile} alt="profile"/>
                <h2 className='text-xl font-medium text-gray-700 text-center mt-4'>Hüseyin H.</h2>
                <span className='text-gray-400 text-center'>Admin</span>
            </div>
            <nav className='mt-20 w-full justify-center flex'>
              <ul className='grid gap-y-4'>
                <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                  <MdOutlineDashboard className='mr-2' />Dashboard
                </li>
                <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                  <BsShop className='mr-2' />Shop Settings
                </li>
                <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                  <BiUser className='mr-2' />User Settings
                </li>
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default AdminHome