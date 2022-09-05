import React from 'react';
import Link from './Components/Link/link';
import Page from './Components/Pages/page';
import './Home.css';

/*import Sound from '../src/sound/teste.mp3';*/
/*import testHover from '../src/sound/buttonHover.mp3';*/
//import Music from '../src/sound/Quimica_Animal_1.mid'


/* Sound Effect */
  /* Click button */
    /*function PlaySound(){
      let audio = new Audio(Sound);
      audio.play();
    }*/
    /*function iniciar () {
      PlaySound();
      setInterval(function(){ //add um intervalo de tempo para o som poder tocar
      //window.location.href='/select'
      }, 1000) 
    }*/
  /* Hover Sound Effect */
    /*function hoverSound  (){
      let teste = new Audio(testHover);
      //teste.src = 'https://www.soundjay.com/buttons/sounds/button-20.mp3';
      teste.play();
    }*/
  /* Som de fundo */

function Home() {
  return (
    <Page>   
      <h1 className="TitleGame">Química Animal</h1>

      <div className="menu">
        <div /*onMouseOver={hoverSound}*/ className="buttons">
         { /*<button>teste</button>*/}
          < Link route='/select' className='play buttons'>Play</Link>
          < Link route='/tutorial' className='tuto buttons'> Tutorial</Link>
          {/*< Link route='/config' className='config buttons'> 
            Configuração
          </Link> EM BREVE :)*/}
          < Link route='/credit' className='credit buttons'> Créditos</Link>
        </div>
      </div>
    </Page>          
  );
}

export default Home;