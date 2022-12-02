import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Returnbook from '../ModalsAdmin/Return';
import Issuemodal from '../ModalsAdmin/Issuebook';
import Dashboard from './Dashboard';
import { IssueContext, BookContext, StudentContext } from '../App';

function Issuedbooks() {
    const [issue] = useContext(IssueContext)
    const [book ] = useContext(BookContext)
    const [student] = useContext(StudentContext)
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

    return (
        <>
            <div className='d-flex col'>
                <Dashboard />
                <div className='container text-nowrap p-5'>
                    <h5>Issued Books</h5>
                    <hr />
                    <div className='search'><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or student" aria-label="Search" />
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
                        {issue.map((index) => {
                            return (
                                <tbody key={index.issueid}>
                                    <tr>
                                        {book.map((item) => {
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
                                        })}
                                        <td>{index.issues}</td>
                                        <td>{index.due}</td>
                                        <td>10</td>
                                        <td><Returnbook
                                            issueTitle={index.books}
                                            issueBooks={index.issueid} />
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
