import React from 'react'
import Table from 'react-bootstrap/Table';
import Studentdashboard from './Studentdashboard';
import { GrView } from "react-icons/gr";

function Studentallbooks() {

    return (
        <>
            <div className='d-flex col'>
                <Studentdashboard />
                <div className='container2 text-nowrap p-5'>
                    <h5>All Books</h5>
                    <hr />
                    <div className='search d-dlex'>
                        <div><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or author" aria-label="Search" /></div>
                        <div className='d-flex col gap-3 justify-content-end '><p>Sort by:</p><select className="form-select bg-light" aria-label="Default select example" style={{ width: "10rem" }} id="sorts">
                            <option></option>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select></div>
                    </div>
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
                                <td>12</td>
                                <td>10</td>
                                <td><GrView /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Studentallbooks
