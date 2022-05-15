import React from 'react'
import Head from 'next/head'
import { AdminMain, AdminSidebar } from '../../components'

const Supervisor = () => {
  const data_headers = [
    {
      name: 'ID No#',
      key: 'id',
    },
    {
      name: 'Email',
      key: 'email',
    },
    {
      name: 'Name',
      key: 'name',
    },
    {
      name: 'Sector',
      key: 'sector',
    },
    {
      name: 'Number',
      key: 'number',
    },
    {
      name: 'Shift',
      key: 'shift',
    },
  ]
  const data_items = [
    {
      id: '10001',
      email: 'johndow@gmail.com',
      name: 'John Doe',
      sector: 'Housekeeping',
      number: '89',
      shift: 'Morning',
    },
    {
      id: '10002',
      email: 'steveharve@gmail.com ',
      name: 'Steve Harvey',
      sector: 'Housekeeping',
      number: '90',
      shift: 'Night',
    },
  ]
  return (
    <>
      <Head>
        <title>Supervisor | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Supervisor"
        data_headers={data_headers}
        data_items={data_items}
      />
    </>
  )
}

export default Supervisor
