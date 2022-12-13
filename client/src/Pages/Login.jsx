import React, { useState } from 'react'
import cafe from '../images/cafe.jpg'
import {AiOutlineEye, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signin } from '../actions/userActions.js'
import { useNavigate } from "react-router-dom";

const Login = ({history}) => {
    const initialFormData = {
        email: '',
        password: '',
    }

    const userState = useSelector(state => state.user)
    const { error } = userState
    const [form, setForm] = useState(initialFormData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
  return (
    <div className='flex h-screen'>
        <img className='w-3/5 h-full' src={cafe} alt="cafe" />
        <div className='bg-white w-full flex justify-center items-center'>
        <Link to='/'><AiOutlineClose size={30} className='absolute right-5 top-5 text-gray-500' /></Link>
            <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(login) {
                    dispatch(signin(form, history))
                    setLogin()
                    setTimeout(()=>{
                        navigate('/admin')
                    },800)
                }
                
            }}>
                <h1 className='text-4xl text-txt-c1 font-bold text-center'>Shop<span className='text-txt-c2'>View</span></h1>
                <div className='grid gap-y-4 mt-10'>
                    <div>
                        <h2 className='text-black font-medium'>Email</h2>
                        <input type='text' onChange={(e) => setForm({...form, email: e.target.value})} className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your email' />
                    </div>
                    <div>
                        <h2 className='text-black font-medium'>Password</h2>
                        <div className='relative'>
                            <input type='password' onChange={(e) => setForm({...form, password: e.target.value})} className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your password' /> 
                            <AiOutlineEye className='right-2 absolute top-3 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <button type='submit' className='bg-txt-c1 text-white w-full h-10 text-center rounded-md'>Login</button>
                    <h2 className='text-center font-bold text-base my-4'>Or</h2>
                    <Link to='/register'><button className='bg-txt-c2 text-white w-full h-10 text-center rounded-md'>Register</button></Link>
                </div>
                {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login