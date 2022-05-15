import React from 'react'
import Head from 'next/head'
import { AdminMain, AdminSidebar } from '../../components'

const Rooms = () => {
  const data_headers = [
    {
      name: 'ID No#',
      key: 'id',
    },
    {
      name: 'Name',
      key: 'name',
    },
    {
      name: 'No',
      key: 'no',
    },
    {
      name: 'Floor',
      key: 'floor',
    },
    {
      name: 'Rate',
      key: 'rate',
    },
  ]
  const data_items = [
    {
      id: '10001',
      name: 'Presidential Suite',
      no: '201-207',
      floor: '2nd floor',
      rate: '12,000',
    },
    {
      id: '10002',
      name: 'Standard Suite',
      no: '301-307',
      floor: '3nd floor',
      rate: '2,000',
    },
  ]
  return (
    <>
      <Head>
        <title>Rooms | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Rooms"
        data_headers={data_headers}
        data_items={data_items}
      />
    </>
  )
}

export default Rooms
