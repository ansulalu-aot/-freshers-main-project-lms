// import React, { useState, useContext } from 'react'
// import Table from 'react-bootstrap/Table';
// import Returnbook from '../ModalsAdmin/Return';
// import Issuemodal from '../ModalsAdmin/Issuebook';
// import Dashboard from './Dashboard';
// import { IssueContext, BookContext, StudentContext } from '../App';

// function Issuedbooks() {
//     const [issue] = useContext(IssueContext)
//     const [book ] = useContext(BookContext)
//     const [student] = useContext(StudentContext)
//     const [search, setSearch] = useState("")
//     // const [fine, setFine] = useState("")
//     // fine calculating
//     // const bookFine = () => {
//     //     const currentDate = new Date()
//     //     const dueDate = {due}
//     //     const dateDiff = Math.round((currentDate.getTime() - new Date(dueDate)) / (1000*3600*24))
//     //     setFine(Math.round(dateDiff*10))
//     //     if(fine < 0){
//     //         setFine("-")
//     //     }
//     // }

//     return (
//         <>
//             <div className='d-flex col'>
//                 <Dashboard />
//                 <div className='container text-nowrap p-5'>
//                     <h5>Issued Books</h5>
//                     <hr />
//                     <div className='search'><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or student" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
//                         <Issuemodal />
//                     </div>
//                     <Table hover>
//                         <thead>
//                             <tr>
//                                 <th>Book Title</th>
//                                 <th>Student</th>
//                                 <th>Issue Date</th>
//                                 <th>Due Date</th>
//                                 <th>Fine <br />
//                                     (Rs. 10 per day)</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         {issue.filter((value) => {
//                             if (search === "") {
//                                 return value;
//                             } else if (value.books.toLowerCase().includes(search.toLowerCase())) {
//                                 return value
//                             } else if (value.students.toLowerCase().includes(search.toLowerCase())) {
//                                 return value
//                             } return 0
//                         })
//                         .map((index) => {
//                             return (
//                                 <tbody key={index.issueid}>
//                                     <tr>
//                                         {book.map((item) => {
//                                             if (index.books === item.bookTitleId) {
//                                                 return (
//                                                 <td>{item.name}</td>
//                                                 )
//                                             }   
//                                         })}
//                                         {student.map((item) => {
//                                             if (index.students === item.studentTitleId) {
//                                                 return (
//                                                 <td>{item.name}</td>
//                                                 )
//                                             }   
//                                         })}
//                                         <td>{index.issues}</td>
//                                         <td>{index.due}</td>
//                                         <td></td>
//                                         <td><Returnbook
//                                             issueTitle={index.books}
//                                             issueBooks={index.issueid} />
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             )
//                         })}
//                     </Table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Issuedbooks
import React, { useState, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Returnbook from '../Modals/Return';
import Issuemodal from '../Modals/Issuebook';
import Dashboard from './Dashboard';
import { IssueContext, BookContext, StudentContext } from '../App';
import DateDiff from 'date-diff'
import { nanoid } from 'nanoid'

function Issuedbooks() {
    const [issue] = useContext(IssueContext)
    const [book] = useContext(BookContext)
    const [student] = useContext(StudentContext)
    const [search, setSearch] = useState("")
    const [TempIssue, setTempIssue] = useState("")
    // const [fine, setFine] = useState("")
    // fine calculating
    // const bookFine = () => {
    //     const currentDate = new Date()
    //     const dueDate = {due}
    //     const dateDiff = Math.round((currentDate.getTime() - new Date(dueDate)) / (1000*3600*24))
    //     setFine(Math.round(dateDiff*10))
    //     if(fine < 0){
    //         setFine("-")
    //     }
    // }
    const tempIssue = issue.map((item) => {
        let objStudent = {
            tempid: nanoid(),
            book: "",
            bookTitleId: item.key,
            student: "",
            issuedate: item.issues,
            duedate: item.due,
            fine: item.key
        }
        book.map((book) => {
            if (item.books === book.bookTitleId) {
                objStudent.book = book.name
                objStudent.bookTitleId = book.bookTitleId
            }
        })
        student.map((student) => {
            if (item.students === student.studentTitleId) {
                objStudent.student = student.name
            }
        })
        var currentDate = new Date()
        var dueDate = new Date(item.due)
        var datediff = new DateDiff(currentDate,dueDate)
        let Bookfine = Math.round(datediff.days()) * 10
        if(Bookfine > 0){
            objStudent.fine = Bookfine
        }
        else{
            objStudent.fine = 0
        }
        return objStudent
        
    })
    
    return (
        <>
            <div className='d-flex col'>
                <Dashboard />
                <div className='container text-nowrap p-5'>
                    <h5>Issued Books</h5>
                    <hr />
                    <div className='search'><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or student" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                        <Issuemodal />
                    </div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Student</th>
                                <th>Issue Date</th>
                                <th>Due Date</th>
                                <th>Fine <br />
                                    (Rs. 10 per day)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {tempIssue.filter((value) => {
                            if (search === "") {
                                return value;
                            } else if (value.book.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } else if (value.student.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } return 0
                        })
                            .map((index) => {
                                return (
                                    <tbody key={index.tempid}>
                                        <tr>
                                            {/* {book.map((item) => {
                                            if (index.books === item.bookTitleId) {
                                                return (
                                                <td>{item.name}</td>
                                                )
                                            }   
                                        })}
                                        {student.map((item) => {
                                            if (index.students === item.studentTitleId) {
                                                return (
                                                <td>{item.name}</td>
                                                )
                                            }   
                                        })} */}
                                            <td>{index.book}</td>
                                            <td>{index.student}</td>
                                            <td>{index.issuedate}</td>
                                            <td>{index.duedate}</td>
                                            <td>{index.fine}</td>
                                            <td><Returnbook
                                                issueTitle={index.bookTitleId}
                                                issueBooks={index.tempid}
                                                tempIssue={tempIssue} />
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

export default Issuedbooks
