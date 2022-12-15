import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from './AdminDashboard';
import AdminStore from './AdminStore';

const AdminHome = () => {
  return (
    <>
      <div className='flex'>
          <AdminSidebar />
          <div className='h-screen w-[85%]'>
            <AdminHeader />
            <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/store" element={<AdminStore />} />
            </Routes>
          </div>
      </div>
      
    </>
    
  )
}

export default AdminHome