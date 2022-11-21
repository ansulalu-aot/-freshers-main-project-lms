import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdEdit } from 'react-icons/md';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { nanoid } from 'nanoid'
import { BookContext } from '../App';

function Bookedit({ editid, nameEdit, authorEdit, languageEdit, totalEdit, remainingEdit }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [book, setBook] = useContext(BookContext)

    const [name, setName] = useState(nameEdit)
    const [author, setAuthor] = useState(authorEdit)
    const [language, setLanguage] = useState(languageEdit)
    const [total, setTotal] = useState(totalEdit)
    const [remaining, setRemaining] = useState(remainingEdit)

    const handleSubmit = () => {
        const newBook = {
            bookid : nanoid(),
            name:name,
            author:author,
            language:language,
            total:total,
            remaining:remaining
        }
        setBook([...book,newBook])
        console.log(book,newBook)
        // setBook(
        //     book.map((book) => {
        //         if (book.bookid === editid) {
        //             return {
        //                 ...book,
        //                 name: nameEdit,
        //                 author: authorEdit,
        //                 language: languageEdit,
        //                 total: totalEdit,
        //                 remaining: remainingEdit
        //             }
        //         }
        //         return book;
        //     })
        // )
    }

    return (
        <>
            <MdEdit className='edit' onClick={handleShow} />
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
                                value={name}
                                placeholder="Eg: Pride and Prejudice"
                                onChange={(e) => setName(e.target.value)}
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
                                value={author}
                                placeholder="Eg: Jane Austen"
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example" value={language} onChange={(e) => setLanguage(e.target.value)} >
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
                                <Form.Control type="number" placeholder="5" name="total" value={total}
                                    onChange={(e) => setTotal(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6"
                            //  controlId="validationCustom02"
                            >
                                <Form.Label>Remaining</Form.Label>
                                <Form.Control type="number" placeholder="2" name="remaining" value={remaining}
                                    onChange={(e) => setRemaining(e.target.value)} />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='button2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='button3' onClick={() => { handleClose(); handleSubmit() }}>
                        Edit Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Bookedit;