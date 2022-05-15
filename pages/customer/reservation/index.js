import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Footer, Header, Loading } from '../../../components'
import { useAppContext } from '../../../context/AppContext'
import { getAllReservation } from '../../../services/reservation.services'
import moment from 'moment'
const History = () => {
  const { state, dispatch } = useAppContext()
  const { isLoading, reservationList, access_id } = state
  useEffect(async () => {
    dispatch({ type: 'RESERVATION_HISTORY_REQUEST' })
    if (access_id) {
      const res = await getAllReservation(access_id)
      if (res.success) {
        setTimeout(() => {
          dispatch({ type: 'RESERVATION_HISTORY_SUCCESS', value: res.data })
        }, 500)
      }
    } else {
      dispatch({ type: 'RESERVATION_HISTORY_ERROR' })
    }
  }, [access_id])
  return (
    <>
      <Head>
        <title>Reservation History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active="reservation" />
      <div className="mx-auto mb-auto w-full  max-w-container">
        <div className="mb-auto px-9">
          <h1 className="mt-6 p-4 text-2xl text-slate-900">
            Reservation History
          </h1>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-4 p-4 lg:flex-row">
              <>
                {reservationList?.length == 0 ? (
                  <div className="w-full p-4">
                    <p className="text-center">No History</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {reservationList?.map(
                      (
                        {
                          _id,
                          checkIn,
                          checkOut,
                          noOfExtraBed,
                          noOfChildren,
                          noOfAdult,
                          accomodationName,
                          status,
                          total,
                        },
                        index
                      ) => (
                        <div
                          key={index}
                          className="flex flex-col md:flex-row md:items-center md:gap-4"
                        >
                          <div>
                            <img
                              src="/pres_suite.jpg"
                              className="h-80 w-80 rounded-lg object-cover drop-shadow-md"
                            />
                          </div>
                          <div className="py-4 md:p-4">
                            <div>
                              <p className="my-2 text-xl">{accomodationName}</p>
                              <p>
                                1 room,{' '}
                                {`${
                                  parseInt(noOfChildren) + parseInt(noOfAdult)
                                } people `}
                                ,
                                {noOfExtraBed > 0
                                  ? `${noOfExtraBed} extra bed`
                                  : 'no extra bed'}
                              </p>
                              <p className="my-2">
                                Check In:{' '}
                                {moment(checkIn).format('MMM DD YYYY')}
                              </p>
                              <p className="my-2">
                                Check Out:{' '}
                                {moment(checkOut).format('MMM DD YYYY')}
                              </p>
                              <p className="my-3 text-xl text-slate-900">
                                Total: &#8369; {total}
                              </p>
                            </div>
                            {status == 'Reserved' ? (
                              <div className="flex gap-4">
                                <p
                                  className="
                              my-2 
                            rounded-md bg-slate-200 px-4 py-2 capitalize text-slate-900  disabled:bg-slate-600"
                                >
                                  Status: Paid and Reserved
                                </p>
                                <Link
                                  href={`/customer/reservation/cancel/${_id}`}
                                >
                                  <button
                                    className="
                             my-2 rounded-md
                           bg-emerald-500 px-4 py-2 capitalize text-white  disabled:bg-slate-600"
                                  >
                                    Cancel Booking
                                  </button>
                                </Link>
                              </div>
                            ) : status == 'Not paid' ? (
                              <div className="flex gap-4">
                                <p
                                  className="
                              my-2 cursor-default
                              rounded-md bg-slate-200
                           px-4 py-2 text-center capitalize text-slate-900  disabled:bg-slate-600"
                                >
                                  Status: {status}
                                </p>
                                <Link href={`/customer/payment/${_id}`}>
                                  <button
                                    className="
                             my-2 rounded-md
                           bg-emerald-500 px-4 py-2 capitalize text-white  disabled:bg-slate-600"
                                  >
                                    Make a payment
                                  </button>
                                </Link>
                              </div>
                            ) : (
                              <button
                                className="
                              my-2 cursor-default
                              rounded-md bg-slate-200
                           px-4 py-2 text-center capitalize text-slate-900  disabled:bg-slate-600"
                              >
                                Status: {status}
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    )}
                    <div></div>
                    <p></p>
                  </div>
                )}
              </>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default History
