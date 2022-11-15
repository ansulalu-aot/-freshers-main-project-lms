import React from 'react'
import Table from 'react-bootstrap/Table';
// import View from './View';
import { TbTrash } from "react-icons/tb";
import { MdEdit } from 'react-icons/md';
import { GrView } from "react-icons/gr";
import AddStudent from '../Modals/Addstudent';

function Student() {
    return (
        <>
            <div className='text-nowrap p-5'>
                <h5>Students</h5>
                <hr />
                <div className="search">
                    <input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by student name or email" aria-label="Search" />
                    <AddStudent /></div>

                <Table hover>
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
                                <MdEdit />
                                <TbTrash />
                                <GrView />
                                {/* <View/> */}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Student
