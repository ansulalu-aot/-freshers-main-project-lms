import React from 'react'
import Table from 'react-bootstrap/Table';
import Studentdashboard from './Studentdashboard';

function Mybooks() {

    return (
        <>
            <div className='d-flex col'>
                <Studentdashboard />
                <div className='container2 text-nowrap p-5'>
                    <h5>My Books</h5>
                    <hr />
                    <div className='search d-dlex'>
                        <div><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or author" aria-label="Search" /></div>
                        <div className='d-flex col gap-3 justify-content-end '><p>Sort by:</p><select className="form-select bg-light" aria-label="Default select example" style={{ width: "10rem" }} id="sorts">
                            <option></option>
                            <option>Issue Date</option>
                            <option>Due Date</option>
                        </select></div>
                    </div>
                    <div className='form-tab'>
                        <p className='d-flex gap-5'>
                            <label>Issued Books</label>
                            <label>Pending to return</label>
                            <label>Returned Books</label>
                            </p>
                    </div>
                    <Table hover >
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>Issue Date</th>
                                <th>Due Date</th>
                                <th>Return Date</th>
                                <th>Fine <br />
                                    (Rs.10 per day)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>It Start With Us</td>
                                <td>Colleen Hoover</td>
                                <td>10-11-2022</td>
                                <td>18-11-2022</td>
                                <td>18-11-2022</td>
                                <td>0</td>
                            </tr>
                        </tbody>

                    </Table>
                </div>
            </div>
        </>
    )
}

export default Mybooks
