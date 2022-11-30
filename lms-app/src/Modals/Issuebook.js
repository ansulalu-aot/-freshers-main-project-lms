import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IssueContext } from '../App';
import { nanoid } from 'nanoid'
import { BookContext } from '../App';
import { StudentContext } from '../App';

function Issuemodal() {
    let remain
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [books, setBooks] = useState("")
    const [students, setStudents] = useState("")
    const [issues, setIssues] = useState("")
    const [due, setDue] = useState("")
    const [book] = useContext(BookContext)
    const [student] = useContext(StudentContext)
    const [issue, setIssue] = useContext(IssueContext)

    const handleSubmit = () => {
        const newIssue = {
            issueid: nanoid(),
            books: books,
            students: students,
            issues: issues,
            due: due,
        }
        setIssue([...issue, newIssue])
        setBooks("")
        setStudents("")
        setIssues("")
        setDue("")
    }

    const bookIssueRemaining = () => {
        remain = book.map((index) => {
            if (index.bookTitleId === books) {
                index.remaining--
            }
            return (remain)
        })
    }

    return (
        <>
            <Button className='button1' onClick= {handleShow}>
                Issue Book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Book</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example1" value={books} onChange={(e) => setBooks(e.target.value)}>
                            <option>Select Book</option>
                            {book.map((item) => {
                                return <option value={item.bookTitleId}>{item.name}</option>
                            })}
                        </Form.Select>

                        <Form.Label>Student</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example2" value={students} onChange={(e) => setStudents(e.target.value)}>
                            <option>Select Student</option>
                            {student.map((item) => {
                                return <option>{item.name}</option>
                            })}
                        </Form.Select>

                        <Form.Group className="mb-3">
                            <Form.Label>Issue Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={issues}
                                onChange={(e) => setIssues(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={due}
                                onChange={(e) => setDue(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={() => { handleClose(); handleSubmit(); bookIssueRemaining()}}>
                        Issue Book
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Issuemodal;

