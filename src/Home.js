import React from 'react';
import Link from './Components/Link/link';
import Page from './Components/Pages/page';
import './Home.css';

function Home() {
  return (
    < Page> 
      <div className="menu">
        <div className="buttons">
          < Link route='/select' className='play buttons'> 
            Play
          </Link>

          < Link route='/tutorial' className='tuto buttons'> 
            Tutorial
          </Link>

          < Link route='/config' className='config buttons'> 
            Configuração
          </Link>

          < Link route='/credit' className='credit buttons'> 
            Créditos
          </Link>
        </div>
      </div>
      {/*<div className="glass"></div>*/}
    </Page>          
  );
}

export default Home;