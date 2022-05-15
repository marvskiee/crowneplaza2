import React from 'react'
import Head from 'next/head'
import { RoleHeader } from '../../components'
import Maintenance from '../../components/Layout/Maintenance'

const Calendar = () => {
  return (
    <>
      <Head>
        <title>Housekeeping Calendar | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="calendar" role="housekeeping" />
      <div className="mx-auto w-full max-w-container p-4">
        <Maintenance />
      </div>
    </>
  )
}

export default Calendar
