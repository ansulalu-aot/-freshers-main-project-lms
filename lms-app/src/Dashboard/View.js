import React from 'react'
import Table from 'react-bootstrap/Table';
import Dashboard from './Dashboard';

function View() {
  return (
    <>
      <div className='d-flex col'>
        <Dashboard />
        <div className='container d-flex row p-5'>
          <div className='d-flex col justify-content-between border' style={{ backgroundColor: "white", height: "9rem" }}>
            <div className='py-3 px-4' >
              <h6 style={{ color: "#282829" }}>Nitha Samuel</h6>
              <p style={{ color: "#414141" }}>nithasamuel@gmail.com</p>
            </div>
            <div className='py-3 px-5'>
              <div className='d-flex col gap-3 justify-content-between'>
                <p style={{ color: "#8B8B8B" }}>Total Books Isssued</p>
                <p style={{ color: "#414141" }}>5</p>
              </div>
              <div className='d-flex col gap-3 justify-content-between'>
                <p style={{ color: "#8B8B8B" }}>Returned Books</p>
                <p style={{ color: "#414141" }}>4</p>
              </div>
              <div className='d-flex col gap-5 justify-content-around'>
                <p style={{ color: "#8B8B8B" }}>Total Fine</p>
                <p style={{ color: "#414141" }}>Rs.70</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4" style={{ backgroundColor: "white" }}>
            <h5>Issued Books</h5>
            <div className='search'>
              <input className="form-control my-2" style={{ width: "410px" }} type="search" placeholder="Search by book title or author" aria-label="Search"
              //  onChange={(e) => { setSearch(e.target.value) }}
              />
            </div>
            <Table hover>
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Author</th>
                  <th>Issue Date</th>
                  <th>Due Date</th>
                  <th>Return Date</th>
                  <th>Fine <br />
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
        </div>
      </div>
    </>
  )
}

export default View