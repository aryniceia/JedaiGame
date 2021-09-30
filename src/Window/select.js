import React, { useState } from 'react';
import Page from '../../src/Components/Pages/page';
import RadioButton from '../Components/RadioButton/radio';
import Link from '../Components/Link/link';
import './Styles/select.css';

function confirmacao(){
    window.confirmacao()
}
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
        setName('')
        localStorage.removeItem('jedai/username')
        setLevel('padrao')
        localStorage.removeItem('jedai/level')
        setTime('padrao')
        localStorage.removeItem('jedai/time')
        setTabuleiro('padrao')
        localStorage.removeItem('jedai/tabuleiro')
        setPersonagem('')
        localStorage.removeItem('jedai/personagem')
    }

    return (
        <Page>
            <form action="/game" onSubmit={save} >
                <h1 className='App-title'>Login</h1>

                <div className='bar-top'>
                    <div className='titles'>
                        <div className="username">
                            <label> Nome de Usuário: </label>
                            <input onChange={({target}) => 
                                setName(target.value)} value={name} 
                                placeholder="Exemplo: batata_fofinha" 
                                className="input" 
                                maxLength="14"
                                type="string" 
                                required>
                            </input>
                        </div>

                        <div className="level">
                            <label>Nível: </label>
                            <select onChange={({target}) => 
                                setLevel(target.value)} value={level} 
                                name="level" className="input" 
                                id="level" required>
                                    <option disabled value="padrao">Selecione o nível...</option>
                                    <option value="1">Fácil</option>
                                    <option value="2">Médio</option>
                                    <option value="3">Reprovação</option>
                                    <option value="4">Jubilator</option>
                            </select>
                        </div>

                        <div className="time">
                            <label>Tempo de jogo: </label>
                            <select onChange={({target}) => 
                                setTime(target.value)} value={time} 
                                name="time" className="input" 
                                id="time" required>
                                    <option disabled value="padrao">Selecione o tempo de jogo...</option>
                                    <option value="20">x20 rodadas</option>
                                    <option value="30">x30 rodadas</option>
                                    <option value="50">x50 rodadas</option>
                            </select>
                        </div>

                        <div className="tabuleiro">
                            <label>Escolha o tabuleiro: </label>
                            <select onChange={({target}) => 
                                setTabuleiro(target.value)} 
                                value={tabuleiro} name="tabuleiro" 
                                className="input" id="tabuleiro" 
                                required>
                                    <option disabled value="padrao">Selecione o tabuleiro...</option>
                                    <option value="1">Sabão</option>
                                    <option value="2">Ácido Graxo</option>
                                    <option value="3">Biodisel</option>
                            </select>
                        </div>  
                    </div>
                </div>
                
                <h1 className='App-subtitle'> Seleção de Personagens</h1>

                <div className='bar-bot'>
                    <RadioButton personagem={personagem} setPersonagem={setPersonagem}/> {/*Nessa linha é setado do component radio */}
                    <div className='buttons1'>
                        <Link route="/" className='return'>Voltar</Link>
                        <Link route='detail' className='detail'>Detalhes</Link>
                        {/*<RandomButton onClick={save}></RandomButton>*/}
                        <input className="save" type='submit' value="Confirma" onClick={confirmacao}/>
                        <button className="delete" type='button' onClick={delet}>Limpar Seleção</button> 
                    </div>
                </div>
            </form> 
        </Page>
    );
}

export default Select;