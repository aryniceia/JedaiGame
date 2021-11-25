//import React from 'react';
import { useState } from 'react';
import { Button, Modal as BsModal } from 'react-bootstrap';


export default function Modal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <BsModal show={show} onHide={handleClose}>
          <BsModal.Header closeButton>
            <BsModal.Title>Modal heading</BsModal.Title>
          </BsModal.Header>

          <BsModal.Body>Woohoo, you're reading this text in a modal!</BsModal.Body>

          <BsModal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </BsModal.Footer>
        </BsModal>
      </>
    );
  }