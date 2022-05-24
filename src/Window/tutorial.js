import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/tutorial.css';
import Link from '../Components/Link/link';
import Arrow from '../img/elements/arrowL.png';

import testHover from '../sound/buttonHover.mp3';
/* Hover Sound Effect */
    function hoverSound  (){
        let teste = new Audio(testHover);
        //teste.src = 'https://www.soundjay.com/buttons/sounds/button-20.mp3';
        teste.play();
    }

function Tutorial () {
    return (
        <Page>
            <div className='Tutorial'>
                <h1 className='App-title'>Tutorial</h1>
                <iframe className="TutoVideo"
                    width="440" 
                    height="440" 
                    src="https://www.youtube.com/embed/B7PNq2v1p-E" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>  

                <div onMouseOver={hoverSound}>
                    <Link route="/" className='volta'>
                        <img alt="Botão de seta para voltar" className="leftTuto" title="Voltar" src={Arrow}></img>
                    </Link>
                </div>
                
                <div onMouseOver={hoverSound} className="LetsPlay">
                    <Link route="/select">Bora Jogar?</Link>
                </div>   
            </div>            
        </Page>
    );
}

export default Tutorial;