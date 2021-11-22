import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/gameover.css';

import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalFooter, ModalTitle, ModalBody   } from 'react-bootstrap';
     

export default Over;
function Over () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (    
        <Page>
            <div className='Over'>
                <h1 className='App-title'>Game Over :(</h1>
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>

                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>            
            </Page>
        );
    
    }

  render(<Example />);