import React from 'react'
import Table from 'react-bootstrap/Table';
import { TbTrash } from "react-icons/tb";

function Allbooks() {
  return (
    <div>
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Language</th>
          <th>Total Copies</th>
          <th>Remaining</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>It Start With Us</td>
          <td>Colleen Hoover</td>
          <td>English</td>
          <td>5</td>
          <td>2</td>
          <td>
            {/* <Issueedit/> */}
            <TbTrash/>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Allbooks
