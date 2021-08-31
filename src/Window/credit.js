import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/credit.css';
import Link from '../Components/Link/link';
import Eel from '../img/logos/eelusp.png';
import Arrow from '../img/elements/arrowL.png';

function Credit () {
    return (
        <Page>
            <div className='Credit'>

                <h1 className='App-title'>Créditos</h1>

                <marquee className="marquee" direction= "up">
                    <div className="box">
                        <div className='Text'>
                            Créditos: <br></br> <br></br>

                            Desenvolvedores: <br></br><br></br>

                            Aryane Nicéia Pereira Amâncio <br></br>
                            Vitalson Lorran Viana Carvalhal <br></br><br></br>

                            Professoras orientadoras: <br></br><br></br>

                            Profa. Dra. Gabrielle Weber <br></br>
                            Profa. Dra Rebeca Bacani <br></br><br></br><br></br>


                            ESCOLA DE ENGENHARIA DE LORENA  - USP <br></br><br></br>

                            <img className="eel" src={Eel}></img>
                        </div>   
                    </div>
                </marquee>

                <Link route="/" className='volta'>
                    <img className="left" title="Voltar" src={Arrow}></img>
                </Link>
            </div>    
        </Page>
    );
}

export default Credit;