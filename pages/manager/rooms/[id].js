import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { RoleHeader } from '../../../components'
import { BackSvg } from '../../../components/Svg'
const Room = () => {
  const router = useRouter()
  const active = router.pathname.split('/')[1]
  const data = [201, 202, 203, 204, 205, 206, 207, 208]
  return (
    <>
      <Head>
        <title>Manager Rooms | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="room" role="manager" />
      <div className="mx-auto w-full max-w-container p-4">
        <div className="mb-2 flex items-center">
          <button onClick={() => router.back()}>
            <BackSvg />
          </button>
          <h1 className=" py-2 px-4 text-2xl text-slate-900">Standard Suite</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {data &&
            data.map((name, index) => (
              <div className="p-4" key={index}>
                <div className=" w-50 h-40">
                  <img
                    src="/pres_suite.jpg"
                    className="h-full w-full rounded-lg object-cover drop-shadow-md"
                  />
                </div>
                <p className="py-2 pt-4 text-center text-xl">{name}</p>
                <p className="text-center">
                  <Link
                    href={
                      active !== 'housekeeping'
                        ? `/manager/room/${name}`
                        : `/housekeeping/room/${name}`
                    }
                  >
                    <button className="rounded-md bg-emerald-500 py-3 px-4 text-white transition-all duration-150 hover:rounded-lg">
                      View Room
                    </button>
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Room
