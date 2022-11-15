import React from 'react'
import Table from 'react-bootstrap/Table';
import { TbTrash } from "react-icons/tb";
import Issueedit from '../Modals/Issueedit';
import Addmodal from '../Modals/Addbook';

function Allbooks() {
  return (
    <>
    <div className='text-nowrap p-5'>
     <h5>All Books</h5>
     <hr/>
     <div className='search'>
        <input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or author" aria-label="Search" />
        <Addmodal/></div>
    <Table hover >
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
            <Issueedit/>
            <TbTrash className='trash'/>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Allbooks
