import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { AdminMain } from '../../components'
import { cancellationReports } from '../../services/receipt.services'

const Cancellation = () => {
  const [data, setData] = useState()
  useEffect(async () => {
    const { success, data } = await cancellationReports()
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
    {
      name: 'Reason',
      key: 'reason',
    },
  ]
  const data_items = [
    {
      id: '10001',
      reference: '00818237681',
      channel: 'Gcash',
      amount: '28000',
      reason: '1',
    },
    {
      id: '10002',
      reference: '87156781548787',
      channel: 'Bank Transfer',
      amount: '12000',
      reason: '2',
    },
  ]
  return (
    <>
      <Head>
        <title>Cancellation Reports | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminMain
        title="Cancellation Reports"
        data_headers={data_headers}
        data_items={data}
      />
    </>
  )
}

export default Cancellation
