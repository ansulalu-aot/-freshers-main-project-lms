import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Returnbook from '../Modals/Return';
import Issuemodal from '../Modals/Issuebook';
import { IssueContext } from '../App';

function Issuedbooks() {
    const [issue, ] = useContext(IssueContext)
    return (
        <>
            <div className='container text-nowrap p-5'>
                <h5>Issued Books</h5>
                <hr />
                <div className='search'><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or student" aria-label="Search" />
                    <Issuemodal /></div>
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
                                    <td>{index.books}</td>
                                    <td>{index.students}</td>
                                    <td>{index.issues}</td>
                                    <td>{index.due}</td>
                                    <td>10</td>
                                    <td><Returnbook /></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default Issuedbooks
