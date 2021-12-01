import React from 'react';
import { Modal } from 'react-bootstrap';
import Page from '../../src/Components/Pages/page';
import './Styles/gameover.css';



//import Modal from 'react-bootstrap/Modal'

function Over () {
    return (
        <Page>
            <Modal>
                <div className='Config'>
                    <h1 className='App-title'>Game Over :(</h1>
                </div>
            </Modal>
        </Page>
    );
}

export default Over;
//esta tela pode ser modificada em /components/Modal/modal.js
