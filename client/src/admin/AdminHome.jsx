import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from './AdminDashboard';

const AdminHome = () => {
  return (
    <>
      <div className='flex'>
          <AdminSidebar />
          <div className='h-screen w-[85%]'>
            <AdminHeader />
            <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
      </div>
      
    </>
    
  )
}

export default AdminHome