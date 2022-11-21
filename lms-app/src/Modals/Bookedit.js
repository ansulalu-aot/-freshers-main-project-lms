import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdEdit } from 'react-icons/md';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Bookedit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MdEdit className='edit' onClick={handleShow}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Form.Group className="mb-3"
                        // controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"                               
                               
                                placeholder="Eg: Pride and Prejudice"
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        // controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"                            
                                
                                placeholder="Eg: Jane Austen"
                                 />
                        </Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example" >
                            <option>Select Language</option>
                            <option >English</option>
                            <option >Spanish</option>
                            <option >Portuguese</option>
                        </Form.Select>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom01"
                            >
                                <Form.Label>Total Copies</Form.Label>
                                <Form.Control type="number" placeholder="5" name="total" 
                                   />
                            </Form.Group>
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom02"
                            >
                                <Form.Label>Remaining</Form.Label>
                                <Form.Control type="number" placeholder="2" name="remaining"  
                                    />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={handleClose}>
                        Edit Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Bookedit;