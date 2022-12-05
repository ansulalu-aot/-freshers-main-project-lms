import React, { useState, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Dashboard from './Dashboard';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BookContext, StudentContext, IssueContext } from '../App';
import { nanoid } from "nanoid";

function View() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const obj = useParams()
  const [book] = useContext(BookContext)
  const [student] = useContext(StudentContext)
  const [issue] = useContext(IssueContext)

  const tempStudent = issue.map((item) => {
    let objStudent = {
      viewid: nanoid(),
      key: item.key,
      book: "",
      author: "",
      issuedate: item.issues,
      duedate: item.due
    }
    book.map((book) => {
      if (item.books === book.bookTitleId) {
        objStudent.book = book.name
        objStudent.author = book.author
      }
    })
    student.map((student) => {
      if (item.students === student.studentTitleId) {
        objStudent.key = student.studentTitleId
      }
    })
    return objStudent
  })

  return (
    <>
      <div className='d-flex col'>
        <Dashboard />
        <div className='container d-flex row p-5'>
          <div>
            <div className='d-flex'>
              <p className='px-0' style={{ color: "#09174A8A" }}><IoIosArrowBack onClick={() => { navigate("/students") }} />Students / {student.map((student) => {
                if (student.studentTitleId === obj.studentid) {
                  return (student.name)
                }
              })}
              </p>
            </div>
            <hr />
          </div>
          <div className='d-flex col justify-content-between border' style={{ backgroundColor: "white", height: "9rem" }}>
            <div className='py-3 px-4' >
              <h6 style={{ color: "#282829" }}>{student.map((student) => {
                if (student.studentTitleId === obj.studentid) {
                  return (student.name)
                }
              })}</h6>
              <p style={{ color: "#414141" }}>{student.map((student) => {
                if (student.studentTitleId === obj.studentid) {
                  return (student.email)
                }
              })}</p>
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
                onChange={(e) => { setSearch(e.target.value) }}
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
              {tempStudent.filter((value) => {
                if (search === "") {
                  return value;
                } else if (value.book.toLowerCase().includes(search.toLowerCase())) {
                  return value
                } else if (value.author.toLowerCase().includes(search.toLowerCase())) {
                  return value
                } return 0
              })
                .map((index) => {
                  if (index.key === obj.studentid) {
                    return (
                      <tbody>
                        <tr>
                          <td>{index.book}</td>
                          <td>{index.author}</td>
                          <td>{index.issuedate}</td>
                          <td>{index.duedate}</td>
                          <td>-</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    )
                  }
                })}
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default View