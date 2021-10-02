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
                        value: 1,
                        charName: "Capi",
                        img: Capivara,
                        charDescription: 'Personagem antropomorfo de uma capivara usando roupas de laboratório.',
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
                        value: 2,
                        charName: "Guará",
                        img: Guara,
                        charDescription: 'Personagem antropomorfo de um lobo guará usando roupas de laboratório.',
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
                        value: 3,
                        charName: "Cuca",
                        img: Jacare,
                        charDescription: 'Personagem antropomorfo de um jacaré usando roupas de laboratório.',
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
                        value: 4,
                        charName: "Miquito",
                        img: Mico,
                        charDescription: 'Personagem antropomorfo de um mico usando roupas de laboratório.',
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
                        value: 5,
                        charName: "Pintada",
                        img: Onca,
                        charDescription: 'Personagem antropomorfo de uma onça pintada usando roupas de laboratório.',
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
                        value: 6,
                        charName: "Tuca",
                        img: Tucano,
                        charDescription: 'Personagem antropomorfo de um tucano usando roupas de laboratório.',
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