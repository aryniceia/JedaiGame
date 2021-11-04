import React from 'react';
//import Carousel from 'react-elastic-carousel';
import Link from '../../Components/Link/link';
import Arrow from '../../img/elements/arrowL.png';
import './slide.css'

//Importações das imagens dos personagens//
import Capivara from '../../img/char/capivara.png';
import Guara from '../../img/char/guara.png';
import Jacare from '../../img/char/jacare.png';
import Mamute from '../../img/char/mamute.png';
import Mico from '../../img/char/mico.png';
import Onca from '../../img/char/onca.png';
import Tucano from '../../img/char/tucano.png';


const colors = ["#0088FE", "#00C49F", "#FFBB28", "#0088FE", "#00C49F", "#FFBB28", "#0088FE" ];
const items = [Capivara, Guara, Jacare, Mamute, Mico, Onca, Tucano ];
const delay = 5000;

/*const items = [
    {id: 1, title: 'Capi, Idade: 28, Altura: 1,65m, Peso: 70kg, Bio: Dona de diversos apelidos: Carpincha, Beque, Trombuda, Cachapu, Cunum e Cubu, ela está sempre comendo alguma coisa no laboratório, a despeito das inúmeras broncas que já tomou do Prof. Dr. Mamutão. Calma e prestativa, prefere realizar seus experimentos à tarde. É a veterana que já devia ter se formado, mas que ninguém quer que vá embora. Todes precisam de sua ajuda para alguma coisa.', 
        src: Capivara},
    {id: 2, title: 'Guará', src: Guara},
    {id: 3, title: 'Cuca', src: Jacare},
    {id: 4, title: 'Prof. Dr. Mamutão', src: Mamute},
    {id: 5, title: 'Miquito', src: Mico},        
    {id: 6, title: 'Pintada', src: Onca},
    {id: 7, title: 'Tuca', src: Tucano}
]*/


function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {items.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
              <img className="image-char" src={backgroundColor} />
          </div>
        ))}
    </div>

      <div className="slideshowDots">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

<Link route="/" className='volta'>
    <img alt="Botão de seta para voltar" className="left" title="Voltar" src={Arrow}></img>
</Link>

export default Slideshow;

/*function Slide ({}) { 
    <div className="boxInfo"></div>
    
 
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
export default Slide;*/