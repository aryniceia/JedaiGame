import React from 'react';
import Carousel from 'react-elastic-carousel';
import './slide.css'


import Capivara from '../../img/char/capivara.png';
import Guara from '../../img/char/guara.png';
import Jacare from '../../img/char/jacare.png';
import Mamute from '../../img/char/mamute.png';
import Mico from '../../img/char/mico.png';
import Onca from '../../img/char/onca.png';
import Tucano from '../../img/char/tucano.png';

function Slide ({}) { 
    <div className="boxInfo"></div>
    const items = [
        {id: 1, title: 'Capi, Idade: 28, Altura: 1,65m, Peso: 70kg, Bio: Dona de diversos apelidos: Carpincha, Beque, Trombuda, Cachapu, Cunum e Cubu, ela está sempre comendo alguma coisa no laboratório, a despeito das inúmeras broncas que já tomou do Prof. Dr. Mamutão. Calma e prestativa, prefere realizar seus experimentos à tarde. É a veterana que já devia ter se formado, mas que ninguém quer que vá embora. Todes precisam de sua ajuda para alguma coisa.', 
            src: Capivara},
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
                    <img className="image-char" src={item.src}/>
                    <div className="textInfo">
                        {item.title}
                    </div>
                </div>
            ))}
        </Carousel>
    );             
}
export default Slide;