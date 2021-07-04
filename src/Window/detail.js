import React from 'react';
import Page from '../../src/Components/Pages/page';
import Slide from '../Components/Slide/slide';
import './Styles/detail.css';


function Detail () {
    return (
        <Page>
            <div className='Detail'>
                <h1 className='App-title'>Detalhes</h1>
                <Slide></Slide>

            </div>
        </Page>
    );
}

export default Detail;