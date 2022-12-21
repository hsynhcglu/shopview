import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const [user, setUser] = useState()

  useEffect(() => {
    if (localStorage.getItem('user') && !user) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }

  }, [location, user])

  return (
    <div>
      <nav className="bg-white-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex">
              <h2 className='text-xl text-txt-c1 font-bold'>Shop<span className='text-txt-c2'>View</span></h2>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                  <Link to='/' className="text-black-300 hover:bg-txt-c1 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</Link>
                  <Link to='/shops' className="text-black-300 hover:bg-txt-c1 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Shops</Link>
                  <Link to='/shops'  className="text-black-300 hover:bg-txt-c1 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About</Link>
                  <Link to='/shops' className="text-black-300 hover:bg-txt-c1 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Contact</Link>
              </div>
            </div>
            <div>
              {
                user ? (
                  <Link to='/admin'><button className='bg-txt-c1 text-white w-52 h-10 text-center rounded-md'>Admin Panel</button></Link>
                ) :
                  (
                    <Link to='/login'><button className='bg-txt-c1 text-white w-52 h-10 text-center rounded-md'>Login</button></Link>
                  )
              }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

      </nav>
    </div>
    // <header className='flex container mx-auto h-32 items-center justify-around'>
    //     <div>
    //       <Link to='/'><h1 className='text-4xl text-txt-c1 font-bold'>Shop<span className='text-txt-c2'>View</span></h1></Link>
    //     </div>
    //     <ul className='flex justify-around w-full'>
    //         <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'><Link to='/'>Home</Link></li>
    //         <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'><Link to='/shops'>Shops</Link></li>
    //         <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'>About</li>
    //         <li className='text-2xl hover:text-txt-c1 transition-all cursor-pointer'>Contact</li>
    //     </ul>
    //     <div>
    //       {
    //         user ? (
    //           <Link to='/admin'><button className='bg-txt-c1 text-white w-52 h-10 text-center rounded-md'>Admin Panel</button></Link>
    //         ):
    //         (
    //           <Link to='/login'><button className='bg-txt-c1 text-white w-52 h-10 text-center rounded-md'>Login</button></Link>
    //         )
    //       }
    //     </div>
    // </header>
  )
}

export default Header