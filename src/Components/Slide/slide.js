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


const delay = 10000;
const items = [
  
  {id: 1, titleCapi: '🧪 Capi', idadeCapi: '🧬 Idade: 28 anos', alturaCapi: '📏 Altura: 1,65m', pesoCapi: '⚖️ Peso: 70kg', 
          descricao: '📜 Bio: Dona de diversos apelidos: Carpincha, \n Beque, Trombuda, Cachapu, Cunum \n e Cubu, ela está sempre comendo \n alguma coisa no laboratório, a \n despeito das inúmeras broncas que \n já tomou do Prof. Dr. Mamutão. Calma e \n prestativa, prefere realizar seus \n experimentos à tarde. É a veterana que \n já devia ter se formado, mas que \n ninguém quer que vá embora. \n Todes precisam de sua ajuda para \n alguma coisa.', 
          src: Capivara, colors:'#FF5E8C'},

  {id: 2, title: '🧪 Guará', idade:'🧬 Idade: 20 anos', altura:'📏 Altura: 1,90m ', peso:'⚖️ Peso: 80kg', 
          descricao:'📜 Bio: Figura excêntrica, sempre de casaco, \n capuz e fones de ouvido. Fica quieto na \n dele, curtindo o frio polar do ar \n condicionado, enquanto pacientemente \n purifica recursivamente todos os reagentes \n para seus experimentos. Jamais toque em \n suas vidrarias, meticulosamente limpas \n e guardadas de um jeito que só ele \n consegue.', 
          src: Guara, colors:'#00C49F'},

  {id: 4, title: '🧪 Prof. Dr. Mamutão', idade:'🧬 Idade: desconhecida, dizem habitar esse \n laboratório desde o plioceno.', 
          altura:'📏 Altura: 2,01m ', peso:'⚖️ Peso: 127 kg ',
          descricao:'📜 Bio: Apesar da cara sisuda, \n adora uma brincadeira e qualquer \n coisa é motivo para festa. \n Geralmente encontrado em seu \n habitat natural: o laboratório de \n química orgânica em horários não \n convencionais, quando pode realizar \n seus experimentos malucos sem o \n escrutínio des alunes.',
          src: Mamute, colors: '#FF6846'},

  {id: 5, title: '🧪 Miquito', idade:'🧬 Idade: 21 anos', altura:'📏 Altura: 1,60m', peso:'⚖️ Peso: 55kg ', 
          descricao:'📜 Bio: Não se conhece alguém que \n seja mais rápido para montar uma \n coluna de separação ou limpar o \n rotaevaporador. Pena que quase sempre \n tem que recomeçar seus experimentos, \n porque esqueceu algum reagente ou de \n acertar algum parâmetro.',
          src: Mico, colors: '#6B638C'},  

  {id: 6, title: '🧪 Pintada', idade:'🧬 Idade: 19 anos', altura:'📏 Altura: 1,70m ', peso:'⚖️ Peso: 60kg ',
          descricao:'📜 Bio: É a mais nova aluna do laboratório. \n Ainda não sabe muito bem o que fazer da \n vida, então se dedica a várias entidades, \n à atlética e começou recentemente \n uma IC. Com tanta coisa para fazer e \n uma graduação exigente, quase nunca \n está no laboratório, mas dizem que leva \n jeito para coisa, porque tudo o que \n toca dá certo.',
          src: Onca, colors: '#0088FE'},

  {id: 7, title: '🧪 Tuca', idade:'🧬 Idade: 24 anos', altura:'📏 Altura: 1,68m', peso:'⚖️ Peso: 55kg ',
          descricao:'📜 Bio: Figura constante no \n laboratório. Até parece que não \n dorme. Não sabe onde está um \n reagente ou equipamento? É só \n perguntar para o Tuca, ele não só vai \n pegar para você como contar sobre tudo \n que tem acontecido no laboratório.',
          src: Tucano, colors: '#FFBB28'},

  {id: 3, title: '🧪 Cuca', idade:'🧬 Idade: 23 anos', altura:'📏 Altura: 1,75m ', peso:'⚖️ Peso: 69kg',
          descricao:'📜 Bio: Sempre com um livro na mão e uma \n curiosidade científica bem aleatória para \n compartilhar. É a ela que você \n recorre quando o \n Prof. Dr. Mamutão não está por \n perto para tirar a sua dúvida. Não vê \n a hora de terminar a graduação para \n poder passar mais tempo no \n laboratório.',
          src: Jacare, colors: '#FF4430'},
];

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

              <p className="titleCapi">{backgroundColor.titleCapi}</p>
              <p className="ageCapi">{backgroundColor.idadeCapi}</p>
              <p className="heighCapi">{backgroundColor.alturaCapi}</p>
              <p className="weightCapi">{backgroundColor.pesoCapi}</p>

              <p className="textInfo">{backgroundColor.title}</p>
              <p className="age">{backgroundColor.idade}</p>
              <p className="heigh">{backgroundColor.altura}</p>
              <p className="weight">{backgroundColor.peso}</p>
              <p className="bio">{backgroundColor.descricao}</p>
          
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