import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { BookContext, IssueContext } from '../App';

function Returnbook({ issueTitle, issueBooks, tempIssue }) {
    let remain
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [issue, setIssue] = useContext(IssueContext)
    const [book] = useContext(BookContext)

    const bookReturnRemaining = () => {
        remain = book.map((index) => {
            if (index.bookTitleId === issueTitle) {
                index.remaining++

            }
            return (remain)

        })
    }
    const handleDelete = () => {
        // for (let i = 0; i < tempIssue.length; i++) {
        //     if (tempIssue[i].tempid === issueBooks) {
        //         setIssue(tempIssue.filter(() => tempIssue[i].tempid !== issueBooks))
        //         console.log(tempIssue[i].tempid, issueBooks)
        //         // console.log(issueBooks)
        //     }
        // }
         // tempIssue.filter((tempIssue) => tempIssue[i].issueid !== issueBooks)
        // setIssue(tempIssue.filter((issue) => issue.tempid !== issueBooks))
        
    }

    return (
        <>
            <MdOutlineAssignmentReturn className='edit' onClick={() => { handleShow(); }} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='border border-0' closeButton>
                    <Modal.Title style={{ paddingLeft: "150px" }}>Mark as returned</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>Are you sure to mark this book as returned?</Modal.Body>
                <Modal.Footer className="justify-content-center border border-0 gap-3 ">
                    <Button className='button2' onClick={handleClose}>
                        No
                    </Button>
                    <Button className='button3' onClick={() => { handleClose(); bookReturnRemaining(); handleDelete() }} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Returnbook