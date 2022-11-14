import React from 'react'
import Table from 'react-bootstrap/Table';
// import Returnbook from '../Modals/Return';

function Issuedbooks() {
  return (
    <div>
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Student</th>
          <th>Issue Date</th>
          <th>Due Date</th>
          <th>Fine <br/>
            (Rs. 10 per day)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>It Start With Us</td>
          <td>Nitha Samuel</td>
          <td>02-11-2022</td>
          <td>09-11-2022</td>
          <td>10</td>
          {/* <td><Returnbook/></td> */}
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Issuedbooks
