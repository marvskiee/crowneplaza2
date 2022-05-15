import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminTable from './AdminTable'

const AdminMain = ({ title, data_headers, data_items }) => {
  const [nav, setNav] = useState(false)
  return (
    <div className={`flex min-h-screen ${nav ? 'overflow-hidden' : ''}`}>
      <AdminSidebar nav={nav} />
      <div className="w-full p-4 lg:p-10">
        <AdminHeader title={title} nav={nav} setNav={setNav} />
        <AdminTable data_headers={data_headers} data_items={data_items} />
      </div>
    </div>
  )
}

export default AdminMain
