import React from 'react'
import Head from 'next/head'
import { AdminMain, AdminSidebar } from '../../components'

const Guests = () => {
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
      name: 'Username',
      key: 'username',
    },
    {
      name: 'Name',
      key: 'name',
    },
    {
      name: 'Number',
      key: 'number',
    },
  ]
  const data_items = [
    {
      id: '10001',
      email: 'johndow@gmail.com',
      name: 'John Doe',
      number: '89',
      username: '@johndoe',
    },
    {
      id: '10002',
      email: 'steveharve@gmail.com ',
      name: 'Steve Harvey',
      number: '90',
      username: '@steveHarvey',
    },
  ]
  return (
    <>
      <Head>
        <title>Guests | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Guests"
        data_headers={data_headers}
        data_items={data_items}
      />
    </>
  )
}

export default Guests
