import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TbTrash } from 'react-icons/tb';
import { StudentContext } from '../App';

function DeleteStudent({ keystudent }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [student, setStudent] = useContext(StudentContext)
    const handleDelete = () => {
        setStudent(student.filter((student) => student.studentid !== keystudent))
    }

    return (
        <>
            <TbTrash className='trash' onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='border border-0' closeButton>
                    <Modal.Title style={{ paddingLeft: "170px" }}>Delete student</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>Are you sure to delete this student?</Modal.Body>
                <Modal.Footer className="justify-content-center border border-0 gap-3 ">
                    <Button className='button2' onClick={handleClose}>
                        No
                    </Button>
                    <Button className='button3' onClick={() => { handleClose(); handleDelete(); }}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteStudent;