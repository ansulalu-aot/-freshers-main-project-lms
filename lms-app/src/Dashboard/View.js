import React from 'react'
import Table from 'react-bootstrap/Table';
// import { GrView } from "react-icons/gr";

function View() {
  return (
    
    <div>
        {/* <GrView/> */}
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Issue Date</th>
          <th>Due Date</th>
          <th>Return Date</th>
          <th>Fine <br/>
            (Rs. 10 per day)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>It Start With Us</td>
          <td>Colleen Hoover</td>
          <td>10-11-2022</td>
          <td>18-11-2022</td>
          <td>-</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default View