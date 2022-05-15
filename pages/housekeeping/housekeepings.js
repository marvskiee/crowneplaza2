import React from 'react'
import { RoleHeader } from '../../components'
import Head from 'next/head'
const HouseKeepings = () => {
  const data_headers = [
    { name: 'Room No.', key: 'roomNo' },
    { name: 'Room Type', key: 'roomType' },
    { name: 'Room Floor', key: 'roomFloor' },
    { name: 'Room Status', key: 'roomStatus' },
    { name: 'Reservation Status', key: 'reservationStatus' },
  ]
  const data_items = [
    {
      roomNo: 201,
      roomType: 'Standard',
      roomFloor: '2nd',
      roomStatus: 'Clean',
      reservationStatus: 'Reserved',
    },
    {
      roomNo: 202,
      roomType: 'Standard',
      roomFloor: '2nd',
      roomStatus: 'Clean',
      reservationStatus: 'Reserved',
    },
    {
      roomNo: 203,
      roomType: 'Standard',
      roomFloor: '2nd',
      roomStatus: 'Clean',
      reservationStatus: 'Reserved',
    },
    {
      roomNo: 204,
      roomType: 'Standard',
      roomFloor: '2nd',
      roomStatus: 'Clean',
      reservationStatus: 'Reserved',
    },
    {
      roomNo: 205,
      roomType: 'Standard',
      roomFloor: '2nd',
      roomStatus: 'Clean',
      reservationStatus: 'Reserved',
    },
  ]
  return (
    <>
      <Head>
        <title>Housekeeping | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="housekeepings" role="housekeeping" />
      <div className="mx-auto w-full max-w-container p-4">
        <table className="mt-4 w-full table-auto">
          <thead>
            <tr className="e bg-slate-800">
              {data_headers &&
                data_headers.map(({ name }, index) => (
                  <th className="p-3 text-center text-white" key={index}>
                    {name}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data_items &&
              data_items.map((item, index) => (
                <tr key={index}>
                  {data_headers &&
                    data_headers.map(({ key }, sub_index) => (
                      <td
                        className="border-2 border-slate-100 p-4 text-center text-slate-600"
                        key={sub_index}
                      >
                        {item[key]}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HouseKeepings
