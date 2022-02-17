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
  {id: 1, titleCapi: '🧪 Capi (ela/dela)', idadeCapi: '🧬 Idade: 28 anos', 
          alturaCapi: '📏 Altura: 1,65 m', pesoCapi: '⚖️ Peso: 70 kg', 
          vantagemCapi: '✅ Talento precoce, precisa de menos \n tempo para se formar.',
          desvantagemCapi: '❎ Afobada para comprar recursos, sempre paga mais caro.',
          descricaoCapi: '📜 Bio: Dona de diversos apelidos: Carpincha, \n Beque, Trombuda, Cachapu, Cunum e Cubu,\n ela está sempre comendo alguma \n coisa no laboratório, a despeito das inúme- \n -ras broncas que já tomou. Calma e \n prestativa, prefere realizar seus \n experimentos à tarde. É a veterana que já \n devia ter se formado, mas que ninguém quer \n que vá embora. Todes precisam de \n sua ajuda para alguma coisa.', 
          src1: Capivara, colors: 'RGBA(211,141,181,0.97)'},

  {id: 2, titleGuara: '🧪 Guará (elu/delu)', idadeGuara:'🧬 Idade: 20 anos', alturaGuara:'📏 Altura: 1,90 m ', 
          pesoGuara:'⚖️ Peso: 80 kg',
          vantagemGuara:'✅ Suas reações acontecem com maior probabilidade.',
          desvantagemGuara :'❎  O valor de sua bolsa de estudos precisa ser reajustado.',
          descricaoGuara:'📜 Bio: Figura excêntrica, sempre de \n casaco, capuz e fones de ouvido. \n Fica quieto na delu, curtindo o frio \n polar do ar condicionado, enquanto \n pacientemente purifica \n recursivamente todos os reagentes \n para seus experimentos. Jamais toque \n em suas vidrarias, meticulosamente \n limpas e guardadas de um jeito \n que só elu consegue.', 
          src2: Guara, colors: 'RGBA(211,141,181,0.97)'},

  {id: 4, titleMamute: '🧪 Mestre Mamu', 
          idadeMamute:'🧬 Idade: desconhecida, dizem habitar esse laboratório \n desde o plioceno.', 
          alturaMamute:'📏 Altura: 2,01m ', pesoMamute:'⚖️ Peso: 127 kg ',
          descricaoMamute:'📜 Bio: Apesar da cara sisuda, \n adora uma brincadeira e \n qualquer coisa é motivo \n para festa. Geralmente \n encontrado em seu \n habitat natural: o laboratório \n de química orgânica em \n horários não convencionais, \n quando pode realizar \n seus experimentos malucos sem \n o escrutínio des alunes.',
          src: Mamute, colors: 'RGBA(211,141,181,0.97)'},

  {id: 5, titleMiquito: '🧪 Miquito (ele/dele)', idadeMiquito:'🧬 Idade: 21 anos', 
          alturaMiquito:'📏 Altura: 1,60 m', pesoMiquito:'⚖️ Peso: 55 kg ', 
          vantagemMiquito:'✅ Suas colunas de extração demoram um turno a menos.',
          desvantagemMiquito:'❎ Probabilidade inicial = 30.',
          descricaoMiquito:'📜 Bio: Não se conhece alguém \n que seja mais rápido para montar \n uma coluna de separação ou limpar \n o rotaevaporador. Pena que quase \n sempre tem que recomeçar seus \n experimentos, porque esqueceu \n algum reagente ou de acertar \n algum parâmetro.',
          src5: Mico, colors: 'RGBA(211,141,181,0.97)'},  

  {id: 6, titlePintada: '🧪 Pintada (elu/delu)', idadePintada:'🧬 Idade: 19 anos', 
          alturaPintada:'📏 Altura: 1,70 m ', pesoPintada:'⚖️ Peso: 60 kg ',
          vantagemPintada:'✅ Probabilidade inicial = 60.',
          desvantagemPintada:'❎ Recebe 20% a menos de dinheiro por turno.',
          descricaoPintada:'📜 Bio: É e mais nove alune do \n laboratório. Ainda não sabe muito \n bem o que fazer da vida, então se \n dedica a várias entidades, à \n atlética e começou recentemente \n uma IC. Com tanta coisa para fazer \n e uma graduação exigente, quase \n nunca está no laboratório, mas \n dizem que leva jeito para coisa,\n porque tudo o que toca dá certo.',
          src: Onca, colors: 'RGBA(211,141,181,0.97)'},

  {id: 7, titleTuca: '🧪 Tuca (ele/dele)', idadeTuca:'🧬 Idade: 24 anos', 
          alturaTuca:'📏 Altura: 1,68 m', pesoTuca:'⚖️ Peso: 55 kg ',
          vantagemTuca:'✅ Sem atributos...',
          desvantagemTuca:'❎ Sem atributos...',
          descricaoTuca:'📜 Bio: Figura constante no \n laboratório. Até parece que \n não dorme. Não sabe onde \n está um reagente ou equi- \n -pamento? É só perguntar \n para o Tuca, ele não só vai \n pegar para você como contar \n sobre tudo que tem acontecido \n no laboratório.',
          src: Tucano, colors: 'RGBA(211,141,181,0.97)'},

  {id: 3, titleCuca: '🧪 Cuca (ela/dela)', idadeCuca:'🧬 Idade: 23 anos', 
          alturaCuca:'📏 Altura: 1,75 m ', pesoCuca:'⚖️ Peso: 69 kg',
          vantagemCuca:'✅ Rápida para se formar ->  molMestrado = 6,  molDoutorado = 12.',
          desvantagemCuca:'❎ Custo para melhoria dos equipamentos e uso da coluna rápida +2',
          descricaoCuca:'📜 Bio: Sempre com um \n livro  na mão e uma curio- \n sidade científica bem \n  aleatória para compartilhar. \n  É a ela que você recorre quando \n Mestre Mamu não está \n por perto para tirar a sua dúvida. \n Não vê a hora de terminar a \n  graduação para poder passar \n  mais tempo no laboratório.',
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

      <Link route="/select" className='volta'>
        <img alt="Botão de seta para voltar" className="left-one" title="Voltar" src={Arrow}></img>
      </Link>
      {/*<div className="window"></div> //Caixa contendo barra para acrescentar nos detalhes*/}
    </Link>
  );
}

export default Slideshow;