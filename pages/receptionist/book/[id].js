import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getOneAccommodation } from '../../../services/accomodation.services'
import { ConfirmReceiptModal, RoleHeader } from '../../../components'
import { useAppContext } from '../../../context/AppContext'
import { addReservation } from '../../../services/reservation.services'
import { useRouter } from 'next/router'
import { BackSvg } from '../../../components/Svg'

const Rooms = () => {
  const router = useRouter()
  let id = router.query.id
  const [data, setData] = useState()
  const { state, dispatch } = useAppContext()
  const dummyRooms = [1, 2, 3]
  const [success, setSuccess] = useState(false)

  const paymentHandler = async () => {
    if (!state.isAuth) {
      dispatch({ type: 'OPEN_LOGIN_MODAL' })
    } else {
      const newData = {
        name: `${state.user?.firstName} ${state.user?.lastName}`,
        roomType: data?.name,
        checkIn: checkInRef.current.value,
        checkOut: checkOutRef.current.value,
        noOfGuest: guestRef.current.value,
        noOfAdult: adultsRef.current.value,
        noOfChildren: childrenRef.current.value,
        noOfExtraBed: extraBeds,
        voucherCode: voucherCodeRef.current.value,
        purposeOfStay: purposeOfStayRef.current.value,
        remarks: remarksRef.current.value,
        user_id: state.user?._id,
        accomodation_id: id,
        status: 'Not paid',
        preferredRoom: roomRef.current.value,
        total: total,
      }
      console.log(newData)
      const res = await addReservation(newData)
      if (res.success) {
        setSuccess(false)
        router.push('/customer/payment/' + res.data._id)
      } else {
        setSuccess(true)
      }
    }
  }
  const checkInRef = useRef()
  const checkOutRef = useRef()
  const guestRef = useRef()
  const adultsRef = useRef()
  const childrenRef = useRef()
  const [extraBeds, setExtraBeds] = useState(0)
  const voucherCodeRef = useRef()
  const purposeOfStayRef = useRef()
  const remarksRef = useRef()
  const roomRef = useRef()
  const [total, setTotal] = useState(data?.price)
  const [modal, setModal] = useState()

  const mounted = useRef()
  useEffect(() => {
    const load = async () => {
      const { success, data } = await getOneAccommodation(id)
      if (success) {
        setTotal(data.price)
        setData(data)
      }
      if (id) {
        mounted.current = true
      }
    }
    if (!mounted.current) {
      load()
    }
  })
  return (
    <>
      <Head>
        <title>Receptionist Book | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="book" role="receptionist" />
      {modal == 'confirmation' && <ConfirmReceiptModal />}
      <div className="mx-auto mb-10 w-full max-w-container p-4">
        {data && (
          <>
            <div className="mb-2 flex items-center">
              <button onClick={() => router.back()}>
                <BackSvg />
              </button>
              <h1 className=" py-2 px-4 text-2xl text-slate-900">
                Reservation Form
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="p-4">
                <img
                  src="/pres_suite.jpg"
                  className="h-80 w-full rounded-lg object-cover drop-shadow-md"
                />
                <p className="pt-4 text-xl">{data?.name}</p>
                <p className="py-3">&#8369; {data?.price}</p>
                <p className="py-4 text-gray-700">{data?.details}</p>
                <p>
                  Note: Children 8 years old and below stays free bed with
                  adults.
                  <br />
                  Extra bed costs 1,000 php per person inclusive of breakfast.
                </p>
              </div>
              <div className="p-4">
                {success && (
                  <div className="mb-4 flex items-center justify-between rounded-md bg-rose-500 p-4 text-white transition-all delay-75">
                    <p>Please fill up the form!</p>
                    <span
                      onClick={() => setSuccess(false)}
                      className="cursor-pointer text-white underline"
                    >
                      Close
                    </span>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn">Check In</label>
                    <input
                      ref={checkInRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="date"
                      id="checkIn"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut">Check Out</label>
                    <input
                      ref={checkOutRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="date"
                      id="checkOut"
                    />
                  </div>
                  <div>
                    <label htmlFor="room">Preferred Room No.</label>
                    <select
                      ref={roomRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      id="room"
                    >
                      {dummyRooms.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="noOfGuests">No of Guests</label>
                    <input
                      minLength={0}
                      min={0}
                      ref={guestRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="number"
                      id="noOfGuests"
                    />
                  </div>
                  <div>
                    <label htmlFor="noOfAdults">No of Adults</label>
                    <input
                      minLength={0}
                      min={0}
                      ref={adultsRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="number"
                      id="noOfAdults"
                    />
                  </div>
                  <div>
                    <label htmlFor="noOfChildren">No of Children</label>
                    <input
                      minLength={0}
                      min={0}
                      ref={childrenRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="number"
                      id="noOfChildren"
                    />
                  </div>
                  <div>
                    <label htmlFor="noOfExtraBeds">No of Extra Beds</label>
                    <input
                      onKeyUp={(e) => {
                        setTotal(1000 * e.target.value + data?.price)
                        setExtraBeds(e.target.value)
                      }}
                      defaultValue={extraBeds}
                      // onKeyPress={(e) => setExtraBeds(e.target.value)}
                      minLength={0}
                      min={0}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="number"
                      id="noOfExtraBeds"
                    />
                  </div>
                  <div>
                    <label htmlFor="voucherCode">Voucher Code</label>
                    <input
                      ref={voucherCodeRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="text"
                      id="voucherCode"
                    />
                  </div>
                  <div>
                    <label htmlFor="purposeOfStay">Purpose of stay</label>
                    <select
                      ref={purposeOfStayRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      id="purposeOfStay"
                    >
                      <option value="Vacation">Vacation</option>
                      <option value="Occassion">Occassion</option>
                      <option value="One Night">One Night</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="remarks">Remarks/ Requests</label>
                    <input
                      ref={remarksRef}
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="text"
                      id="remarks"
                    />
                  </div>
                  <div>
                    <label htmlFor="id">
                      Vaccinations cards and valid IDs for each guest
                    </label>
                    <input
                      className="my-2 w-full rounded-md border border-slate-300 px-4 py-3 "
                      type="file"
                      id="id"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="mt-6 p-4 text-2xl text-slate-900">Total</h1>
                  <p className="p-4 text-xl">Amount to pay: &#8369; {total}</p>
                </div>
                <button className="mx-4 my-2 rounded-md bg-gray-900 px-4 py-4 text-slate-100 disabled:bg-slate-600">
                  Book Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Rooms
