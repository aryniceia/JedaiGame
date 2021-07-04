import React from 'react';
import Carousel from 'react-elastic-carousel';
import './slide.css'

import Info from '../../img/info.svg';
import Capivara from '../../img/char/capivara.png';
import Guara from '../../img/char/guara.png';
import Jacare from '../../img/char/jacare.png';
import Mamute from '../../img/char/mamute.png';
import Mico from '../../img/char/mico.png';
import Onca from '../../img/char/onca.png';
import Tucano from '../../img/char/tucano.png';

function Slide ({}) { 
    const items = [
        {id: 0, title: 'item #1', src: Capivara},
        {id: 1, title: 'item #2', src: Guara},
        {id: 2, title: 'item #3', src: Jacare},
        {id: 3, title: 'item #4', src: Mamute},
        {id: 4, title: 'item #5', src: Mico},        
        {id: 5, title: 'item #4', src: Onca},
        {id: 6, title: 'item #6', src: Tucano}
    ]

    return (
        <Carousel className="carrossel">
            {items.map(item => (
                <div key={item.id}>
                    {item.title}
                    <img className="image-char" src={item.src}/>
                    <img className='janela-info' src={Info}></img>
                </div>
            ))}
        </Carousel>
    );             
}

export default Slide;