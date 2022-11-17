import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BookContext } from '../App';
// import { MdDetails } from 'react-icons/md';

function Addmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [array, setArray] = useState([{ name: "", author: "", language: "", total: "", remaining: "" }])
    // const [book, setBook] = useState([]);
    const [book,setBook] = useContext(BookContext)
    const handleSubmit = () => {
        const newBook = {
            name: array.name,
            author: array.author,
            language: array.language,
            total: array.total,
            remaining:array.remaining
        }
        setBook([...book,newBook])
        console.log(book,newBook)
        setArray("")
    }

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
                        <Form.Group className="mb-3"
                        // controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"                               
                                value={array.name}
                                placeholder="Eg: Pride and Prejudice"
                                onChange={(e) => setArray({ ...array, name: e.target.value })}
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
                                value={array.author}
                                placeholder="Eg: Jane Austen"
                                onChange={(e) => setArray({ ...array, author: e.target.value })} />
                        </Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example" value={array.language} onChange={(e) => setArray({ ...array, language: e.target.value })} >
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
                                <Form.Control type="number" placeholder="5" name="total" value={array.total}
                                    onChange={(e) => setArray({ ...array, total: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom02"
                            >
                                <Form.Label>Remaining</Form.Label>
                                <Form.Control type="number" placeholder="2" name="remaining"  value={array.remaining}
                                    onChange={(e) => setArray({ ...array, remaining: e.target.value })} />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={() => { handleClose(); handleSubmit() }}>
                        Add Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addmodal;


