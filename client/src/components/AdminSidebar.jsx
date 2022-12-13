import React, {useState, useEffect} from 'react'
import profile from '../images/profile.png'
import {MdOutlineDashboard, MdExitToApp} from 'react-icons/md'
import {BsShop} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Logout } from '../actions/userActions.js'

const AdminSidebar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState()

  const exit = async(id) => {
    await dispatch(Logout(id))
    setUser(null)
    navigate('/')
  }

  useEffect(()=> {
    if(localStorage.getItem('user') && !user){
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [location, user])

  return (
    <div className='w-[15%] h-screen relative'>
            <h1 className='text-2xl text-txt-c1 font-bold text-center mt-4'>Shop<span className='text-txt-c2'>View</span></h1>
            <div className='grid w-full justify-center'>
                <img className='w-32 h-32 rounded-full mt-10' src={profile} alt="profile"/>
                <h2 className='text-xl font-medium text-gray-700 text-center mt-4'>Hüseyin H.</h2>
                <span className='text-gray-400 text-center'>Admin</span>
            </div>
            <nav className='mt-20 w-full justify-center flex'>
              <ul className='grid gap-y-4'>
                <Link to='/admin/dashboard'>
                    <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                    <MdOutlineDashboard className='mr-2' />Dashboard
                    </li>
                </Link>
                <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                  <BsShop className='mr-2' />Shop Settings
                </li>
                <li className='font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c2 hover:text-white'>
                  <BiUser className='mr-2' />User Settings
                </li>
              </ul>
            </nav>
            <div className='p-4 absolute bottom-0 w-full'>
                <button onClick={(e) => {exit(user.user._id)}}>
                    <h1 className='text-center font-regular text-gray-600 flex items-center text-xl px-12 py-2 rounded-md cursor-pointer transition-all hover:bg-txt-c1 hover:text-white'>
                        <MdExitToApp className='mr-2' /> Logout
                    </h1>
                </button>
            </div>
        </div>
  )
}

export default AdminSidebar