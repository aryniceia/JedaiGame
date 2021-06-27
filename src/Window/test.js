import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/credit.css';

function Test () {

    return (
        <Page>
            <div className='Test'>
                <h1 className='App-title'>Test</h1>
                {localStorage.getItem('jedai/username')}
                {localStorage.getItem('jedai/level')}
                {localStorage.getItem('jedai/time')}
                {localStorage.getItem('jedai/tabuleiro')}
                {localStorage.getItem('jedai/personagem')}
            </div>    
        </Page>
    );
}

export default Test;