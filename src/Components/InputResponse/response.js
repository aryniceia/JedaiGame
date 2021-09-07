import React from 'react';
import './response.css';

import Capivara from '../../img/char/icon/capivara_perfil.png';
import Guara from '../../img/char/icon/guara_perfil.png';
import Jacare from '../../img/char/icon/jacare_perfil.png';
import Mico from '../../img/char/icon/mico_perfil.png';
import Onca from'../../img/char/icon/onca_perfil.png';
import Tucano from'../../img/char/icon/tucano_perfil.png';

import CapivaraBody from '../../img/char/capivara.png';
import GuaraBody from '../../img/char/guara.png';
import JacareBody from '../../img/char/jacare.png';
import MicoBody from '../../img/char/body/mico.png';
import OncaBody from'../../img/char/body/onca.png';
import TucanoBody from'../../img/char/body/tucano.png';

import ArrowR from '../../img/elements/arrowR.png';
import Centrifuga from '../../img/elements/centrifuga.png';
import FiltroElement from '../../img/elements/filtro.png';
import Caderno from '../../img/sabao_caderno.png';

// Variáveis das inputs //
    const levels = {
        0: "Fácil",
        1: "Médio",
        2: "Difícil",
        3: "Jubilator"
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
    const PersonagensBody = {
        0: {
            name: "Capivara",
            url: CapivaraBody
        },
        1: {
            name: "Guará",
            url: GuaraBody
        },
        2: {
            name: "Jacaré",
            url: JacareBody
        },
        3: {
            name: "Mico",
            url: MicoBody
        },
        4: {
            name: "Onça",
            url: OncaBody
        },
        5: {
            name: "Tucano",
            url: TucanoBody
        }
    }

function Game () {
    function Proximo(){
        window.Proximo()
    };
    function AdicionarH2O(){
        window.AdicionarH2O()
    };
    function upgrade(){
        window.upgrade()
    };
    function upgradeReator(){
        window.upgradeReator()
    };
    function upgradePHmetro(){
        window.upgradePHmetro()
    };
    function upgradeTermometro(){
        window.upgradeTermometro()
    };
    function AdicionarTri(){
        window.AdicionarTri()
    };
    function SubirPH(){
        window.SubirPH()
    };
    function DiminuirPH(){
        window.DiminuirPH()
    };
    function AumentarTemp(){
        window.AumentarTemp()
    };
    function DiminuirTemp(){
        window.DiminuirTemp()
    };
    function Expurgo(){
        window.Expurgo()
    };
    function Decantar(){
        window.Decantar()
    };
    function Filtro(){
        window.Filtro()
    };
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    function myFunction1() {
        var popup = document.getElementById("helpPopup");
        popup.classList.toggle("show");
    }
    function myFunction2() {
        var popup = document.getElementById("cadernoPopup");
        popup.classList.toggle("show");
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="background_game">
                    <div className="cabeçalho">
                        <h1 id="acdin">Se você viu essa mensagem, deu erro!</h1>
                    </div>

                    <div className="board">
                        <div className="border">
                            <img className="profile-charBody" alt="inserir o nome do personagem" src={PersonagensBody[localStorage.getItem('jedai/personagem')].url}/>
                            <img alt="Imagem de uma centrífuga de laboratório" className="centrifuga" src={Centrifuga}></img>
                            <img alt="Imagem de um filtro de laboratório" className="filtroElement" src={FiltroElement}></img>
                            
                            <button className="agua" onClick={AdicionarH2O}>+ H2O</button>
                            <button className="trigli" onClick={AdicionarTri}>+ Trigli</button>
                            {/*<button className="arrowLeft"><img id="arrowL" src={ArrowL}/></button>*/}

                            <button className="arrowRight" onClick={myFunction2}>
                                <img alt="Imagem do botão de seta" id="arrowR" src={ArrowR}/>
                                <span className="cadernotext" id="cadernoPopup">
                                    <img alt="Imagem do cardeno com instruções da extração de sabão" id="caderno" src={Caderno}></img>
                                </span>
                            </button>
                        
                            <div className="PopupHover">
                                <div className="PH">!
                                    <span className="textPH">
                                        <p id="phtotal"></p> 
                                    </span>
                                </div>
                                <div className="TEMP">!
                                    <span className="textTEMP">
                                        <p id="temperatura"></p>
                                    </span>
                                </div>
                                <div className="AGUA">!
                                    <span className="textAGUA">
                                        <p id="reagente001"></p>
                                    </span>
                                </div>
                                <div className="TRIGLI">!
                                    <span className="textTRIGLI">
                                        <p id="reagente002"></p>
                                    </span>
                                </div>

                                <div className="REATOR">!
                                    <span className="textREATOR">
                                        <p id="equacao">
                                            <span id="reagente01"></span><br></br>
                                            <span id="reagente02"></span> ⇌ <span id="produto01"></span><br></br>
                                            <span id="produto02"></span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="barra_lateral">
                        <div className="extração">
                            <p id="probabilidade"></p>
                            <p>• Extração do ácido graxo (4 rodadas):</p>
                            <p id="extracao"></p>
                            <p>• Extração por meio do Filtro (2 rodadas):</p>
                            <p id="extracaofiltro"></p>
                            <p id="totalextraido"></p>
                        </div>
                    </div>

                    <div className="barra_inferior">
                        <div className="BotoesAcao">
                            <div className="BotoesProfile">
                                <button className="botoes" onClick={Proximo}>Turno</button>
                                <button className="botoes" onClick={Expurgo}>Expugar</button>

                                <button className="help" onClick={myFunction1}>Ajuda
                                    <span className="helptext" id="helpPopup">
                                        • 💰 dinheiro<br></br>
                                        • ☕ ação <br></br>
                                        • 🧪 mol <br></br>
                                        • ⭐ turno <br></br>
                                    </span>
                                </button>
                                <button className="botoes" onClick={upgrade}>Nível</button>
                                <button className="botoes" onClick={Decantar}>Decantar</button>
                                <button className="botoes" onClick={Filtro}>Filtro</button>
                            </div>

                            <button className="popup" title="Troféu" onClick={myFunction}>
                                <span className="popuptext" id="myPopup">
                                    <p id="trofeus"></p>
                                </span>
                            </button>
                            <div className="melhorias">
                                <button className="UpReator" onClick={upgradeReator} title="Melhoria do reator">+</button>
                                <button className="UpPh" onClick={upgradePHmetro} title="Melhoria do pHmetro">+</button>
                                <button className="UpChapa" onClick={upgradeTermometro} title="Melhoria da chapa">+</button>
                                <button className="MaisPh" onClick={SubirPH} title="Aumentar pH">+</button>
                                <button className="MenosPh" onClick={DiminuirPH} title="Diminuir pH">-</button>
                                <button className="MaisTemp" id="temp+" onClick={AumentarTemp} title="Aumentar temperatura">+</button>
                                <button className="MenosTemp" id="temp-" onClick={DiminuirTemp} title="Diminuir temperatura">-</button>
                            </div>   
                        </div>

                        <div id="log">
                            <div>
                                <ul id="showLog">
                                    <li>⭐Turno 1⭐</li>
                                </ul>
                                {/*<div className="barLog"></div>*/}
                            </div>
                        </div>

                        <div className="profile"> {/* Barra com a foto do personagem */}
                            <img alt="add alt aqui" className="profile-char" src={Personagens[localStorage.getItem('jedai/personagem')].url}/>
                            <div className="bar"> {/* Barra com as info do personagem*/}
                                <div className="usernameLevel">
                                    user: {localStorage.getItem('jedai/username')}<br></br>
                                    nível: {levels[localStorage.getItem('jedai/level')]} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>    
    );
}

export default Game;