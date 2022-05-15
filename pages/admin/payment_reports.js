import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AdminMain } from '../../components'
import { paymentReports } from '../../services/receipt.services'

const Payment = () => {
  const [data, setData] = useState()
  useEffect(async () => {
    const { success, data } = await paymentReports()
    if (success) {
      setData(data)
    }
  }, [])
  const data_headers = [
    {
      name: 'ID No#',
      key: '_id',
    },
    {
      name: 'Reference No.',
      key: '_id',
    },
    {
      name: 'Channel',
      key: 'channel',
    },
    {
      name: 'Amount',
      key: 'total',
    },
  ]
  const data_items = [
    {
      id: '10001',
      reference: '00818237681',
      channel: 'Gcash',
      amount: '28000',
    },
    {
      id: '10002',
      reference: '87156781548787',
      channel: 'Bank Transfer',
      amount: '12000',
    },
  ]
  return (
    <>
      <Head>
        <title>Payment Reports | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Payment Reports"
        data_headers={data_headers}
        data_items={data}
      />
    </>
  )
}

export default Payment
