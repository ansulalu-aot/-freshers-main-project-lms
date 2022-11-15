import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Addmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

           <Button className='button1' onClick={handleShow}>
                Add New Book
            </Button>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Eg: Pride and Prejudice"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Eg: Jane Austen" />
                        </Form.Group>
                        <Form.Select  className="mb-3" aria-label="Default select example">
                            <Form.Label >Languages</Form.Label>
                            <option>Languages</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Total Copies</Form.Label>
                                <Form.Control type="number" placeholder="5" />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Remaining</Form.Label>
                                <Form.Control type="number" placeholder="2" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={handleClose}>
                        Add Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addmodal;


