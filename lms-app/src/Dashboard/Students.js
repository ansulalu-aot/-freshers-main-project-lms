import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
// import View from './View';
import { GrView } from "react-icons/gr";
import AddStudent from '../Modals/Addstudent';
import { StudentContext } from '../App';
import Studentedit from '../Modals/Studentedit';
import DeleteStudent from '../Modals/DeleteStudent';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router';
// import { Routes, Route } from 'react-router';

function Student() {
    const [student,] = useContext(StudentContext)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    return (
        <>
            <div className='d-flex col'>
                <Dashboard />
                <div className='container text-nowrap p-5'>
                    <h5>Students</h5>
                    <hr />
                    <div className="search">
                        <input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by student name or email" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                        <AddStudent />
                    </div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {student.filter((value) => {
                            if (search === "") {
                                return value;
                            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } else if (value.email.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } return 0
                        }).map((index) => {
                            return (
                                <tbody align="justify" key={index.studentid}>
                                    <tr>
                                        <td>{index.name}</td>
                                        <td>{index.email}</td>
                                        <td className='d-flex gap-2  border-0'>
                                            <Studentedit
                                                keystudent={index.studentid}
                                                nameEdit={index.name}
                                                emailEdit={index.email}
                                                passwordEdit={index.password}
                                                confirmEdit={index.confirm}
                                            />
                                            <DeleteStudent keystudent={index.studentid} />
                                            <GrView className='edit'
                                             onClick = {() =>{
                                                navigate("/students/view")
                                              }} />
                                            {/* <Routes><Route path="view" element="{ <View/> }">
                                        <View/>
                                        </Route></Routes> */}
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Student
