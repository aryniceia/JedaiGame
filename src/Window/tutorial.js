import React from 'react';
import Page from '../../src/Components/Pages/page';
import './Styles/tutorial.css';
import Link from '../Components/Link/link';
import Arrow from '../img/elements/arrowL.png';
import { FiArrowLeft } from "react-icons/fi";

/*import testHover from '../sound/buttonHover.mp3';*/
/* Hover Sound Effect */
    /*function hoverSound  (){
        let teste = new Audio(testHover);
        //teste.src = 'https://www.soundjay.com/buttons/sounds/button-20.mp3';
        teste.play();
    }*/

function Tutorial () {
    return (
        <Page>
            <div className='Tutorial'>
                <h1 className='App-title'>Tutorial</h1>
                <iframe
										className="TutoVideo"
                    src="https://www.youtube.com/embed/B7PNq2v1p-E" 
                    title="YouTube video player"
										frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>

								<span className='button-wrapper'>
									<Link route="/">
										<FiArrowLeft size={50} color={"#3C183D"} />
									</Link>

									<Link route="/select" className="LetsPlay">Bora Jogar?</Link>
								</span>
                
                {/* <div className="LetsPlay"> */}
                {/* </div>    */}
            </div>            
        </Page>
    );
}

export default Tutorial;