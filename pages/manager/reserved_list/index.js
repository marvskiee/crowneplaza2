import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { reservationReports } from '../../../services/reservation.services'
import { ReservedCardModal, RoleHeader } from '../../../components'
import moment from 'moment'
const ReservedList = () => {
  const selectedData = useRef()

  const [data, setData] = useState()
  const [modal, setModal] = useState(false)
  const mounted = useRef()

  useEffect(() => {
    const load = async () => {
      const { success, data } = await reservationReports()
      if (success) {
        setData(data)
      }
      mounted.current = true
    }
    if (!mounted.current) {
      load()
    }
    console.log(modal)
  })
  // const selectedData = [
  //   {
  //     _id: '10001',
  //     name: 'John Doe',
  //     checkIn: '03/20/2022',
  //     checkOut: '03/21/2022',
  //     preferredRoom: 100,
  //     roomType: 'Standard',
  //     roomNo: '201',
  //     noOfExtraBed: 1,
  //     voucherCode: 'None',
  //   },
  // ]
  return (
    <>
      <Head>
        <title>Manager Reserved List | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="reserved_list" role="manager" />
      <div className="mx-auto w-full max-w-container p-4 ">
        <input
          className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
          type="text"
          placeholder="Search Name"
        />
        <div className="mt-5 grid  grid-cols-1 gap-6 lg:grid-cols-2">
          {data &&
            data.map(
              (
                { name, roomType, checkIn, checkOut, preferredRoom, _id },
                index
              ) => (
                <div className="flex flex-col gap-4 lg:flex-row">
                  <img
                    src="/pres_suite.jpg"
                    className="w-50 h-60 rounded-lg object-cover drop-shadow-md lg:h-40"
                  />
                  <div>
                    <p className="pt-1">{roomType}</p>
                    <p className="pt-1">{name}</p>
                    <div>
                      <p className="pb-1 text-slate-500">
                        Check-in: {moment(checkIn).format('MMM DD, YYYY')}
                      </p>
                      <p className="pb-1 text-slate-500">
                        Check-out: {moment(checkOut).format('MMM DD, YYYY')}
                      </p>
                    </div>
                    <p className="pb-1">Room {preferredRoom}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          selectedData.current = _id
                          setModal(!modal)
                        }}
                        className="rounded-md bg-slate-200 px-4 py-2 "
                      >
                        View
                      </button>
                      <button className="rounded-md bg-emerald-500 px-4 py-2 text-white">
                        Check-out
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
      {modal ? (
        <ReservedCardModal data={selectedData.current} setModal={setModal} />
      ) : (
        <></>
      )}
    </>
  )
}

export default ReservedList
