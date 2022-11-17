import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { StudentContext } from '../App';

function AddStudent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [array1, setArray1] = useState([{ name: "", email: "", password: "", confirm: ""}])
    // const [student, setStudent] = useState([]);
    const [student,setStudent] = useContext(StudentContext)
    const handleSubmit = () => {
        const newStudent = {
            name: array1.name,
            email: array1.email,
            password: array1.password,
            confirm: array1.confirm,
        }
        setStudent([...student,newStudent])
        console.log(student,newStudent)
        setArray1("")
    }
    
    return (
        <>
            <Button className='button1' onClick={handleShow}>
                Add New Student
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={array1.name}
                                placeholder="Eg: John Doe"
                                onChange={(e) => setArray1({ ...array1, name: e.target.value })}
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
                                value={array1.email}
                                placeholder="Eg: johndoe@gmail.com"
                                onChange={(e) => setArray1({ ...array1, email: e.target.value })} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={array1.password}
                                onChange={(e) => setArray1({ ...array1, password: e.target.value })}
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
                                value={array1.confirm}
                                onChange={(e) => setArray1({ ...array1, confirm: e.target.value })}
                                 />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3'  onClick={() => { handleClose(); handleSubmit() }}>
                        Add Student
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddStudent;