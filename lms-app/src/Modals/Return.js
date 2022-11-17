import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineAssignmentReturn } from "react-icons/md";

function Returnbook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MdOutlineAssignmentReturn className='edit' onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border border-0' closeButton>
          <Modal.Title style={{paddingLeft:"150px"}}>Mark as returned</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>Are you sure to mark this book as returned?</Modal.Body>
        <Modal.Footer className="justify-content-center border border-0 gap-3 ">
          <Button className='button2' onClick={handleClose}>
            No
          </Button> 
          <Button className='button3' onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Returnbook