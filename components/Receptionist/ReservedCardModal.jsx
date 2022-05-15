import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import moment from 'moment'
import ModalLayout from '../Layout/ModalLayout'
import { getReservationById } from '../../services/reservation.services'
const ReservedCardModal = ({ data, setModal }) => {
  const [selectedData, setSelectedData] = useState()
  useEffect(async () => {
    console.log(data)
    const res = await getReservationById(data)
    if (res.success) {
      setSelectedData(res.data)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Reserved List | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-full max-w-container">
        {selectedData &&
          selectedData?.map(
            (
              {
                _id,
                name,
                checkIn,
                checkOut,
                roomType,
                preferredRoom,
                noOfExtraBed,
                noOfChildren,
                noOfGuest,
                noOfAdult,
                voucherCode,
                remarks,
                purposeOfStay,
              },
              index
            ) => (
              <>
                <ModalLayout>
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <div>
                      <p className="p-2 text-lg font-semibold">{roomType}</p>
                      <img
                        src="/pres_suite.jpg"
                        className="w-50 h-60 rounded-lg object-cover drop-shadow-md lg:h-40"
                      />
                    </div>
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2 ">
                      <div className="p-2 text-slate-600">
                        <p className="pt-1 text-lg font-semibold text-slate-900">
                          {data?.name}
                        </p>
                        <p className="pt-1 text-lg font-semibold text-emerald-500">
                          Room #{preferredRoom}
                        </p>
                        <p>Check-in: {moment(checkIn).format('MMM DD YYYY')}</p>
                        <p>
                          Check-out: {moment(checkOut).format('MMM DD YYYY')}
                        </p>
                        <p>No of Guests: {noOfGuest}</p>
                        <p>Adult: {noOfAdult}</p>
                        <p>Children: {noOfChildren}</p>
                      </div>
                      <div className="p-2 text-slate-600">
                        <p>No of extra beds: {noOfExtraBed}</p>
                        <p>Voucher: {voucherCode}</p>
                        <p>Purpose of Stay: {purposeOfStay}</p>
                        <p>Remarks: {remarks}</p>
                      </div>
                    </div>
                  </div>
                  <p className="p-2 text-lg">Balance: 13,000</p>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => setModal(false)}
                      className="rounded-md bg-slate-300 px-4 py-2"
                    >
                      Go Back
                    </button>
                    <div className="flex gap-4">
                      <button className="rounded-md bg-emerald-500 px-4 py-2 text-white">
                        Pay
                      </button>
                      <button className="rounded-md bg-slate-900 px-4 py-2 text-white">
                        Check-in
                      </button>
                    </div>
                  </div>
                </ModalLayout>
              </>
            )
          )}
      </div>
    </>
  )
}

export default ReservedCardModal
