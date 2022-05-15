import React from 'react'
import moment from 'moment'
const AdminTable = ({ data_items, data_headers }) => {
  const table_headers = [
    {
      name: 'ID No#',
      key: 'id',
    },
    {
      name: 'Email',
      key: 'email',
    },
    {
      name: 'Name',
      key: 'name',
    },
    {
      name: 'Number',
      key: 'number',
    },
  ]
  const temp = [
    {
      id: '1',
      email: 'email',
      name: 'name',
      number: 'no1',
    },
    {
      id: '1',
      email: 'email',
      name: 'name',
      number: 'no1',
    },
    {
      id: '1',
      email: 'email',
      name: 'name',
      number: 'no1',
    },
  ]
  return (
    <div className="w-full overflow-auto">
      <table className="mt-4 w-full table-auto">
        <thead>
          <tr className="e bg-slate-800">
            {data_headers &&
              data_headers.map(({ name }, index) => (
                <th className="p-3 text-left text-white" key={index}>
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
                      className="border-2 border-slate-100 p-4 text-slate-600"
                      key={sub_index}
                    >
                      {['checkIn', 'checkOut'].includes(key)
                        ? moment(item[key]).format('MM/DD/YYYY')
                        : item[key]}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable
