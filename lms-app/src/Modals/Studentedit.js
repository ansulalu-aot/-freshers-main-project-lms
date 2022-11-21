import React, { useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdEdit } from 'react-icons/md';

function Studentedit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    return (
        <>
            <MdEdit className='edit' onClick={handleShow}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                
                                placeholder="Eg: John Doe"
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                
                                placeholder="Eg: johndoe@gmail.com"
                                 />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                
                                
                                />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput4"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                               
                                 />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3'  onClick={  handleClose}>
                        Edit Student
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Studentedit;