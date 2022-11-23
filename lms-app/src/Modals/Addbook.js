import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BookContext } from '../App';
import { nanoid } from 'nanoid'

function Addmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);setError(false)}
    const handleShow = () => setShow(true);

    // const [array, setArray] = useState([{bookid:"", name: "", author: "", language: "", total: "", remaining: "" }])
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [language, setLanguage] = useState("")
    const [total, setTotal] = useState("")
    const [remaining, setRemaining] = useState("")
    const [book,setBook] = useContext(BookContext)
    const [error, setError] = useState(false)
    const handleSubmit = () => {
        const newBook = {
            bookid : nanoid(),
            name:name,
            author:author,
            language:language,
            total:total,
            remaining:remaining
        }
        if(name.length === 0 || author.length === 0 || language.length === 0 || total.length === 0 || remaining.length === 0){
            setError(true)
            handleShow()
        } else {
        setBook([...book,newBook])
        console.log(book,newBook)
        setName("")
        setAuthor("")
        setLanguage("")
        setTotal("")
        setRemaining("")
        setError(false)
        }
        // alert("Book added")
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
                                value={name}
                                placeholder="Eg: Pride and Prejudice" required
                                onChange={(e) => setName( e.target.value )}
                            />
                            { error&& name.length === 0  ? <label style={{color: "red"}} >Can't be empty </label>  : ""}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        // controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"                            
                                value={author}
                                placeholder="Eg: Jane Austen" required
                                onChange={(e) => setAuthor(e.target.value )} />
                                { error && author.length === 0? <label style={{color: "red"}} >Can't be empty </label>  : ""}
                        </Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example" value={language} required onChange={(e) => setLanguage(e.target.value )} >
                            <option>Select Language</option>
                            <option >English</option>
                            <option >Spanish</option>
                            <option >Portuguese</option>
                        </Form.Select>
                        { error&& language.length === 0 ? <label style={{color: "red"}} >Can't be empty </label>  : ""}
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom01"
                            >
                                <Form.Label>Total Copies</Form.Label>
                                <Form.Control type="number" placeholder="5" name="total" value={total} required
                                    onChange={(e) => setTotal(e.target.value )} />
                                    { error&& total.length === 0 ? <label style={{color: "red"}} >Can't be empty </label>  : ""}
                            </Form.Group>
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom02"
                            >
                                <Form.Label>Remaining</Form.Label>
                                <Form.Control type="number" placeholder="2" name="remaining"  value={remaining} required
                                    onChange={(e) => setRemaining(e.target.value )} />
                                    { error && remaining.length === 0 ? <label style={{color: "red"}} >Can't be empty </label>  : ""}
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


