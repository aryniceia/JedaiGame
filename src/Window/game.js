import React from 'react';
import './Styles/game.css';

function Game () {

    return (
        <div className="App">
            <header className="App-header">
                <div className="background_game">
                    <section className="grid grid-template-areas-1"></section>
                        <div className="cabeçalho">cabeçalho</div>
                        <div className="barra_lateral">extração</div>
                        <div className="barra_inferior">player</div>
                </div>
            </header>

            {/*{localStorage.getItem('jedai/username')}
            {localStorage.getItem('jedai/level')}
            {localStorage.getItem('jedai/time')}
            {localStorage.getItem('jedai/tabuleiro')}
            {localStorage.getItem('jedai/personagem')}*/}
        </div>    
    );
}

export default Game;