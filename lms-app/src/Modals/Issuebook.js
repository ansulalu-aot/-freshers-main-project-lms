import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IssueContext } from '../App';
import { nanoid } from 'nanoid'

function Issuemodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [array2, setArray2] = useState([{ book: "", student: "", issue: "", due: ""}])
    const [book, setBook] = useState("")
    const [student, setStudent] = useState("")
    const [issues, setIssues] = useState("")
    const [due, setDue] = useState("")
    const [issue, setIssue] = useContext(IssueContext)
    const handleSubmit = () => {
        const newIssue = {
            issueid: nanoid(),
            book: book,
            student: student,
            issues: issues,
            due: due,
        }
        setIssue([...issue, newIssue])
        console.log(issue, newIssue)
        setBook("")
        setStudent("")
        setIssues("")
        setDue("")
        alert("Issued")
    }

    return (
        <>
            <Button className='button1' onClick={handleShow}>
                Issue Book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Book</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example1" value={book} onChange={(e) => setBook(e.target.value)}>
                            <option>Select Book</option>
                            <option>It Start With Us</option>
                            <option>The Breach</option>
                            <option>The Alchemist</option>
                        </Form.Select>

                        <Form.Label>Student</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example2" value={student} onChange={(e) => setStudent(e.target.value)}>
                            <option>Select Student</option>
                            <option>Nitha Samuel</option>
                            <option>Anjali Thomas</option>
                            <option>John Doe</option>
                        </Form.Select>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate1"
                        >
                            <Form.Label>Issue Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={issues}
                                onChange={(e) => setIssues(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate2"
                        >
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
                    <Button className='button3' onClick={() => { handleClose(); handleSubmit() }}>
                        Issue Book
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Issuemodal;

