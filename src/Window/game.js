import React from 'react';
import './Styles/game.css';

import Capivara from '../img/char/icon/capivara_perfil.png';
import Guara from '../img/char/icon/guara_perfil.png';
import Jacare from '../img/char/icon/jacare_perfil.png';
import Mico from '../img/char/icon/mico_perfil.png';
import Onca from'../img/char/icon/onca_perfil.png';
import Tucano from'../img/char/icon/tucano_perfil.png';

// Variáveis das inputs //
    const levels = {
        0: "Fácil",
        1: "Médio",
        2: "Difícil",
        3: "Jubilator"
    }
    const times = {
        0: "x5 rodadas",
        1: "x10 rodadas",
        2: "x20 rodadas"
    }
    const tabuleiros = {
        0: "Sabão",
        1: "Ácido Graxo",
        2: "Biodiesel"
    }
    const Personagens = {
        0: {
            name: "Capivara",
            url: Capivara
        },
        1: {
            name: "Guará",
            url: Guara
        },
        2: {
            name: "Jacaré",
            url: Jacare
        },
        3: {
            name: "Mico",
            url: Mico
        },
        4: {
            name: "Onça",
            url: Onca
        },
        5: {
            name: "Tucano",
            url: Tucano
        }
    }

function Game () {
    return (
        <div className="App">
            <header className="App-header">
                <div className="background_game">
                    <div className="cabeçalho" style={{gridArea: 'cabeçalho'}}>cabeçalho</div>
                    <div className="barra_lateral" style={{gridArea: 'barra_lateral'}}>extração</div>
                    <div className="barra_inferior" style={{gridArea: 'barra_inferior'}}>player</div>
                </div>

                <div className="inputs">
                    {/*{localStorage.getItem('jedai/username')}
                    {levels[localStorage.getItem('jedai/level')]}
                    {times[localStorage.getItem('jedai/time')]}
                    {tabuleiros[localStorage.getItem('jedai/tabuleiro')]}

                    <div className="foto_char">
                        <img src={Personagens[localStorage.getItem('jedai/personagem')].url}/>
                    </div>*/}
                </div>
            </header>

            {/*{localStorage.getItem('jedai/level')}
            {localStorage.getItem('jedai/time')}
            {localStorage.getItem('jedai/tabuleiro')}
            {localStorage.getItem('jedai/personagem')}*/}
        </div>    
    );
}

export default Game;