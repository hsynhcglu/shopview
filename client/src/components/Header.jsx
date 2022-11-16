import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex container mx-auto h-32 items-center justify-around'>
        <div>
            <h1 className='text-4xl text-txt-c1 font-bold'>Shop<span className='text-txt-c2'>View</span></h1>
        </div>
        <ul className='flex justify-around w-full'>
            <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'>Shops</li>
            <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'>About</li>
            <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'>Contact</li>
        </ul>
        <div>
            <button className='bg-txt-c1 text-white w-52 h-10 text-center rounded-md'><Link to='/login'>Login</Link></button>
        </div>
    </header>
  )
}

export default Header