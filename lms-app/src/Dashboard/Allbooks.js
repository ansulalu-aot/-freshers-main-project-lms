import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
// import { TbTrash } from "react-icons/tb";
import Bookedit from '../ModalsAdmin/Bookedit';
import Addmodal from '../ModalsAdmin/Addbook';
import { BookContext } from '../App';
import Delete from '../ModalsAdmin/DeleteBook';
import Dashboard from './Dashboard';

function Allbooks() {
    const [book,] = useContext(BookContext)
    const [search, setSearch] = useState("")
    return (
        <>
            <div className='d-flex col'>
                <Dashboard />
                <div className='container text-nowrap p-5'>
                    <h5>All Books</h5>
                    <hr />
                    <div className='search'>
                        <input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search by book title or author" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
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
                        {book.filter((value) => {
                            if (search === "") {
                                return value;
                            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } else if (value.author.toLowerCase().includes(search.toLowerCase())) {
                                return value
                            } return 0
                        })
                            .map((index) => {
                                return (
                                    <tbody key={index.bookid}>
                                        <tr>
                                            <td key={index.bookTitleId}>{index.name}</td>
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
            </div>
        </>
    )
}

export default Allbooks
