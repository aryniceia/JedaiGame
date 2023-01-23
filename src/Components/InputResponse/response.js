import React, {useEffect} from 'react';
import './response.css';
//import Link from '../Components/Link/link';

import Capivara from '../../img/char/icon/capivara_perfil.png';
import Guara from '../../img/char/icon/guara_perfil.png';
import Jacare from '../../img/char/icon/jacare_perfil.png';
import Mico from '../../img/char/icon/mico_perfil.png';
import Onca from'../../img/char/icon/onca_perfil.png';
import Tucano from'../../img/char/icon/tucano_perfil.png';

import CapivaraBody from '../../img/char/body/capivara.png';
import GuaraBody from '../../img/char/body/guara.png';
import JacareBody from '../../img/char/body/jacare.png';
import MicoBody from '../../img/char/body/mico.png';
import OncaBody from'../../img/char/body/onca.png';
import TucanoBody from'../../img/char/body/tucano.png';

import Centrifuga from '../../img/elements/centrifuga.png';
import FiltroElement from '../../img/elements/filtro.png';
import bequervazio from '../../img/Lab_Bequer/Bequervazio.png';

import Acido from '../../img/graxo_caderno.png';
import Sabao from '../../img/sabao_caderno.png';
import Bio from '../../img/biodiesel_caderno.png';

//import Sound from '../../sound/clickSound.mp3';
//import HoverSound from '../../sound/buttonHover.mp3';

// Variáveis das inputs //
    /*const levels = {
        0: "Fácil",
        1: "Médio",
        2: "Difícil",
        3: "Jubilator"
    }*/
    const Personagens = {
        1: {
            name: "Capivara",
            url: Capivara
        },
        2: {
            name: "Guará",
            url: Guara
        },
        3: {
            name: "Jacaré",
            url: Jacare
        },
        4: {
            name: "Mico",
            url: Mico
        },
        5: {
            name: "Onça",
            url: Onca
        },
        6: {
            name: "Tucano",
            url: Tucano
        }
    }
    const PersonagensBody = {
        1: {
            name: "Capivara",
            url: CapivaraBody
        },
        2: {
            name: "Guará",
            url: GuaraBody
        },
        3: {
            name: "Jacaré",
            url: JacareBody
        },
        4: {
            name: "Mico",
            url: MicoBody
        },
        5: {
            name: "Onça",
            url: OncaBody
        },
        6: {
            name: "Tucano",
            url: TucanoBody
        }
    }
    const Caderno = {
        1: {
            name: "Bioediesel",
            url: Bio
        },
        2: {
            name: "Ácido Graxo",
            url: Acido
        },

        3: {
            name: "Sabão",
            url: Sabao
        },
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
    /*function confirmacao(){
        window.confirmacao()
    };*/
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        
    };
    function myFunction1() {
        var popup = document.getElementById("helpPopup");
        popup.classList.toggle("show");
        window.atualizar()
    };
    function myFunction2() {
        var popup = document.getElementById("cadernoPopup");
        popup.classList.toggle("show"); //toggle = alterna as classes
    };
    function escFunction (event) {
        if(event.keyCode === 27) {

            var popupTrofeu = document.getElementById("myPopup");
            popupTrofeu.classList.remove("show"); // remove = remove a classe

            var popupAjuda = document.getElementById("helpPopup");
            popupAjuda.classList.remove("show");

            var popupCaderno = document.getElementById("cadernoPopup");
            popupCaderno.classList.remove("show");
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, []);
    /* function GameOver() {
        window.GameOver
    }*/
    function alertar () {
        alert (`Estatísticas finais 📊
        • Mol: ${window.molextraidos}
        • Turno: ${window.turno} ${document.turno}
        • Dinheiro: ${window.dinheiro}
        • Nível: ${window.NivelAtual}`)         
    }
    function Cancelar () {
        var cancelar = window.confirm (`
            ⚠️ AVISO ⚠️
            
            Epa, você deseja realmente encerrar sua pesquisa?`)
        
        if (cancelar == true ) {
            window.location.href='./select'
        }   

    }
    /* Sound Effect */
        /* Click button */
            /*function PlaySound(){
                let audio = new Audio(Sound);
                audio.play();
            }
            function iniciar () {
                PlaySound();
                setInterval(function(){ //add um intervalo de tempo para o som poder tocar
                //window.location.href='/select'
                }, 1000) 
            }*/
        /* Hover Sound Effect */
            /*function hoverSound  () {
                let teste = new Audio(HoverSound);
                teste.play();
            }*/
/* Variáveis dos reagentes R1 e R2*/
    var teste2 = `${window.reagente1}`;
    var reagente1 = 'Água teste'
    //var reagente2 = document.getElementById('segundo-reagente')
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
                            <img alt="Imagem de um filtro de laboratório" className="filtroElement" id='filtroElement'src={FiltroElement}></img>
                            <img alt="Imagem de um béquer" id='bequer1' className="bequer1" src={bequervazio}></img>
                            
                            <button className="agua" /*onMouseOver={hoverSound}*/ onClick={AdicionarH2O} title={'Custo: 2 Créditos'}><span id="primeiro-reagente"></span></button> {/*A classe é agua porém é o reagente 1*/}
                            <button className="trigli" /*onMouseOver={hoverSound}*/ onClick={AdicionarTri} title={'Custo: 5 Créditos'}><span id="segundo-reagente"></span></button> {/*A classe é trigli porém é o reagente 2*/}
                            {/*<button className="arrowLeft"><img id="arrowL" src={ArrowL}/></button>*/}

                            <button className="arrowRight" title="Consulte seu caderno!" /*onMouseOver={hoverSound}*/ onClick={myFunction2}>
                                <span className="cadernotext" id="cadernoPopup">
                                    <img alt="Imagem do cardeno com instruções das repectivas extrações" id="caderno" src={Caderno[localStorage.getItem('jedai/tabuleiro')].url}/>
                                </span>
                            </button>

                            <div className="PopupHover" /*onMouseOver={hoverSound}*/>
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
                                            <span id="reagente02"></span><span id="reversivel"></span><br></br><span id="produto01"></span><br></br>
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
                            <p>• Extração do <span id="produto2"></span> (<span id='rodadas'></span> rodadas):</p>
                            <p id="extracaoR1"></p>
                            <p id="extracaoR2"></p>
                            <p id="extracaoR3"></p>
                            <p id="extracaoR4"></p>
                            <p>• Extração por meio <span id='maquinario'></span> (2 rodadas):</p>
                            <p id="extracaoFiltro1"></p>
                            <p id="extracaoFiltro2"></p>
                            <p id="totalextraido"></p>
                            <p id="infoDeCusto"></p>
                        </div>
                    </div>
                    
                    <div className="barra_inferior">
                        <div className="BotoesAcao">
                            <div /*onMouseOver={hoverSound}*/ className="BotoesProfile">
                                <button className="botoes" onClick={Proximo}>Turno</button>
                                <button className="botoes" onClick={Expurgo}>Expugar</button>
                                <button className="help" onClick={myFunction1}>Ajuda
                                    <p className="helptext" id="helpPopup">
                                        
                                    </p>
                                </button>
                                <button className='cancel' onClick={Cancelar}>Sair</button>                               
                                <button /*onMouseOver={hoverSound}*/ className="botoes" onClick={upgrade}>Nível</button>
                                <button /*onMouseOver={hoverSound}*/ className="botoes" onClick={Decantar}><span id='decantar-precipitar'></span></button>
                                <button /*onMouseOver={hoverSound}*/ className="botoes" onClick={Filtro}><span id='filtrar-centrifugar'></span></button>
                            </div>

                            <button className="popup" title="Troféu" /*onMouseOver={hoverSound}*/ onClick={myFunction}>
                                <span className="popuptext" id="myPopup">
                                    <p id="trofeus"></p>
                                </span>
                            </button>
                            <div /*onMouseOver={hoverSound}*/ className="melhorias">
                                <button className="UpReator" onClick={upgradeReator} title="Melhoria do reator. Custo: 10 Créditos.">+</button>
                                <button className="UpPh" onClick={upgradePHmetro} title="Melhoria do pHmetro. Custo: 3 Créditos.">+</button>
                                <button className="UpChapa" onClick={upgradeTermometro} title="Melhoria da chapa térmica. Custo: 3 Créditos.">+</button>
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
                                    • user: {localStorage.getItem('jedai/username')}<br></br>
                                    • nível: <span id='nivelAtual'></span>{/*{levels[localStorage.getItem('jedai/level')]} */}
                                </div>
                            </div>
                        </div>

                        {/*<button className="gameover" type="button" onClick={alertar}>Teste</button>*/}
                    </div>
                </div>
            </header>
        </div>    
        
    );
}

export default Game;