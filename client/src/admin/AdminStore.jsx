import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createStore } from '../actions/storeActions.js'

const AdminStore = ({history}) => {
    
    const initialFormData = {
        storeName: '',
        storePhone: '',
        storeMail: '',
        storeAddress: '',
        storeDescription: '',
        storeWorkingHour: '',
        storeWebsite: '',
    }
    const storeState = useSelector(state => state.store)
    const { error } = storeState
    const [form, setForm] = useState(initialFormData)
    const dispatch = useDispatch()

  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(createStore(form, history))
        }}>
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Name' onChange={(e) => setForm({...form, storeName: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Phone' onChange={(e) => setForm({...form, storePhone: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Mail Address' onChange={(e) => setForm({...form, storeMail: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Address' onChange={(e) => setForm({...form, storeAddress: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Working Hours' onChange={(e) => setForm({...form, storeWorkingHour: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Website' onChange={(e) => setForm({...form, storeWebsite: e.target.value})} />
            <input type='text' className='bg-gray-200 w-full h-10 rounded-md pl-4 placeholder:text-gray-500 placeholder:text-sm' placeholder='Enter Store Description' onChange={(e) => setForm({...form, storeDescription: e.target.value})} />
            <button type='submit'>Save</button>
            {error && <div>{error}</div>}
        </form>
    </div>
  )
}

export default AdminStore