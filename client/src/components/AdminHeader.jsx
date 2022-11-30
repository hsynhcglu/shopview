import React from 'react'

const AdminHeader = () => {
  return (
    <div className='flex items-center h-16 px-5 border-l border-solid border-gray-200 justify-between'>
        <h1 className='text-xl font-medium text-gray-600'>Dashboard</h1>
        <h2 className='text-gray-600 text-sm italic'>Version 0.1</h2>
    </div>
  )
}

export default AdminHeader