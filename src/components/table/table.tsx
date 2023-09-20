import React, {useState} from 'react'
import './table.css'

import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table'
import {ReferralEventRender} from "../referralEventsHelper";
import {defaultData} from "./tableData";

interface ReferralEvent {
  date: string
  amount: string
}

export interface Person {
  referralEvent: ReferralEvent
  advocate: string
  friend: number
  referralStatus: string
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor(row => row.referralEvent, {
    id: 'referralEvent',
    cell: info => {
      const amount = info.getValue().amount
      const date = info.getValue().date
      return <ReferralEventRender amount={amount} date={date}/>
    },
    header: () => <span>Referral Event</span>,
  }),
  columnHelper.accessor('advocate', {
    header: 'Advocate',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('friend', {
    header: () => 'Friend',
    cell: info => info.renderValue(),

  }),
  columnHelper.accessor('referralStatus', {
    header: 'Referral Status',
    cell: info => info.renderValue(),
  }),
]

export const Table: React.FC = () => {
  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table className='table'>
        <thead className='thead'>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}