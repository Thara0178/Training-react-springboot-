import React from 'react'
import Frag from './Frag'

const Table = () => {
  return (
    <>
      <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <Frag/>
        </tr>
      </table>
    </>
  )
}

export default Table
