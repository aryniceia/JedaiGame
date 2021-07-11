import RadioButton from '../Components/RadioButton/radio';
import Link from '../Components/Link/link';
//import RandomButton from '../Components/RandomButton/random';
import React, { useState } from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/select.css';

function Select () {
    const [name, setName] = useState(localStorage.getItem('jedai/username') || '')
    const [level, setLevel] = useState(localStorage.getItem('jedai/level') || 'padrao') //useState é uma função que manipula estados :3
    const [time, setTime] = useState(localStorage.getItem('jedai/time') || 'padrao')
    const [tabuleiro, setTabuleiro] = useState(localStorage.getItem('jedai/tabuleiro') || 'padrao')
    const [personagem, setPersonagem] = useState(localStorage.getItem('jedai/personagem') || 0)

    const save = () => {
        localStorage.setItem('jedai/username', name)
        localStorage.setItem('jedai/level', level)
        localStorage.setItem('jedai/time', time)
        localStorage.setItem('jedai/tabuleiro', tabuleiro)
        localStorage.setItem('jedai/personagem', personagem)
        window.location.href='/game'
    }
    const delet = () => { 
        localStorage.setItem('jedai/username','')
        localStorage.setItem('jedai/level','')
        localStorage.setItem('jedai/time','')
        localStorage.setItem('jedai/tabuleiro','')
        localStorage.setItem('jedai/personagem', '')
    }

    return (
        <Page>
            <form>
                <h1 className='App-title'>Login</h1>

                <div className='bar-top'>
                    <div className='titles'>
                        <div className="username">
                            <label> Nome de Usuário: </label>
                            <input onChange={({target}) => 
                                setName(target.value)} value={name} 
                                placeholder="Exemplo: batata_fofinha" 
                                className="input" type="string" 
                                required="required">
                            </input>
                        </div>

                        <div className="level">
                            <label>Nível: </label>
                            <select onChange={({target}) => 
                                setLevel(target.value)} value={level} 
                                name="level" className="input" 
                                id="level" required="required">
                                    <option disabled value="padrao">Selecione o nível...</option>
                                    <option value="0">Fácil</option>
                                    <option value="1">Médio</option>
                                    <option value="2">Reprovação</option>
                                    <option value="3">Jubilator</option>
                            </select>
                        </div>

                        <div className="time">
                            <label>Tempo de jogo:  </label>
                            <select onChange={({target}) => 
                                setTime(target.value)} value={time} 
                                name="time" className="input" 
                                id="time" required="required">
                                    <option disabled value="padrao">Selecione o tempo de jogo...</option>
                                    <option value="0">x5 rodadas</option>
                                    <option value="1">x10 rodadas</option>
                                    <option value="2">x20 rodadas</option>
                            </select>
                        </div>

                        <div className="tabuleiro">
                            <label>Escolha o tabuleiro: </label>
                            <select onChange={({target}) => 
                                setTabuleiro(target.value)} 
                                value={tabuleiro} name="tabuleiro" 
                                className="input" id="tabuleiro" 
                                required="required">
                                    <option disabled value="padrao">Selecione o tabuleiro...</option>
                                    <option value="0">Sabão</option>
                                    <option value="1">Ácido Graxo</option>
                                    <option value="2">Biodisel</option>
                            </select>
                        </div> 
                    </div>
                </div>
                
                <h1 className='App-subtitle'> Seleção de Personagens</h1>

                <div className='bar-bot'>
                    <RadioButton personagem={personagem} setPersonagem={setPersonagem}/> {/*Nessa linha é setado do component radio */}
                    
                    <div className='buttons1'>
                        <Link route="/" className='return'> Voltar</Link>
                        <Link route='detail' className='detail'>Detalhes</Link>
                        {/*<RandomButton onClick={save}></RandomButton>*/}
                        
                        <button className="save" type='button' onClick={save} >Confirma</button>
                        <button className="delete" type='delete'onClick={delet}>Limpar Seleção</button> 
                    </div>
                </div>
                
            </form> 
        </Page>
    );
}

export default Select;