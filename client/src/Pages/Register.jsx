import React, {useState} from 'react'
import cafe from '../images/cafe.jpg'
import {AiOutlineEye, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signup } from '../actions/userActions.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Register = ({history}) => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const userState = useSelector(state => state.user)
    const { error } = userState
    const [form, setForm] = useState(initialFormData)
    const dispatch = useDispatch()
    const MySwal = withReactContent(Swal)
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

  return (

    <div className='flex h-screen'>
        <img className='w-3/5 h-full' src={cafe} alt="cafe" />
        <div className='bg-white w-full flex justify-center items-center'>
        <Link to='/'><AiOutlineClose size={30} className='absolute right-5 top-5 text-gray-500' /></Link>
            <div>
                <h1 className='text-4xl text-txt-c1 font-bold text-center'>Shop<span className='text-txt-c2'>View</span></h1>
                <form onSubmit={(e) => {
                        e.preventDefault()
                            dispatch(signup(form, history))
                            Toast.fire({
                                icon: 'success',
                                title: 'Kayıt İşlemi Başarıyla Tamamlanmıştır'
                              })
                            
                    }}>
                <div className='grid gap-y-4 mt-10'>
                    <div>
                        <h2 className='text-black font-medium'>First Name</h2>
                        <input type='text' className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your first name' onChange={(e) => setForm({...form, firstName: e.target.value})} />
                    </div>
                    <div>
                        <h2 className='text-black font-medium'>Last Name</h2>
                        <input type='text' className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your last name' onChange={(e) => setForm({...form, lastName: e.target.value})} />
                    </div>
                    <div>
                        <h2 className='text-black font-medium'>Email</h2>
                        <input type='text' className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your email' onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>
                    <div>
                        <h2 className='text-black font-medium'>Password</h2>
                        <div className='relative'>
                            <input type='password' className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your password' onChange={(e) => setForm({...form, password: e.target.value})} /> 
                            <AiOutlineEye className='right-2 absolute top-3 cursor-pointer' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-black font-medium'>Confirm Password</h2>
                        <div className='relative'>
                            <input type='password' className='bg-gray-200 w-72 h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter your password' onChange={(e) => setForm({...form, confirmPassword: e.target.value})} /> 
                            <AiOutlineEye className='right-2 absolute top-3 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <button type='submit' className='bg-txt-c2 text-white w-full h-10 text-center rounded-md'>Register</button>
                    <h2 className='text-center font-bold text-base my-4'>Or</h2>
                    <button  className='bg-txt-c1 text-white w-full h-10 text-center rounded-md'>Login</button>
                    {error && <div>{error}</div>}
                </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register