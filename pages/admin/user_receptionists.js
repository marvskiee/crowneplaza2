import React from 'react'
import Head from 'next/head'
import { AdminMain, AdminSidebar } from '../../components'

const Receptionists = () => {
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
      number: '89',
      shift: 'Morning',
    },
    {
      id: '10002',
      email: 'steveharve@gmail.com ',
      name: 'Steve Harvey',
      number: '90',
      shift: 'Night',
    },
  ]
  return (
    <>
      <Head>
        <title>Receptionists | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Receptionists"
        data_headers={data_headers}
        data_items={data_items}
      />
    </>
  )
}

export default Receptionists
