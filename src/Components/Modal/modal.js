//import React from 'react';
import { useState } from 'react';
import { Button, Modal as BsModal } from 'react-bootstrap';

export default function Modal() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const zerarTudo = () => window.variaveisIniciais();
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
          Status
        </Button>
  
        <BsModal show={show} onHide={handleClose}>
          <BsModal.Header closeButton>
            <BsModal.Title>Estatísticas finais 📊:</BsModal.Title>
          </BsModal.Header>

          <BsModal.Body>
            Mols extraidos: {window.molextraidos} <br/>
            Turnos: {window.turno} <br/>
            Dinheiro: {window.dinheiro} Não faço ideia do pq nao funciona

          </BsModal.Body>

          <BsModal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={zerarTudo}>
              Zerar Tudo
            </Button>
          </BsModal.Footer>
        </BsModal>
      </>
    );
  }