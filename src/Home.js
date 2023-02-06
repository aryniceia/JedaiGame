import React, { useState, useEffect } from 'react';
import Link from './Components/Link/link';
import Page from './Components/Pages/page';
import './Home.css';
import mainTheme from './sound/Quimica_Animal_1.mp3';
import volume from './sound/volume.png';

function Home() {
  const [hasMuted, setHasMuted] = useState(false)
 
  useEffect(() => {
    const audio = document.getElementById("myaudio");
    audio.volume = 0.2;
  }, []);


  return (
    <Page>   
      <h1 className="TitleGame">Química Animal</h1>
      <div className="menu">
        <div /*onMouseOver={hoverSound}*/ className="buttons">
         { /*<button>teste</button>*/}
          < Link route='/select' className='play buttons'>Play</Link>
          < Link route='/tutorial' className='tuto buttons'> Tutorial</Link>
          {/* < Link route='/jogo' className='jogo buttons'> JOGO</Link> */}
          {/*< Link route='/config' className='config buttons'> 
            Configuração
          </Link> EM BREVE :)*/}
          < Link route='/credit' className='credit buttons'> Créditos</Link>
        </div>
      </div>

      <div className="soundControler">
        <audio src={mainTheme} autoPlay loop muted={hasMuted} id='myaudio'></audio>
        <button className='muted' src={volume} onClick={() => setHasMuted(!hasMuted)}></button>
      </div>

      
    </Page>          
  );
}

export default Home;