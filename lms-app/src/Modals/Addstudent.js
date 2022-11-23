import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { StudentContext } from '../App';
import { nanoid } from 'nanoid'

function AddStudent() {
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);setError(false)}
    const handleShow = () => setShow(true);
    // const [array1, setArray1] = useState([{ name: "", email: "", password: "", confirm: ""}])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [student,setStudent] = useContext(StudentContext)
    const [error, setError] = useState(false)
    const handleSubmit = () => {
        const newStudent = {
            studentid : nanoid(),
            name: name,
            email: email,
            password: password,
            confirm: confirm
        }
        if(name.length === 0 || email.length === 0 || password.length === 0 || confirm.length === 0){
            setError(true)
            handleShow()
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setError(true);
            handleShow()
          }
        else if(password !== confirm){
            setError(true)
            handleShow()
        }
        else{
        setStudent([...student,newStudent])
        console.log(student,newStudent)
        setName("")
        setEmail("")
        setPassword("")
        setConfirm("")
        setError(false)
        // alert("Student added")
    }
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
                                value={name}
                                placeholder="Eg: John Doe" required
                                onChange={(e) => setName( e.target.value )}
                            />
                           { error  ? <label style={{color: "red"}} >Can't be empty </label>  : ""}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Eg: johndoe@gmail.com" required
                                onChange={(e) => setEmail(e.target.value )} />
                               { error ? <label style={{color: "red"}} >Can't be empty</label> : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))? <label style={{color: "red"}} >Invalid format</label> : ""}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password} required
                                onChange={(e) => setPassword( e.target.value )}
                                />
                                 { error ? <label style={{color: "red"}} >Can't be empty</label>  : ""}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput4"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={confirm} required
                                onChange={(e) => setConfirm(e.target.value )}
                                />
                                { error&& confirm.length === 0 ? <label style={{color: "red"}} >Can't be empty</label> : (password !== confirm) ? <label style={{color: "red"}} > Password does not match </label>: ""}
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick = {handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3'  onClick={() => {handleClose();  handleSubmit() }}>
                        Add Student
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddStudent;