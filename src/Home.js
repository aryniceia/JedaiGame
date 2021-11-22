import React from 'react';
import Link from './Components/Link/link';
import Page from './Components/Pages/page';
import './Home.css';

function Home() {
  return (
    < Page> 
      <h1 className="TitleGame">Química Animal</h1>

      <div className="menu">
        <div className="buttons">
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