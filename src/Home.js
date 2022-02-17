import React from 'react';
import Link from './Components/Link/link';
import Page from './Components/Pages/page';
import './Home.css';
//import sound from './sound/mixkit-unlock-game-notification-253.mp3'

function Home() {

  function TocarMusica() {
    var audio1 = new Audio();
    audio1.currentTime = 0
    audio1.src = "./sound/teste.mp3";
    audio1.play();
  }

  return (
    <Page> 
      <h1 className="TitleGame">Química Animal</h1>

      <div className="menu">
        <div className="buttons">
          <button onClick={TocarMusica}>teste</button>
          < Link route='/select' className='play buttons'> Play</Link>
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