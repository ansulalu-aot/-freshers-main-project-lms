import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
// import View from './View';
// import { TbTrash } from "react-icons/tb";
// import { MdEdit } from 'react-icons/md';
import { GrView } from "react-icons/gr";
import AddStudent from '../Modals/Addstudent';
import { StudentContext } from '../App';
import Studentedit from '../Modals/Studentedit';
import DeleteStudent from '../Modals/DeleteStudent';

function Student() {
    const [student,] = useContext(StudentContext)
    return (
        <>
            <div className='container text-nowrap p-5'>
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
                    {student.map((index) => {
                        return (
                            <tbody align="justify" key={index.studentid}>
                                <tr>
                                    <td>{index.name}</td>
                                    <td>{index.email}</td>
                                    <td className='d-flex gap-2  border-0'>
                                        <Studentedit
                                            editid={index.studentid}
                                            nameEdit={index.name}
                                            emailEdit={index.email}
                                            passwordEdit={index.password}
                                            confirmEdit={index.confirm}
                                            />
                                        <DeleteStudent keystudent={index.studentid} />
                                        <GrView className='edit' />
                                        {/* <View/> */}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default Student