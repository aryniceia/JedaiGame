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
  {id: 1, titleCapi: '🧪 Capi (ela/dela)', idadeCapi: '🧬 Idade: 28 anos', alturaCapi: '📏 Altura: 1,65m', pesoCapi: '⚖️ Peso: 70kg', 
          descricaoCapi: '📜 Bio: Dona de diversos apelidos: Carpin- \n cha, Beque, Trombuda, Cachapu, Cunum e \n Cubu, ela está sempre comendo \n alguma coisa no laboratório, a \n despeito das inúmeras broncas que \n já tomou. \n Calma e prestativa, prefere \n realizar seus experimentos à \n tarde. É a veterana que já devia ter \n se formado, mas que ninguém quer \n que vá embora. Todes precisam de \n sua ajuda para alguma coisa.', 
          src1: Capivara, colors: 'RGBA(211,141,181,0.97)'},

  {id: 2, title: '🧪 Guará (elu/delu)', idade:'🧬 Idade: 20 anos', altura:'📏 Altura: 1,90m ', peso:'⚖️ Peso: 80kg', 
          descricao:'📜 Bio: Figura excêntrica, sempre de \n casaco, capuz e fones de ouvido. \n Fica quieto na delu, curtindo o frio \n polar do ar condicionado, enquanto \n pacientemente purifica \n recursivamente todos os reagentes \n para seus experimentos. Jamais toque \n em suas vidrarias, meticulosamente \n limpas e guardadas de um jeito \n que só elu consegue.', 
          src2: Guara, colors: 'RGBA(211,141,181,0.97)'},

  {id: 4, titleMamute: '🧪 Mestre Mamu', idadeMamute:'🧬 Idade: desconhecida, dizem habitar esse laboratório \n desde o plioceno.', 
          alturaMamute:'📏 Altura: 2,01m ', pesoMamute:'⚖️ Peso: 127 kg ',
          descricaoMamute:'📜 Bio: Apesar da cara sisuda, \n adora uma brincadeira e \n qualquer coisa é motivo \n para festa. Geralmente \n encontrado em seu \n habitat natural: o laboratório \n de química orgânica em \n horários não convencionais, \n quando pode realizar \n seus experimentos malucos sem \n o escrutínio des alunes.',
          src: Mamute, colors: 'RGBA(211,141,181,0.97)'},

  {id: 5, title: '🧪 Miquito (ele/dele)', idade:'🧬 Idade: 21 anos', altura:'📏 Altura: 1,60m', peso:'⚖️ Peso: 55kg ', 
          descricao:'📜 Bio: Não se conhece alguém \n que seja mais rápido para montar \n uma coluna de separação ou limpar \n o rotaevaporador. Pena que quase \n sempre tem que recomeçar seus \n experimentos, porque esqueceu \n algum reagente ou de acertar \n algum parâmetro.',
          src5: Mico, colors: 'RGBA(211,141,181,0.97)'},  

  {id: 6, title: '🧪 Pintada (elu/delu)', idade:'🧬 Idade: 19 anos', altura:'📏 Altura: 1,70m ', peso:'⚖️ Peso: 60kg ',
          descricao:'📜 Bio: É e mais nove alune do \n laboratório. Ainda não sabe muito \n bem o que fazer da vida, então se \n dedica a várias entidades, à \n atlética e começou recentemente \n uma IC. Com tanta coisa para fazer \n e uma graduação exigente, quase \n nunca está no laboratório, mas \n dizem que leva jeito para coisa,\n porque tudo o que toca dá certo.',
          src: Onca, colors: 'RGBA(211,141,181,0.97)'},

  {id: 7, title: '🧪 Tuca (ele/dele)', idade:'🧬 Idade: 24 anos', altura:'📏 Altura: 1,68m', peso:'⚖️ Peso: 55kg ',
          descricao:'📜 Bio: Figura constante no \n laboratório. Até parece que \n não dorme. Não sabe onde \n está um reagente ou equi- \n -pamento? É só perguntar \n para o Tuca, ele não só vai \n pegar para você como contar \n sobre tudo que tem acontecido \n no laboratório.',
          src: Tucano, colors: 'RGBA(211,141,181,0.97)'},

  {id: 3, title: '🧪 Cuca (ela/dela)', idade:'🧬 Idade: 23 anos', altura:'📏 Altura: 1,75m ', peso:'⚖️ Peso: 69kg',
          descricao:'📜 Bio: Sempre com um \n livro  na mão e uma curio- \n sidade científica bem \n  aleatória para compartilhar. \n  É a ela que você recorre quando \n Mestre Mamu não está \n por perto para tirar a sua dúvida. \n Não vê a hora de terminar a \n  graduação para poder passar \n  mais tempo no laboratório.',
          src3: Jacare, colors: 'RGBA(211,141,181,0.97)'},
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
    <Link>
      
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
                <img className="imageCapi" src={backgroundColor.src1} /> {/*Foto apenas da capivara */}
                <img className="imageGuara" src={backgroundColor.src2} /> {/*Foto apenas da lobo guará*/}
                <img className="imageJacare" src={backgroundColor.src3} /> {/*Foto apenas do jacaré*/}
                <img className="imageMico" src={backgroundColor.src5} /> {/*Foto apenas do mico*/}

                {/*Informações específicas*/}
                  {/*Capivara*/}
                    <p className="titleCapi">{backgroundColor.titleCapi}</p>
                    <p className="ageCapi">{backgroundColor.idadeCapi}</p>
                    <p className="heighCapi">{backgroundColor.alturaCapi}</p>
                    <p className="weightCapi">{backgroundColor.pesoCapi}</p>
                    <p className="bioCapi">{backgroundColor.descricaoCapi}</p>
                  {/*Mamute*/}
                    <p className="titleMamute">{backgroundColor.titleMamute}</p>
                    <p className="ageMamute">{backgroundColor.idadeMamute}</p>
                    <p className="heighMamute">{backgroundColor.alturaMamute}</p>
                    <p className="weightMamute">{backgroundColor.pesoMamute}</p>
                    <p className="bioMamute">{backgroundColor.descricaoMamute}</p>

                {/*Informações gerais*/}
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

      <Link route="/select" className='volta'>
        <img alt="Botão de seta para voltar" className="left-one" title="Voltar" src={Arrow}></img>
      </Link>
      {/*<div className="window"></div> //Caixa contendo barra para acrescentar nos detalhes*/}
    </Link>
  );
}

export default Slideshow;