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


const delay = 5000;
//const colors = ["#0088FE", "#00C49F", "#FFBB28", "#0088FE", "#00C49F", "#FFBB28", "#0088FE"];
const items = [
    {id: 1, title: '🧪 Capi', idade: '🧬 Idade: 28 anos', altura: '📏 Altura: 1,65m', peso: '⚖️ Peso: 70kg', 
            descricao: '📜 Bio: Dona de diversos apelidos: Carpincha, Beque, Trombuda, Cachapu, Cunum e Cubu, ela está sempre comendo alguma coisa no laboratório, a despeito das inúmeras broncas que já tomou do Prof. Dr. Mamutão. Calma e prestativa, prefere realizar seus experimentos à tarde. É a veterana que já devia ter se formado, mas que ninguém quer que vá embora. Todes precisam de sua ajuda para alguma coisa.', 
            src: Capivara, colors:'#FF5E8C'},

    {id: 2, title: '🧪 Guará', idade:'🧬 Idade: 20 anos', altura:'📏 Altura: 1,90m ', peso:'⚖️ Peso: 80kg', 
            descricao:'📜 Bio: Figura excêntrica, sempre de casaco, capuz e fones de ouvido. Fica quieto na dele, curtindo o frio polar do ar condicionado, enquanto pacientemente purifica recursivamente todos os reagentes para seus experimentos. Jamais toque em suas vidrarias, meticulosamente limpas e guardadas de um jeito que só ele consegue.', 
            src: Guara, colors:'#00C49F'},

    {id: 3, title: '🧪 Cuca', idade:'🧬 Idade: 23 anos', altura:'📏 Altura: 1,75m ', peso:'⚖️ Peso: 69kg',
            descricao:'📜 Bio: Sempre com um livro na mão e uma curiosidade científica bem aleatória para compartilhar. É a ela que você recorre quando o Prof. Dr. Mamutão não está por perto para tirar a sua dúvida. Não vê a hora de terminar a graduação para poder passar mais tempo no laboratório',
            src: Jacare, colors: '#FF4430'},

    {id: 4, title: '🧪 Prof. Dr. Mamutão', idade:'🧬 Idade: desconhecida, dizem habitar esse laboratório desde o plioceno.', 
            altura:'📏 Altura: 2,01m ', peso:'⚖️ Peso: 127 kg ',
            descricao:'📜 Bio: Apesar da cara sisuda, adora uma brincadeira e qualquer coisa é motivo para festa. Geralmente encontrado em seu habitat natural: o laboratório de química orgânica em horários não convencionais, quando pode realizar seus experimentos malucos sem o escrutínio des alunes.',
            src: Mamute, colors: '#FF6846'},

    {id: 5, title: '🧪 Miquito', idade:'🧬 Idade: 21 anos', altura:'📏 Altura: 1,60m', peso:'⚖️ Peso: 55kg ', 
            descricao:'📜 Bio:Não se conhece alguém que seja mais rápido para montar uma coluna de separação ou limpar o rotaevaporador. Pena que quase sempre tem que recomeçar seus experimentos, porque esqueceu algum reagente ou de acertar algum parâmetro.',
            src: Mico, colors: '#6B638C'},  

    {id: 6, title: '🧪 Pintada', idade:'🧬 Idade: 19 anos', altura:'📏 Altura: 1,70m ', peso:'⚖️ Peso: 60kg ',
            descricao:'📜 Bio: É a mais nova aluna do laboratório. Ainda não sabe muito bem o que fazer da vida, então se dedica a várias entidades, à atlética e começou recentemente uma IC. Com tanta coisa para fazer e uma graduação exigente, quase nunca está no laboratório, mas dizem que leva jeito para coisa, porque tudo o que toca dá certo.',
            src: Onca, colors: '#0088FE'},

    {id: 7, title: '🧪 Tuca', idade:'🧬 Idade: 24 anos', altura:'📏 Altura: 1,68m', peso:'⚖️ Peso: 55kg ',
            descricao:'📜 Bio: Figura constante no laboratório. Até parece que não dorme. Não sabe onde está um reagente ou equipamento? É só perguntar para o Tuca, ele não só vai pegar para você como contar sobre tudo que tem acontecido no laboratório.',
            src: Tucano, colors: '#FFBB28'}
]

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
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
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
            style={{ backgroundColor: backgroundColor.colors }}
          >
              <img className="image-char" src={backgroundColor.src} />
              <p className="textInfo">{backgroundColor.title}</p>
              <p className="textInfo">{backgroundColor.idade}</p>
              <p className="textInfo">{backgroundColor.altura}</p>
              <p className="textInfo">{backgroundColor.peso}</p>
              <p className="textInfo">{backgroundColor.descricao}</p>
          
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