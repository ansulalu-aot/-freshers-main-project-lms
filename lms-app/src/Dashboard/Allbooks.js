import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
// import { TbTrash } from "react-icons/tb";
import Bookedit from '../Modals/Bookedit';
import Addmodal from '../Modals/Addbook';
import { BookContext } from '../App';
import Delete from '../Modals/DeleteBook';

function Allbooks() {
    const [book,] = useContext(BookContext)
    return (
        <>
            <div className='container text-nowrap p-5'>
                <h5>All Books</h5>
                <hr />
                <div className='search'>
                    <input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or author" aria-label="Search"/>
                    <Addmodal /></div>
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
                    {book.map((index) => {
                        return (
                            <tbody key={index.bookid}>
                                <tr>
                                    <td>{index.name}</td>
                                    <td>{index.author}</td>
                                    <td>{index.language}</td>
                                    <td>{index.total}</td>
                                    <td>{index.remaining}</td>
                                    <td className='d-flex gap-2  border-0'>
                                        <Bookedit
                                            keybook={index.bookid}
                                            nameEdit={index.name}
                                            authorEdit={index.author}
                                            languageEdit={index.language}
                                            totalEdit={index.total}
                                            remainingEdit={index.remaining}
                                        />
                                        <Delete keybook={index.bookid} />
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

export default Allbooks
