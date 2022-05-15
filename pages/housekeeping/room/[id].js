import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { RoleHeader } from '../../../components'
import { BackSvg } from '../../../components/Svg'
const Room = () => {
  const router = useRouter()
  const backHandler = () => {
    router.back()
  }
  const active = router.query.id
  const data_headers = [
    'Tasks',
    'Done',
    'Broken',
    'Repaired',
    'Out of order',
    'Notes',
  ]
  const data_items = [
    'Clean Bedroom',
    'Clean Toilet',
    'Clean Windows',
    'Clean Fridge',
    'Clean Furnitures',
    'Clean Bathtub',
    'Sweep Floor',
    'Mop Floor',
    'Empty Trash',
    'Change Bedsheets',
    'Change Pillowcase',
    'Change Blanket',
    'Change Towels',
    'Change Trashbags',
    'Replace Toiletries',
    'Replace Rugs',
  ]
  return (
    <>
      <Head>
        <title>Housekeeping Room | Crowné Plaza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoleHeader active="room" role="housekeeping" />
      <div className="mx-auto w-full max-w-container p-4">
        <div className="mb-2 flex items-center">
          <button className="" onClick={backHandler}>
            <BackSvg />
          </button>
          <h1 className=" py-2 px-4 text-2xl text-slate-900">Room {active}</h1>
        </div>
        <table className="mt-4 w-full table-auto">
          <thead>
            <tr className="e bg-slate-800">
              {data_headers &&
                data_headers.map((name, index) => (
                  <th className="p-3  text-center text-white" key={index}>
                    {name}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data_items &&
              data_items.map((item, index) => (
                <tr key={index} className="border ">
                  <td className=" border-slate-100 p-2 px-4 text-slate-600">
                    {item}
                  </td>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">
                    <input
                      type="text"
                      className="p-1"
                      placeholder="Type here"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="my-4 flex  items-start justify-between rounded-md border p-4">
          <div className="text-slate-700">
            <p className="text-lg">Cleaner: John Doe</p>
            <p className="text-lg">Verified By: Nikita Jones</p>
            <p className="text-lg">Date: Jan 03, 2022</p>
          </div>
          <button className="rounded-md bg-emerald-500 px-4 py-2 text-white">
            Save and Close
          </button>
        </div>
      </div>
    </>
  )
}

export default Room
