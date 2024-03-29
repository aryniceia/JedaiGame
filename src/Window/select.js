import React, { useEffect, useState } from 'react';
import Page from '../../src/Components/Pages/page';
import RadioButton from '../Components/RadioButton/radio';
import Link from '../Components/Link/link';
import './Styles/select.css';
import mainTheme from '../sound/Quimica_Animal_3.mp3';
/*import testHover from '../sound/buttonHover.mp3';*/

/* Hover Sound Effect */
    /*function hoverSound  (){
        let teste = new Audio(testHover);
        //teste.src = 'https://www.soundjay.com/buttons/sounds/button-20.mp3';
        teste.play();
    }*/

function Select () {
    const [hasMuted, setHasMuted] = useState(false) //controle de som

    const [name, setName] = useState(localStorage.getItem('jedai/username') || '')
    const [level, setLevel] = useState(localStorage.getItem('jedai/level') || 'padrao') //useState é uma função que manipula estados :3
    const [time, setTime] = useState(localStorage.getItem('jedai/time') || 'padrao')
    const [tabuleiro, setTabuleiro] = useState(localStorage.getItem('jedai/tabuleiro') || 'padrao')
    const [personagem, setPersonagem] = useState(localStorage.getItem('jedai/personagem') || 6)

    const [hasName, setHasName]  = useState(!!localStorage.getItem('jedai/username'))
    const [hasLevel, setHasLevel]  = useState(!!localStorage.getItem('jedai/level'))
    const [hasTime, setHasTime] = useState(!!localStorage.getItem('jedai/time'))
    const [hasTabuleiro, setHasTabuleiro] = useState(!!localStorage.getItem('jedai/tabuleiro'))
    
    const save = () => {
        if ((hasName && hasLevel &&  hasTime && hasTabuleiro)) {
            localStorage.setItem('jedai/username', name)
            localStorage.setItem('jedai/level', level)
            localStorage.setItem('jedai/time', time)
            localStorage.setItem('jedai/tabuleiro', tabuleiro)
            localStorage.setItem('jedai/personagem', personagem)
            window.location.href='/game'
        } 
    }
  
    const delet = () => { 
        setName('')
        localStorage.removeItem('jedai/username')
        setHasName(false)

        setLevel('padrao')
        localStorage.removeItem('jedai/level')
        setHasLevel(false)

        setTime('padrao')
        localStorage.removeItem('jedai/time')
        setHasTime(false)

        setTabuleiro('padrao')
        localStorage.removeItem('jedai/tabuleiro')
        setHasTabuleiro(false)

        /*setPersonagem('')
        localStorage.removeItem('jedai/personagem')*/
    }
    useEffect(() => {
        if (name !== '') {setHasName(true)}
        if (level !== 'padrao') {setHasLevel(true)}
        if (time!== 'padrao') {setHasTime(true)}
        if (tabuleiro !== 'padrao') {setHasTabuleiro(true)}

        /*if (name !== '' &&  level !== 'padrao' &&  time !== 'padrao' &&  tabuleiro !== 'padrao' && personagem) {
            setIsFormValid(true)
        }*/
    }, [name, level, time, tabuleiro, personagem])

    useEffect(() => {
        const audio = document.getElementById("myaudio");
        audio.volume = 0.2;
      }, []);

    return (
        <Page>
            <form>
                <h1 className='App-title'>Login</h1>

                <div className='bar-top'>
                    <div className='titles'>
                        <div className="username">
                            <label>*Nome: </label>
                            <input onChange={({target}) => 
                                setName(target.value)} value={name} 
                                placeholder="Exemplo: batata_fofinha" 
                                className="input" 
                                maxLength="14"
                                type="string" 
                                required>
                            </input>
                            {(!hasName) && <span className='campo' style={{color: 'white'}}> *Campo ainda não preenchido :(</span>}
                        </div>

                        <div className="level">
                            <label>*Nível: </label>
                            <select onChange={({target}) => 
                                setLevel(target.value)} value={level} 
                                name="level" className="input" 
                                id="level" required>
                                    <option disabled value="padrao">Selecione o nível...</option>
                                    <option value="1">Fácil (20 mols)</option>
                                    <option value="2">Médio (30 mols e 2 troféus)</option>
                                    <option value="3">Reprovação (40 mols e 4 troféus)</option>
                                    <option value="4">Jubilator (50 mols e 2 troféus difíceis)</option>
                            </select>
                            {(!hasLevel) && <span className='campo' style={{color: 'white'}}> *Campo ainda não preenchido :(</span>}
                        </div>

                        <div className="time">
                            <label>*Tempo de jogo: </label>
                            <select onChange={({target}) => 
                                setTime(target.value)} value={time} 
                                name="time" className="input" 
                                id="time" required>
                                    <option disabled value="padrao">Selecione o tempo de jogo...</option>
                                    <option value="20">x20 rodadas</option>
                                    <option value="30">x30 rodadas</option>
                                    <option value="50">x50 rodadas</option>
                            </select>
                            {(!hasTime) && <span className='campo' style={{color: 'white'}}> *Campo ainda não preenchido :(</span>}
                        </div>

                        <div className="tabuleiro">
                            <label>*Escolha a reação: </label>
                            <select onChange={({target}) => 
                                setTabuleiro(target.value)} 
                                value={tabuleiro} name="tabuleiro" 
                                className="input" id="tabuleiro" 
                                required>
                                    <option disabled value="padrao">Selecione o tabuleiro...</option>
                                    <option value="1">Biodisel</option>
                                    <option value="2">Ácido Graxo</option>
                                    <option value="3">Sabão</option>
                            </select>
                            {(!hasTabuleiro) && <span className='campo' style={{color: 'white'}}> *Campo ainda não preenchido :(</span>}
                        </div>  
                    </div>
                </div>
                
                <h1 className='App-subtitle'> Seleção de Personagens</h1>

                <div className='bar-bot'>

                    <RadioButton personagem={personagem} setPersonagem={setPersonagem}/> {/*Nessa linha é setado do component radio */}
                    <div /*onMouseOver={hoverSound}*/ className='buttons1'>
                        <Link route="/" className='return'>Voltar</Link>
                        <Link route='detail' className='detail'>Detalhes</Link>
                        {/*<RandomButton onClick={save}></RandomButton>*/}
                        <button className="save" type='button' onClick={save}>Confirma</button>
                        <button className="delete" type='button' onClick={delet}>Limpar Seleção</button> 
                    </div>
                </div>
            </form> 
            <div className="soundControler">
                <audio src={mainTheme} autoPlay loop muted={hasMuted} id='myaudio'></audio>
                <button className='muted1' onClick={() => setHasMuted(!hasMuted)}></button>
            </div>
        </Page>
    );
}

export default Select;