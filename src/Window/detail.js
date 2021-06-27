import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/detail.css';
import Info from '../img/info.svg'




function Detail () {
    return (
        <Page>
            <div className='Detail'>
                <h1 className='App-title'>Detalhes</h1>
                <img className='janela-info' src={Info}></img>
            </div>
        </Page>
    );
}

export default Detail;