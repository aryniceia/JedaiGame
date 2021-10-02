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
        {id: 1, title: 'Capi', src: Capivara},
        {id: 2, title: 'Guará', src: Guara},
        {id: 3, title: 'Cuca', src: Jacare},
        {id: 4, title: 'Prof. Dr. Mamutão', src: Mamute},
        {id: 5, title: 'Miquito', src: Mico},        
        {id: 6, title: 'Pintada', src: Onca},
        {id: 7, title: 'Tuca', src: Tucano}
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