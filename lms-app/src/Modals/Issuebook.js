import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Issuemodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Form.Select  className="mb-3" aria-label="Default select example1">
                            <Form.Label>Book</Form.Label>
                            <option>Select Book</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Select  className="mb-3" aria-label="Default select example2">
                            <Form.Label>Student</Form.Label>
                            <option>Select Student</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Select  className="mb-3" aria-label="Default select example3">
                            <Form.Label>Languages</Form.Label>
                            <option>Languages</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate1"
                        >
                            <Form.Label>Issue Date</Form.Label>
                            <Form.Control
                                type="date"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate2"
                        >
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control 
                                type="date"    
                             />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={handleClose}>
                        Issue Book
                    </Button>
                </Modal.Footer>
            </Modal> 

</>
    );
}

export default Issuemodal;

