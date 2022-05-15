import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Loading, RoleHeader } from '../../../components'
import { getAllAccommodation } from '../../../services/accomodation.services'
import { useAppContext } from '../../../context/AppContext'
const Receptionist = () => {
  const { state, dispatch } = useAppContext()
  const { isLoading, accomodationList } = state
  useEffect(async () => {
    dispatch({ type: 'ACCOMODATION_REQUEST' })
    const res = await getAllAccommodation()

    if (res.success) {
      setTimeout(() => {
        dispatch({ type: 'ACCOMODATION_SUCCESS', value: res.data })
      }, 500)
    } else {
      dispatch({ type: 'ACCOMODATION_ERROR' })
    }
  }, [])
  return (
    <>
      <Head>
        <title>Receptionist Book | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="book" role="receptionist" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto mb-auto max-w-container">
          {accomodationList.length > 0 ? (
            <div className="mx-2 my-2 mb-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {accomodationList &&
                accomodationList.map(({ name, details, price, _id }, index) => (
                  <div className="p-4" key={index}>
                    <img
                      src="/pres_suite.jpg"
                      className=" h-80 rounded-lg object-cover drop-shadow-md"
                    />
                    <p className="pt-4 text-xl">{name}</p>
                    <div className="flex justify-between">
                      <p className="py-3">&#8369; {price}</p>
                      <Link href={`/receptionist/book/${_id}`}>
                        <button className="bg-emerald-500 py-1 px-4 text-white transition-all duration-150 hover:rounded-lg">
                          Book Now
                        </button>
                      </Link>
                    </div>
                    <p className="py-4 text-gray-700">{details}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="mb-auto  flex min-h-card items-center justify-center">
              <p className="w-full text-center text-xl ">
                Sorry but there is no available room for now! Please try again
                later.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Receptionist
