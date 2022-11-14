import React from 'react'
import Table from 'react-bootstrap/Table';
// import View from './View';
import { TbTrash } from "react-icons/tb";
import { MdEdit } from 'react-icons/md';

function Student() {
  return (
    <div>
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nitha Samuel</td>
          <td>nithasamuel@gmail.com</td>
          <td>
            <MdEdit/>
            <TbTrash/>
            {/* <View/> */}
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Student
