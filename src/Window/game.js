import React from 'react';
import Tela from '../Components/TelaGame/tela';
import InputResponse from '../Components/InputResponse/response';

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
    function mestra(){
        window.mestra()
    };
    function maismol(){
        window.maismol()
    };
    function botaoEvento(){
        window.botaoEvento()
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
    function Facil(){
        window.Facil()
    };
    function Medio(){
        window.Medio()
    };
    function Dificil(){
        window.Dificil()
    };
    function Impossivel(){
        window.Impossivel()
    };
    
    return (
        <Tela>
            <InputResponse></InputResponse>
             {/*Caso o jogo não esteja apareceno, basta tirar o InputResponse sendo "mãe" de todos os elementos */}
                <div className="Matricial">
                    <div className="jogo">
                        {/*<h1 id="acdin">TESTE OK</h1>*/}
                        <span id="turno"></span>
                    </div>

                    <div>           
                        {/*<button onClick={Proximo}>Proximo turno</button>
                        <button onClick={upgrade}>Subir de nível</button>
                        <button onClick={upgradeReator}>Melhorar reator</button>
                        <button onClick={upgradePHmetro}>Melhorar pHmetro </button>
                        <button onClick={upgradeTermometro}>Melhorar termômetro </button>
                        <button onClick={mestra}>Soma mestra</button>
                        <button onClick={maismol}>Mais 3 mols total</button>
                        <button onClick={botaoEvento}>Ligar/Desligar eventos</button>*/}
                        <p id="eventos"></p>
                    
                        <div>
                            <p id="equacao">
                                <span id="reagente01"></span> 
                                <span id="reagente02"></span> ⇌
                                <span id="produto01"></span>
                                <span id="produto02"></span>
                            </p>
                    
                            <p>
                                {/*<button onClick={AdicionarH2O}>+ <span id="reagente001"></span></button>
                                <button onClick={AdicionarTri}>+ <span id="reagente002"></span></button>*/}
                            </p>
                        </div>
                    
                        <div>
                            <p id="phtotal"></p> 
                            <p id="temperatura"></p>

                            {/*<button onClick={SubirPH}>+PH</button>
                            <button onClick={DiminuirPH}>-PH</button>*/}
                
                            {/*<button id="temp+" onClick={AumentarTemp}>+Temperatura</button>
                            <button id="temp-" onClick={DiminuirTemp}>-Temperatura</button>*/}
                        </div>

                        <div>
                            <p id="probabilidade"></p>
                            {/*<button id="expugar" onClick={Expurgo}>Expugar</button> 
                            <button id="decantar" onClick={Decantar}>Decantar</button> 
                            <button onClick={Filtro}>Filtro</button>*/}
                        </div>

                        {/*<div>
                            <p>Extração do ácido graxo (4 rodadas):</p>
                            <p id="extracao"></p>
                            <p>Extração por meio do Filtro (2 rodadas):</p>
                            <p id="extracaofiltro"></p>
                            <p id="totalextraido"></p>
                        </div>*/}

                        <span id="trofeus"></span>
                        <p id="eventosProb"></p>
                        <p id="contagemeventos"></p>
                        
                        {/*<p>Nivel do Jogo: <span id="nivel"></span>
                            <button onclick={Facil}>Fácil</button>
                            <button onclick={Medio}>Médio</button>
                            <button onclick={Dificil}>Difícil</button>
                            <button onclick={Impossivel}>Impossível</button>
                         </p>*/}
                    </div>
                </div>
             {/*No momento vai ser colocado aqui em baixo para não atrapalhar <3*/}
        </Tela>
    );   
}

export default Game;