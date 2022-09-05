import React from 'react';
//import Carousel from 'react-elastic-carousel';
import Link from '../../Components/Link/link';
import Arrow from '../../img/elements/arrowL.png';
import './slide.css'
/*import testHover from '../../sound/buttonHover.mp3' //som do hover*/

//Importações das imagens dos personagens//
import Capivara from '../../img/char/capivara.png';
import Guara from '../../img/char/guara.png';
import Jacare from '../../img/char/jacare.png';
import Mamute from '../../img/char/mamute.png';
import Mico from '../../img/char/mico.png';
import Onca from '../../img/char/onca.png';
import Tucano from '../../img/char/tucano.png';

/* Hover Sound Effect */
  /*function hoverSound  () {
    let teste = new Audio(testHover);
    //teste.src = 'https://www.soundjay.com/buttons/sounds/button-20.mp3';
    teste.play();
  }*/

const delay = 1000000000;
const items = [

  {id: 4, titleMamute: '🧪 Mestre Mamu', 
          idadeMamute:'🧬 Idade: desconhecida, dizem habitar esse laboratório desde o plioceno.', 
          alturaMamute:'📏 Altura: 2,01m ', pesoMamute:'⚖️ Peso: 127 kg ',
          descricaoMamute:'📜 Bio: Apesar da cara sisuda, \n adora uma brincadeira e \n qualquer coisa é motivo \n para festa. Geralmente \n encontrado em seu \n habitat natural: o \n laboratório de química \n orgânica em horários \n não convencionais, \n quando pode realizar \n seus experimentos malucos sem \n o escrutínio des alunes.',
          src4: Mamute, colors: 'RGBA(211,141,181,0.97)'},

  {id: 2, titleGuara: '🧪 Guará (elu/delu)', idadeGuara:'🧬 Idade: 20 anos', alturaGuara:'📏 Altura: 1,90 m ', 
          pesoGuara:'⚖️ Peso: 80 kg',
          vantagemGuara:'✅ Seu triacilglicerídeo é mais puro.',
          desvantagemGuara :'❎ Purificar reagentes dá mais trabalho.',
          descricaoGuara:'📜 Bio: Figura excêntrica, sempre de casaco, \n capuz e fones de ouvido. Fica quieto na delu, \n curtindo o frio polar do ar \n condicionado, enquanto \n pacientemente purifica \n recursivamente todos os \n reagentes para seus \n experimentos. Jamais toque \n em suas vidrarias, \n meticulosamente limpas e \n guardadas de um jeito que só \n elu consegue.', 
          src2: Guara, colors: 'RGBA(211,141,181,0.97)'},

  {id: 5, titleMiquito: '🧪 Miquito (ele/dele)', idadeMiquito:'🧬 Idade: 21 anos', 
          alturaMiquito:'📏 Altura: 1,60 m', pesoMiquito:'⚖️ Peso: 55 kg ', 
          vantagemMiquito:'✅ Suas extrações são mais rápidas.',
          desvantagemMiquito:'❎ Suas reações acontecem com menor probabilidade.',
          descricaoMiquito:'📜 Bio: Não se conhece \n alguém que seja mais rá- \n -pido para montar uma \n coluna de separação ou \n limpar o rotaevaporador. \n Pena que quase sempre \n tem que recomeçar seus \n experimentos, porque \n esqueceu algum reagente \n ou de acertar algum \n parâmetro.',
          src5: Mico, colors: 'RGBA(211,141,181,0.97)'},  

  {id: 6, titlePintada: '🧪 Pintada (elu/delu)', idadePintada:'🧬 Idade: 19 anos', 
          alturaPintada:'📏 Altura: 1,70 m ', pesoPintada:'⚖️ Peso: 60 kg ',
          vantagemPintada:'✅ Suas reações acontecem com maior probabilidade.',
          desvantagemPintada:'❎ O valor de sua bolsa precisa ser reajustado.',
          descricaoPintada:'📜 Bio: É e mais nove \n alune do laboratório. \n Ainda não sabe muito bem o \n que fazer da vida, então \n se dedica a várias entidades, \n à atlética e começou \n recentemente uma IC. Com \n tanta coisa para fazer \n e uma graduação exigente, \n quase nunca está no \n laboratório, mas dizem que \n leva jeito para coisa, \n porque tudo o que toca dá \n certo.',
          src6: Onca, colors: 'RGBA(211,141,181,0.97)'},

  {id: 7, titleTuca: '🧪 Tuca (ele/dele)', idadeTuca:'🧬 Idade: 24 anos', 
          alturaTuca:'📏 Altura: 1,68 m', pesoTuca:'⚖️ Peso: 55 kg ',
          vantagemTuca:'✅❎ 5 bola é 10!',
          /*desvantagemTuca:'❎ Sem atributos...',*/
          descricaoTuca:'📜 Bio: Figura constante \n no laboratório. Até \n parece que não dorme. \n Não sabe onde está \n um reagente ou equi- \n -pamento? É só per- \n -guntar para o Tuca, ele \n não só vai pegar para \n você como contar sobre \n tudo que tem acontecido \n no laboratório.',
          src7: Tucano, colors: 'RGBA(211,141,181,0.97)'},

  {id: 3, titleCuca: '🧪 Cuca (ela/dela)', idadeCuca:'🧬 Idade: 23 anos', 
          alturaCuca:'📏 Altura: 1,75 m ', pesoCuca:'⚖️ Peso: 69 kg',
          vantagemCuca:'✅ Talento precoce, precisa de menos tempo para se formar.',
          desvantagemCuca:'❎ Afobada para comprar recursos, sempre paga mais caro.',
          descricaoCuca:'📜 Bio: Sempre com um \n livro  na mão e uma \n curiosidade cientí- \n -fica bem aleatória \n para compartilhar. \n É a ela que você \n recorre quando Mestre \n Mamu não está por perto \n para tirar a sua dúvida. \n Não vê a hora de termi- \n -nar a graduação para \n poder passar mais tempo \n no laboratório.',
          src3: Jacare, colors: 'RGBA(211,141,181,0.97)'},

  {id: 1, titleCapi: '🧪 Capi (ela/dela)', idadeCapi: '🧬 Idade: 28 anos', 
          alturaCapi: '📏 Altura: 1,65 m', pesoCapi: '⚖️ Peso: 70 kg', 
          vantagemCapi: '✅ Eficiente, faz mais em \n menos tempo.',
          desvantagemCapi: '❎ Sem stress para se formar, \n mesmo que demore mais.',
          descricaoCapi: '📜 Bio: Dona de diversos apelidos: \n Carpincha, Beque, Trombuda, Cachapu, \n Cunum e Cubu, ela está sempre \n comendo alguma coisa no laborató- \n -rio, a despeito das inúmeras \n broncas que já tomou. Calma e \n prestativa, prefere realizar seus \n experimentos à tarde. É a veterana \n que já devia ter se formado, mas \n que ninguém quer que vá embora. \n Todes precisam de sua ajuda para \n alguma coisa.',
          src1: Capivara, colors: 'RGBA(211,141,181,0.97)'},

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
                <img className="imageMamu" src={backgroundColor.src4} /> {/*Foto apenas do mamute*/}
                <img className="imageMico" src={backgroundColor.src5} /> {/*Foto apenas do mico*/}
                <img className="imagePintada" src={backgroundColor.src6} /> {/*Foto apenas do onça*/}
                <img className="imageTuca" src={backgroundColor.src7} /> {/*Foto apenas do tucano*/}

                {/*Informações específicas*/}
                  {/*Capivara*/}
                    <p className="titleCapi">{backgroundColor.titleCapi}</p>
                    <p className="ageCapi">{backgroundColor.idadeCapi}</p>
                    <p className="heighCapi">{backgroundColor.alturaCapi}</p>
                    <p className="weightCapi">{backgroundColor.pesoCapi}</p>
                    <p className="advantageCapi">{backgroundColor.vantagemCapi}</p>
                    <p className="disadvantageCapi">{backgroundColor.desvantagemCapi}</p>
                    <p className="bioCapi">{backgroundColor.descricaoCapi}</p>
                  {/*Guará*/}
                    <p className="titleGuara">{backgroundColor.titleGuara}</p>
                    <p className="ageGuara">{backgroundColor.idadeGuara}</p>
                    <p className="heighGuara">{backgroundColor.alturaGuara}</p>
                    <p className="weightGuara">{backgroundColor.pesoGuara}</p>
                    <p className="advantageGuara">{backgroundColor.vantagemGuara}</p>
                    <p className="disadvantageGuara">{backgroundColor.desvantagemGuara}</p>
                    <p className="bioGuara">{backgroundColor.descricaoGuara}</p>
                  {/*Mamute*/}
                    <p className="titleMamute">{backgroundColor.titleMamute}</p>
                    <p className="ageMamute">{backgroundColor.idadeMamute}</p>
                    <p className="heighMamute">{backgroundColor.alturaMamute}</p>
                    <p className="weightMamute">{backgroundColor.pesoMamute}</p>
                    <p className="bioMamute">{backgroundColor.descricaoMamute}</p>
                  {/*Miquito*/}
                    <p className="titleMiquito">{backgroundColor.titleMiquito}</p>
                    <p className="ageMiquito">{backgroundColor.idadeMiquito}</p>
                    <p className="heighMiquito">{backgroundColor.alturaMiquito}</p>
                    <p className="weightMiquito">{backgroundColor.pesoMiquito}</p>
                    <p className="advantageMiquito">{backgroundColor.vantagemMiquito}</p>
                    <p className="disadvantageMiquito">{backgroundColor.desvantagemMiquito}</p>
                    <p className="bioMiquito">{backgroundColor.descricaoMiquito}</p>
                  {/*Pintada*/}
                    <p className="titlePintada">{backgroundColor.titlePintada}</p>
                    <p className="agePintada">{backgroundColor.idadePintada}</p>
                    <p className="heighPintada">{backgroundColor.alturaPintada}</p>
                    <p className="weightPintada">{backgroundColor.pesoPintada}</p>
                    <p className="advantagePintada">{backgroundColor.vantagemPintada}</p>
                    <p className="disadvantagePintada">{backgroundColor.desvantagemPintada}</p>
                    <p className="bioPintada">{backgroundColor.descricaoPintada}</p>
                  {/*Cuca*/}
                    <p className="titleCuca">{backgroundColor.titleCuca}</p>
                    <p className="ageCuca">{backgroundColor.idadeCuca}</p>
                    <p className="heighCuca">{backgroundColor.alturaCuca}</p>
                    <p className="weightCuca">{backgroundColor.pesoCuca}</p>
                    <p className="advantageCuca">{backgroundColor.vantagemCuca}</p>
                    <p className="disadvantageCuca">{backgroundColor.desvantagemCuca}</p>
                    <p className="bioCuca">{backgroundColor.descricaoCuca}</p>
                  {/*Tuca*/}
                    <p className="titleTuca">{backgroundColor.titleTuca}</p>
                    <p className="ageTuca">{backgroundColor.idadeTuca}</p>
                    <p className="heighTuca">{backgroundColor.alturaTuca}</p>
                    <p className="weightTuca">{backgroundColor.pesoTuca}</p>
                    <p className="advantageTuca">{backgroundColor.vantagemTuca}</p>
                    <p className="disadvantageTuca">{backgroundColor.desvantagemTuca}</p>
                    <p className="bioTuca">{backgroundColor.descricaoTuca}</p>

                {/*Informações gerais
                  <p className="textInfo">{backgroundColor.title}</p>
                  <p className="age">{backgroundColor.idade}</p>
                  <p className="heigh">{backgroundColor.altura}</p>
                  <p className="weight">{backgroundColor.peso}</p>
                  <p className="advantage">{backgroundColor.vantagem}</p>
                  <p className="disadvantage">{backgroundColor.desvantagem}</p>
                  <p className="bio">{backgroundColor.descricao}</p>*/}  
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
      
      <div /*onMouseOver={hoverSound}*/>
        <Link route="/select"  className='volta'>
          <img alt="Botão de seta para voltar" className="left-one" title="Voltar" src={Arrow}></img>
        </Link>
      </div>
      {/*<div className="window"></div> //Caixa contendo barra para acrescentar nos detalhes*/}
    </Link>
  );
}

export default Slideshow;