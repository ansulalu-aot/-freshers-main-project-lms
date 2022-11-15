import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdEdit } from 'react-icons/md';

function Issueedit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MdEdit onClick={handleShow}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select className="mb-3" aria-label="Default select example5">
                            <Form.Label>Book</Form.Label>
                            <option>Select Book</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Select className="mb-3" aria-label="Default select example6">
                            <Form.Label>Student</Form.Label>
                            <option>Select Student</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Select className="mb-3" aria-label="Default select example7">
                            <Form.Label>Languages</Form.Label>
                            <option>Languages</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate3"
                        >
                            <Form.Label>Issue Date</Form.Label>
                            <Form.Control
                                type="date"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlDate4"
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

export default Issueedit;