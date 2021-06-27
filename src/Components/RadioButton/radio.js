import Capivara from '../../img/char/icon/capivara_perfil.png';
import Guara from '../../img/char/icon/guara_perfil.png';
import Jacare from '../../img/char/icon/jacare_perfil.png';
import Mico from '../../img/char/icon/mico_perfil.png';
import Onca from '../../img/char/icon/onca_perfil.png';
import Tucano from '../../img/char/icon/tucano_perfil.png'; 
import Char from './Char/char';
import './radio.css';

function RadioButton ({personagem, setPersonagem}) { 
    return (
        <div className="chars">
            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char1',
                        value: 0,
                        charName: "Capivara",
                        img: Capivara,
                        charDescription: 'Capivara de jaleco',
                        className: {
                            container: 'capi',
                            image: 'foto1'
                        }
                    }
                }
            />
            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char2',
                        value: 1,
                        charName: "Guará",
                        img: Guara,
                        charDescription: 'Guará de jaleco',
                        className: {
                            container: 'guara',
                            image: 'foto2'
                        }
                    }
                }
            />
            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char3',
                        value: 2,
                        charName: "Jacaré",
                        img: Jacare,
                        charDescription: 'Jacaré de jaleco',
                        className: {
                            container: 'jacare',
                            image: 'foto3'
                        }
                    }
                }
            />
            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char4',
                        value: 3,
                        charName: "Mico",
                        img: Mico,
                        charDescription: 'Mico de jaleco',
                        className: {
                            container: 'mico',
                            image: 'foto4'
                        }
                    }
                }
            />

            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char5',
                        value: 4,
                        charName: "Onça",
                        img: Onca,
                        charDescription: 'Onça de jaleco',
                        className: {
                            container: 'onca',
                            image: 'foto5'
                        }
                    }
                }
            />
            <Char 
                personagem={personagem}
                setPersonagem={setPersonagem}
                charProps={
                    {
                        id: 'char6',
                        value: 5,
                        charName: "Tucano",
                        img: Tucano,
                        charDescription: 'Tucano de jaleco',
                        className: {
                            container: 'tucano',
                            image: 'foto6'
                        }
                    }
                }
            />
        </div>
    );
}
export default RadioButton;