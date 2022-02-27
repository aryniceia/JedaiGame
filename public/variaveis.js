//DECLARAÇÃO DE VARIAVEIS INÍCIO -----------------
//import { func } from 'assert-plus';
//import React from 'react';
//import ReactDOM from 'react-dom';
//NomeJogador = localStorage.getItem('jedai/username')
//jogadorName = document.getElementById('nomeJogador').innerHTML = localStorage.getItem('jedai/username')
tabuleiro = parseInt(localStorage.getItem('jedai/tabuleiro'))
tempoDeJogo = parseInt(localStorage.getItem('jedai/time'))
//equilibrio = true // perguntando se a reação permite conversão
molsAnteriores = 0
logContagem = 2
logStatus = false
listaLog = document.getElementById('showLog')
// logLine = `Você começou o jogo.`
dRdP = 0
logList = []
if (tabuleiro === 1) {
    reagente1 = "Etanol"
    reagente2 = "Triacilglicerídeo"
    produto1 = "Glicerol"
    produto2 = "Biodiesel"
    equilibrio = 0
    reversivel = document.getElementById('reversivel').innerHTML = `→`
    nomeReagente1 = document.getElementById('primeiro-reagente').innerHTML = "+ R1"
    nomeReagente2 = document.getElementById('segundo-reagente').innerHTML = "+ R2"
    maquinario = document.getElementById('maquinario').innerHTML = "da centrífuga"
    refinar = "centrifugação"
    filtrarCentrifugar = document.getElementById('filtrar-centrifugar').innerHTML = "Centrifugar"
    equipamento = "centrifugar"
    //centrifuga
}
if (tabuleiro === 2) {
    reagente1 = "Água"
    reagente2 = "Triacilglicerídeo"
    produto1 = "Glicerol"
    produto2 = "Ácido Graxo"
    equilibrio = 1
    reversivel = document.getElementById('reversivel').innerHTML = `⇌`
    nomeReagente1 = document.getElementById('primeiro-reagente').innerHTML = "+ R1"
    nomeReagente2 = document.getElementById('segundo-reagente').innerHTML = "+ R2"
    maquinario = document.getElementById('maquinario').innerHTML = "da centrifuga"
    refinar = "centrifugação"
    filtrarCentrifugar = document.getElementById('filtrar-centrifugar').innerHTML = "Centrifugar"
    equipamento = "centrifugar"
    //centrifuga
}
if (tabuleiro === 3) {
    reagente1 = "Hidróxido de Sódio"
    reagente2 = "Triacilglicerídeo"
    produto1 = "Glicerol"
    produto2 = "Sal de Ácido Graxo"
    equilibrio = 0
    reversivel = document.getElementById('reversivel').innerHTML = `→`
    nomeReagente1 = document.getElementById('primeiro-reagente').innerHTML = "+ R1"
    nomeReagente2 = document.getElementById('segundo-reagente').innerHTML = "+ R2"
    maquinario = document.getElementById('maquinario').innerHTML = "do filtro"
    refinar = "filtragem"
    filtrarCentrifugar = document.getElementById('filtrar-centrifugar').innerHTML = "Filtrar"
    equipamento = "filtrar"
    //filtro
}
fatorDeConversaoReagente1 = 3
fatorDeConversaoReagente2 = 1
// PH & Temperatura (olhar o PHSinal)
//Manter esses valores maximos em PH e Temp
//// Trofeus:
objPrincipal = 100
//adicionar os preços aqui

//fraseLog = false
// variaveis que mudarão de acordo com cada tabuleiro:
molReagente1 = 0;
molReagente2 = 0;
molProduto1 = 0;
molProduto2 = 0;
molMaxReator = 8; //antigo molMaxR1/R2
molSoma = molReagente1 + molReagente2 + molProduto1 + molReagente2;

let acao = 2;
turno = 1;
//Nível do jogador:
jogoTerminado = false
NivelAtual = 0;
NivelIC = 1;
NivelMestrado = 2;
NivelDoutorado = 3;
NivelMestradoBoolean = false
NivelDoutoradoBoolean = false
// molMestrado = 9;
molDoutorado = 15;
Faculdade = `IC`;
//Teste A B Grupo A sao dos reagentes, grupo B PH  e C Temperatura
GrupoReagentes = 1; //A = Reagentes
GrupoPH = 2; //B = PH
GrupoTemp = 3; //C = Temperatura
GrupoFiltro = 4;
GrupoPHRT = 0;
//Dinheiro
let dinheiro = 10; //inicio do dinheiro
// mesada = 10; //dinheiro ganho cada vez que passa o turno
dinheiroMax = 30; //nao pode superar esse valor

//PH
PH = 0; //inicialmente o PH começará com 0
PHmin = -2; //minimo do PH
PHmax = 2; //maximo do PH
PHcost = 4; //custo do PH para aumentar ou diminuir
PHAcao = 1; //açao para aumentar ou diminuir o PH
//Temperatura
temp = 0; //temperatura inicial em 0
tempMax = 2; //temperatura maxima em 5
tempMin = -2; //temperatura minima em -5
tempcost = 4; //custo da temperatura em dinheiro
tempAcao = 1; //custo da temperatura em açao

//filtro
filtrocost = 15;
filtroAcao = 2;

QualMol = null; //funçao utilizada para saber qual reagente sera aumentado
//custo dos reagentes
costReagente1 = 2; //custo do H2O como 2 dinheiros
costReagente2 = 5; //custo do Triglicerideos como 5
//açao que os reagentes irao gastar podendo ser modificados facilmente por aqui
acaoReagente1 = 1; //numero de açoes para comprar H2O
acaoReagente2 = 1; //

//Método de extração longo
decantarR1 = 0;
decantarR2 = 0;
decantarR3 = 0;
decantarR4 = 0;

//Método de extração curto
filtrarR1 = 0;
filtrarR2 = 0;

extracaoR1 = `${decantarR1} mols no estágio 1 | `
extracaoR2 = `${decantarR2} mols no estágio 2 | `
extracaoR3 = `${decantarR3} mols no estágio 3 | `
extracaoR4 = `${decantarR4} mols no estágio 4 |`

extracaoFiltro1 = `${filtrarR1} mols no estágio 1 | `
extracaoFiltro2 = `${filtrarR2} mols no estágio 2 |`


molextraidos = 0;

rodada = 0;
total = 0;
contRodada = 0; //contagem dentro de uma rodada

evento = 50;
contagemeventos = 0;
mensagemEventos = `Nada ocorreu`;
botaoEventoOnOFF = true;

//colocar depois na funcao variaveisIniciais():

//Reator
molMax = 10; //quantos mols cabem no reator
reatorAcao = 2; // quantas ações são necessárias para fazer o upgrade do reator
reatorCost = 10; // custo para fazer o upgrade do reator
reator = 0; // variável que determina o nível do reator
reatorMax = 4; // variável que determina o máximo de upgrades que podem ser feitos

//PHmetro
PHmin = -2; //minimo do PH
PHmax = 2; //maximo do PH
PHmetroAcao = 1;
PHmetroCost = 3;
PHmetro = 0;
PHmetroMax = 3;

//Termometro
tempMax = 2; //temperatura maxima
tempMin = -2; //temperatura minima
termometroAcao = 1;
termometroCost = 3;
termometro = 0;
termometroMax = 3;

//trofeus e conquistas
Mestrado11turnos = 0    //dificil        Modificacao esta em Trofeus()
Doutorado22turnos = 0   //dificil        Modificacao esta em Trofeus()
TerminarJogoIC = false      //dificil
Prob100 = false        //Modificacao esta em Trofeus()
Prob0 = false        //Modificacao esta em Trofeus()
ExtracaoRapida = true //NEGACAO
ModificacaoPH = true //NEGACAO
ModificacaoTemp = true //NEGACAO
ModificacaoTempPH = true    // NEGACAO dificil        Modificacao esta em Trofeus()
//        Modificacao esta em Trofeus():
NupgradePH = false
NupgradeTemp = false
NupgradeReator = false
NupgradeEquipamentos = 1  //NEGACAO dificil
//Procastinador
trofeusAdquiridos = ``
nivelDoJogo = ``

//Game Over:
JogoNivel = localStorage.getItem('jedai/level');
// SomaDificil/* Maior que 1*/ = Mestrado11turnos +
//     Doutorado22turnos +
//     TerminarJogoIC;
// SomaDificilNegacao =
//     ModificacaoTempPH + //Negacao
//     NupgradeEquipamentos; //negacao

// SomaFacil = Prob100 +
//     Prob0 +
//     NupgradePH +
//     NupgradeReator +
//     NupgradeTemp;

// SomaFacilNegacao =
//     ExtracaoRapida + //negacao
//     ModificacaoPH + //negacao
//     ModificacaoTemp //negacao

function variaveisIniciais() {
    //equilibrio = true // perguntando se a reação permite conversão
    molsAnteriores = 0
    logContagem = 2
    logStatus = false
    listaLog = document.getElementById('showLog')
    logLine = `Você começou o jogo.`
    dRdP = 0
    logList = []
    reagente1 = "Água"
    reagente2 = "Triglicerídeos"
    produto1 = "Glicerol"
    produto2 = "Ácido Graxo"
    fatorDeConversaoReagente1 = 3
    fatorDeConversaoReagente2 = 1
    // PH & Temperatura (olhar o PHSinal)
    //Manter esses valores maximos em PH e Temp
    //// Trofeus:
    objPrincipal = 100
    //adicionar os preços aqui

    //fraseLog = false
    // variaveis que mudarão de acordo com cada tabuleiro:
    molReagente1 = 0;
    molReagente2 = 0;
    molProduto1 = 0;
    molProduto2 = 0;
    molMaxReator = 8; //antigo molMaxR1/R2
    molSoma = molReagente1 + molReagente2 + molProduto1 + molReagente2;

    let acao = 2;
    turno = 1;
    //Nível do jogador:
    NivelAtual = 0;
    NivelIC = 1;
    NivelMestrado = 2;
    NivelDoutorado = 3;
    NivelMestradoBoolean = true
    NivelDoutoradoBoolean = true
    // molMestrado = 9;
    molDoutorado = 15;
    Faculdade = `IC`;
    //Teste A B Grupo A sao dos reagentes, grupo B PH  e C Temperatura
    GrupoReagentes = 1; //A = Reagentes
    GrupoPH = 2; //B = PH
    GrupoTemp = 3; //C = Temperatura
    GrupoFiltro = 4;
    GrupoPHRT = 0;
    //Dinheiro
    let dinheiro = 10; //inicio do dinheiro
    // mesada = 10; //dinheiro ganho cada vez que passa o turno
    dinheiroMax = 30; //nao pode superar esse valor

    //PH
    PH = 0; //inicialmente o PH começará com 0
    PHmin = -2; //minimo do PH
    PHmax = 2; //maximo do PH
    PHcost = 4; //custo do PH para aumentar ou diminuir
    PHAcao = 1; //açao para aumentar ou diminuir o PH
    //Temperatura
    temp = 0; //temperatura inicial em 0
    tempMax = 2; //temperatura maxima em 5
    tempMin = -2; //temperatura minima em -5
    tempcost = 4; //custo da temperatura em dinheiro
    tempAcao = 1; //custo da temperatura em açao

    //filtro
    filtrocost = 15;
    filtroAcao = 2;

    QualMol = null; //funçao utilizada para saber qual reagente sera aumentado
    //custo dos reagentes
    costReagente1 = 2; //custo do H2O como 2 dinheiros
    costReagente2 = 5; //custo do Triglicerideos como 5
    //açao que os reagentes irao gastar podendo ser modificados facilmente por aqui
    acaoReagente1 = 1; //numero de açoes para comprar H2O
    acaoReagente2 = 1; //

    //Método de extração longo
    decantarR1 = 0;
    decantarR2 = 0;
    decantarR3 = 0;
    decantarR4 = 0;

    //Método de extração curto
    filtrarR1 = 0;
    filtrarR2 = 0;

    molextraidos = 0;

    rodada = 0;
    total = 0;
    contRodada = 0; //contagem dentro de uma rodada

    evento = 50;
    contagemeventos = 0;
    mensagemEventos = `Nada ocorreu`;
    botaoEventoOnOFF = true;

    //colocar depois na funcao variaveisIniciais():

    //Reator
    molMax = 10; //quantos mols cabem no reator
    reatorAcao = 2; // quantas ações são necessárias para fazer o upgrade do reator
    reatorCost = 10; // custo para fazer o upgrade do reator
    reator = 0; // variável que determina o nível do reator
    reatorMax = 4; // variável que determina o máximo de upgrades que podem ser feitos

    //PHmetro
    PHmin = -2; //minimo do PH
    PHmax = 2; //maximo do PH
    PHmetroAcao = 1;
    PHmetroCost = 3;
    PHmetro = 0;
    PHmetroMax = 3;

    //Termometro
    tempMax = 2; //temperatura maxima
    tempMin = -2; //temperatura minima
    termometroAcao = 1;
    termometroCost = 3;
    termometro = 0;
    termometroMax = 3;

    //trofeus e conquistas
    Mestrado11turnos = 0    //dificil        Modificacao esta em Trofeus()
    Doutorado22turnos = 0   //dificil        Modificacao esta em Trofeus()
    TerminarJogoIC = false      //dificil
    Prob100 = false        //Modificacao esta em Trofeus()
    Prob0 = false        //Modificacao esta em Trofeus()
    ExtracaoRapida = 1 //NEGACAO
    ModificacaoPH = 1 //NEGACAO
    ModificacaoTemp = 1 //NEGACAO
    ModificacaoTempPH = 1    // NEGACAO dificil        Modificacao esta em Trofeus()
    //        Modificacao esta em Trofeus():
    NupgradePH = 0
    NupgradeTemp = 0
    NupgradeReator = 0
    NupgradeEquipamentos = 1  //NEGACAO dificil
    //Procastinador
    trofeusAdquiridos = ``
    nivelDoJogo = ``

    //Game Over:
    JogoNivel = localStorage.getItem('jedai/level');
    // SomaDificil/* Maior que 1*/ = Mestrado11turnos +
    //     Doutorado22turnos +
    //     TerminarJogoIC;
    // SomaDificilNegacao =
    //     ModificacaoTempPH + //Negacao
    //     NupgradeEquipamentos; //negacao

    // SomaFacil = Prob100 +
    //     Prob0 +
    //     NupgradePH +
    //     NupgradeReator +
    //     NupgradeTemp;

    // SomaFacilNegacao =
    //     ExtracaoRapida + //negacao
    //     ModificacaoPH + //negacao
    //     ModificacaoTemp //negacao

    atualizar()
}

//DECLARAÇÃO DE VARIÁVEIS FIM -----------------------

//AÇÕES DE COMPRAR INÍCIO-----------------
//funcoes que mexem na probabilidade
function SubirPH() { //versao 2 do botao subirPH
    GrupoPHRT = GrupoPH; //definindo qual grupo pertence
    PHsinal = 1; //sinal positivo indica que o PH vai aumentar
    ModificacaoPH = 0;
    fraseLog = `Subiu pH`
    acaoDinheiro(PHcost, PHAcao); // indica a funcao o custo do PH e quantas acoes ele consome

}
function DiminuirPH() { //botao para diminuir ph
    GrupoPHRT = GrupoPH; //definindo qual grupo pertence
    PHsinal = -1; //sinal negativo indica que PH desce
    ModificacaoPH = 0;
    fraseLog = `Diminuiu pH`
    acaoDinheiro(PHcost, PHAcao);

}

function AumentarTemp() { //botao para aumentar a temperatura
    GrupoPHRT = GrupoTemp;
    tempSinal = 1;
    ModificacaoTemp = 0;
    fraseLog = `Aumentou Temperatura`
    acaoDinheiro(tempcost, tempAcao);

}
function DiminuirTemp() { //botao para diminuir a temperatura
    GrupoPHRT = GrupoTemp;
    tempSinal = -1;
    ModificacaoTemp = 0;
    fraseLog = `Diminuiu Temperatura`
    acaoDinheiro(tempcost, tempAcao);
}

function AdicionarH2O() { //funcao para adicionar agua por meio do botao
    if (molSoma <= molMaxReator) { //teste de quantidade de mols no reator
        QualMol = 1;
        GrupoPHRT = GrupoReagentes;
        fraseLog = `Você comprou ${reagente1}`
        acaoDinheiro(costReagente1, acaoReagente1);

    }
}
function AdicionarTri() {
    if (molSoma <= molMaxReator) { //teste de quantidade de mols no reator
        QualMol = 0;
        GrupoPHRT = GrupoReagentes;
        fraseLog = `Você comprou ${reagente2}`
        acaoDinheiro(costReagente2, personagem.acaoReagente2);
    }
}
//AÇÕES DE COMPRAR FIM-----------------

//botoes adicionais
function Proximo() { //funcao para passar turno
    if ((molReagente2 >= fatorDeConversaoReagente2 && molReagente1 >= fatorDeConversaoReagente1) || (molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2)) {
        probabilidade(ProbDinamica) //ira executar a funcao para saber se a reacao ira ocorrer
        if (resultado == 1 && molReagente2 >= fatorDeConversaoReagente2 && molReagente1 >= fatorDeConversaoReagente1) {

            aparecerLog(`Reagentes foram convertidos em produtos!`)
            molProduto1 += fatorDeConversaoReagente2
            molProduto2 += fatorDeConversaoReagente1
            molReagente1 -= fatorDeConversaoReagente1 // Duvida se vira 0 ou nao
            molReagente2 -= fatorDeConversaoReagente2 // Idem
        }
        else if (resultado == 0 && molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2) {
            if (!equilibrio) {
                aparecerLog(`Reagentes não foram convertidos em produtos!`)
                console.log("nao era para aparecer isso!!!!!!")
            } else if (equilibrio) {
                if (molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2) {
                    aparecerLog(`Produtos foram convertidos em reagentes!`)
                    molProduto1 -= fatorDeConversaoReagente2
                    molProduto2 -= fatorDeConversaoReagente1
                    molReagente1 += fatorDeConversaoReagente1 // Duvida se vira 0 ou nao
                    molReagente2 += fatorDeConversaoReagente2 // Idem
                } else {
                    aparecerLog(`Reagentes não foram convertidos em produtos!`)
                }
            }
        }
    }
    molSoma = molReagente1 + molReagente2 + molProduto1 + molProduto2
    // acao = personagem.acao
    molsAnteriores = molextraidos
    personagem.decantarPersonagem()
    // molextraidos += decantarR4 + filtrarR2
    // decantarR4 = decantarR3
    // decantarR3 = decantarR2
    // decantarR2 = decantarR1
    // decantarR1 = 0
    // filtrarR2 = filtrarR1
    // filtrarR1 = 0
    
    
    extracaoR2 = `${decantarR2} mols no estágio 2 | `
    extracaoR3 = `${decantarR3} mols no estágio 3 | `
    extracaoR4 = `${decantarR4} mols no estágio 4 |`

    extracaoFiltro2 = `${filtrarR2} mols no estágio 2 |`


    NivelJogador()
    if (dinheiro <= dinheiroMax - mesada) { dinheiro += mesada }//limite para nao ultrapassar de 30 dinheiros
    else { dinheiro = dinheiroMax }
    turno += 1 //para saber quantos turnos se tem

    GameOver()
    Trofeus()
    
    aparecerLog(`⭐Turno ${turno}⭐`)
    qualProbabilidade()
    eventosAleatorios()
    atualizar()
}
//AÇÕES DE CONVERTER OS MOLS INÍCIO ----------------------
function Decantar() { //funcao para ir para a extracao longa
    if (molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2) {
        decantarR1 += molProduto2
        
        molProduto2 = 0
        molProduto1 = 0
        molReagente1 = 0
        molReagente2 = 0
        PH = 0
        temp = parseInt(temp / 2); //a temperatura vai para a metade inteira

        aparecerLog(`Entrou em processo de decantação.`)
        atualizar()
    } else {
        aparecerLog(`Não há produtos para serem decantados.`, true)
    }
}
function Filtro() {
    if ((molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2) && (NivelAtual == NivelMestrado || NivelAtual == NivelDoutorado)) { // Leia-se: se tiver reagentes suficientes e nivel adequado
        GrupoPHRT = GrupoFiltro
        ExtracaoRapida = 1
        acaoDinheiro(personagem.filtrocost, personagem.filtroAcao)
        aparecerLog(`Entrou em processo de ${refinar}.`)
        ExtracaoRapida = false
        Trofeus()
    }
    else if ((molProduto2 >= fatorDeConversaoReagente2 && molProduto1 >= fatorDeConversaoReagente1) && !(NivelAtual == NivelMestrado || NivelAtual == NivelDoutorado)) {

        aparecerLog(`Você não tem habilidade suficiente para usar o filtro`, true)
    } else {
        aparecerLog(`Você não pode ${equipamento}.`, true)
    }

}

function Expurgo() {//funcao para esvaziar o reator
    molReagente1 = molReagente2 = molProduto1 = molProduto2 = PH = temp = 0;
    qualProbabilidade()
    aparecerLog(`Você jogou fora todos os reagentes e produtos.`)
    atualizar();
}
//AÇÕES DE CONVERTER OS MOLS FIM ----------------------

//FUNÇÕES DE PROBABILIDADE INÍCIO ---------------------
function probabilidade(a) { // a é a probabilidade dinamica
    d100 = Math.floor(Math.random() * 100); //D100

    aparecerLog(`Você rolou ${d100} no d100`)
    if (a >= d100) { //caso esteja dentro da probabilidade ela vai ocorrer
        resultado = 1 // resultado para afirmativo na funcao decantar
    }
    else { //caso o resultado seja desfavoravel
        resultado = 0
    }
}

let ProbInicial = 0; //probabilidade inicial fixa
ProbDinamica = ProbInicial
//TaxaDeReacao(PH,temp); //probabilidade que vai mudar sempre
//nao consigo pensar agora algo mais inteligente que fazer o NivelAtual receber NivelIC
NivelAtual = NivelIC;
atualizar();
//funçao que calcula a taxa de reaçao
function TaxaDeReacao(PHa,tempa){
    
    ProbDinamica = personagem.ProbInicial + PHa * 5 + tempa * 5;
    if (ProbDinamica >= 100){
        ProbDinamica = 100
    }
    Trofeus()
}
function qualProbabilidade(){ //funcao para definir qual funcao de probabilidade sera executada
    if (equilibrio){
        probc()
    }else{
        TaxaDeReacao(PH, temp)
    }
}
//FUNÇÕES DE PROBABILIDADE FIM ---------------------


//ainda nao sei onde colocar
function atualizar() { //funcao para atualizar todas as informacoes de uma so vez------
    molSoma = molReagente1 + molReagente2 + molProduto1 + molReagente2;
    //mudar o nome do h1
    //variaveis que mudam de acordo com a reaçao
    //jogadorName = document.getElementById('nomeJogador').innerHTML = localStorage.getItem('jedai/username')

    rea1 = document.getElementById('reagente001').innerHTML = `${molReagente1} ${reagente1}`
    rea2 = document.getElementById('reagente002').innerHTML = `${molReagente2} ${reagente2}`
    r1 = document.getElementById('reagente01').innerHTML = `${molReagente1} ${reagente1}`;
    p1 = document.getElementById('produto01').innerHTML = `${molProduto1} ${produto1}`;
    p2 = document.getElementById('produto02').innerHTML = `${molProduto2} ${produto2}`;
    r2 = document.getElementById('reagente02').innerHTML = `${molReagente2} ${reagente2}`;
    acdin = document.getElementById('acdin').innerHTML = `💰 ${dinheiro} ₵ ☕ ${acao} 🧪 ${molextraidos} mols ⭐ ${turno} turnos`; // acdin = açao/dinheiro
    NivelGame = document.getElementById('nivelAtual').innerHTML = `${Faculdade}`
    extracaoR1 = `${decantarR1} mols no estágio 1 | `
    extracaoFiltro1 = `${filtrarR1} mols no estágio 1 | `
    decantarCor(decantarR1, 'extracaoR1')
    decantarCor(decantarR2, 'extracaoR2')
    decantarCor(decantarR3, 'extracaoR3')
    if (localStorage.getItem('jedai/personagem') != '4'){
    decantarCor(decantarR4, 'extracaoR4')}

    
    document.getElementById('extracaoR1').innerHTML = extracaoR1
    document.getElementById('extracaoR2').innerHTML = extracaoR2
    document.getElementById('extracaoR3').innerHTML = extracaoR3
    if (localStorage.getItem('jedai/personagem') != '4'){
    document.getElementById('extracaoR4').innerHTML = extracaoR4
    }
    temperatura = document.getElementById('temperatura').innerHTML = `${300 + 10 * temp} K`;
    ShowPH = document.getElementById('phtotal').innerHTML = `${7 + PH / 2} pH`;
    ShowProb = document.getElementById('probabilidade').innerHTML = `${ProbDinamica} % de chance da reação ocorrer.`;
    
    decantarCor(filtrarR1, 'extracaoFiltro1')
    decantarCor(filtrarR2, 'extracaoFiltro2')

    // extracaofiltro = document.getElementById('extracaofiltro').innerHTML = `${filtrarR1} mols no estágio 1 | ${filtrarR2} mols no estágio 2`;
    document.getElementById('extracaoFiltro1').innerHTML = extracaoFiltro1
    document.getElementById('extracaoFiltro2').innerHTML = extracaoFiltro2
    
    
    extraido = document.getElementById('totalextraido').innerHTML = `Total ${molextraidos} de mols de ${produto2} extraídos`;
    //eventosprobabilisticos = document.getElementById('eventos').innerHTML = `${evento}/d100 ${contagemeventos} Botao eventos: ${botaoEventoOnOFF}`
    trofeus = document.getElementById('trofeus').innerHTML =
        `
        • Objetivo: ${nivelDoJogo} <br>
        • Trofeus adquiridos: <br>
        • Mestrado em 11 turnos (Dificil): ${Mestrado11turnos ? "Mestre dos 11 🥇" : "Ainda não 😥"}<br>
        • Doutorado em 22 Turnos (Dificil): ${Doutorado22turnos ? "Doutor dos 22 🏆" : "Ainda não 😓"}<br>
        • Terminar o jogo com IC (Dificil): ${TerminarJogoIC ? "Impressionante 😲" : "Esse não vai ser fácil hein 🤯"}<br>
        • Chegar em probabilidade de 100%: ${Prob100 ? "Essa foi difícil mas conseguiu 🥳" : "Essa você consegue?"}<br>
        • Chegar em probabilidade de 0%: ${Prob0 ? "Uhul, conseguiu 😊" : "Ainda não chegou 🤨"}<br>
        • Não fazer nenhuma modulação do pH: ${ModificacaoPH ? "Tente não fazer essa 😜" : "Infelizmente não foi dessa vez 😐"}<br>
        • Não fazer nenhuma modulação da Temperatura: ${ModificacaoTemp ? "Não feito por enquanto 🤔" : "Não era para ter feito 😔"}<br>
        • Não fazer nenhuma modulação do pH e Temperatura (Dificil): ${ModificacaoTempPH ? "Não feito por enquanto 🙂" : "Fez 😵‍💫"}<br>
        • Não usar o método de extraçao rapida: ${ExtracaoRapida ? "Não usado por enquanto 😋" : "Usou #Fail 😣"}<br>
        • Não fazer nenhum upgrade de equipamento (Dificil): ${NupgradeEquipamentos ? "Nenhum feito ainda 😋" : "Poxa, infelizmente você fez 😡"}<br>
        `
}


function acaoDinheiro(ValorRecebido, AcaoRecebida) { // para generalizar o custo das acoes e dinheiro (nao funcionando ainda)

    if (ValorRecebido <= dinheiro && AcaoRecebida <= acao) { //caso o dinheiro e acao seja suficiente

        //aqui vai entrar uma funcao para de fato mexer nos reagentes, PH e temperatura
        if (GrupoPHRT == GrupoReagentes) {

            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            UsarReagentes(QualMol);
            //erro false
            if (fraseLog != false){
                    aparecerLog(fraseLog)
                }
        }
        //esses dois else if verificam se o grupo eh do PH ou temperatura, verifica se a variavel esta entre os maximos ou minimos
        //se tiver no maximo e tiver colocando pra baixo ele passa e o inverso da no mesmo
        //essas duas funçoes estavam quebradas em alguns
        else if ((GrupoPHRT == GrupoTemp) && (temp < tempMax && temp > tempMin) || (temp == tempMax && tempSinal == -1 || temp == tempMin && tempSinal == 1)) {

            temp += tempSinal;
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            //erro false
            if (fraseLog != false){
                    aparecerLog(fraseLog)
                }

        }
        else if ((GrupoPHRT == GrupoPH) && (PH < PHmax && PH > PHmin) || (PH == PHmax && PHsinal == -1 || PH == PHmin && PHsinal == 1)) { //verificando se pertence ao grupo PH e se pode comprar (entre 4 e -4) (mesma coisa do temperatura)
            PH += PHsinal;
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            //erro false
            if (fraseLog != false){
                    aparecerLog(fraseLog)
                }
        }
        else if (GrupoPHRT == GrupoFiltro) {
            filtrarR1 = molProduto2;
            molProduto2 = 0;
            molProduto1 = 0;
            temp = parseInt(temp / 2); //a temperatura vai para a metade inteira
            PH = 0;
            molReagente1 = 0;
            molReagente2 = 0;
            ProbDinamica = personagem.ProbInicial;
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
        }

        else {
            if ((PH == PHmax && PHsinal == 1 || PH == PHmin && PHsinal == -1) || (temp == tempMax && tempSinal == 1 || temp == tempMin && tempSinal == -1)) {

                aparecerLog(`Já está no seu máximo ou mínimo, não é possivel continuar`, true);
            }
            else { alert(`Erro 404! Not found`); alert(GrupoPHRT) } //nao espero que esse erro seja anunciado na tela, porem precaucao
        }

        //aparecerLog()
    }
    else {

        aparecerLog(`Você não tem ações ou ₵réditos suficientes para efetuar essa compra.`, true)
    }
    qualProbabilidade()
}

function UsarReagentes(QualReagente) { //funcao para retirar os valores dos reagentes

    if (QualReagente == 0) {
        if(localStorage.getItem('jedai/personagem') == '2'){
            molReagente2 += 2;
        } else{
            molReagente2 += 1;
        }
        atualizar()
    }
    else if (QualReagente == 1) {
        molReagente1 += 1;
        atualizar()
    }
}

function retirarAcaoDinheiro(din, ac) { //essa funçao vai ser a unica que vai tirar dinheiro e ação
    dinheiro -= din;
    acao -= ac;
    GrupoPHRT = false
    qualProbabilidade();
    atualizar();
}
//FUNÇÕES DE NÍVEL E UPGRADE INÍCIO ---------------------
function NivelJogador() {
    if (NivelAtual == NivelIC) {
        mesada = personagem.mesada
        acao = personagem.acao
        dinheiroMax = 30
    }
    else if (NivelAtual == NivelMestrado) {
        mesada = personagem.mesadaMestrado
        acao = 4
        dinheiroMax = 35
        Faculdade = `Mestrado`
    }
    else if (NivelAtual == NivelDoutorado) {
        mesada = personagem.mesadaDoutorado
        acao = 6
        dinheiroMax = 40
        Faculdade = `Doutorado`
    }
}
function upgrade() {
    if (NivelAtual == NivelIC && molextraidos >= personagem.molMestrado) {
        NivelAtual = NivelMestrado;
        molextraidos -= personagem.molMestrado;
        PHmax = 4;
        PHmin = -4;
        tempMax = 4;
        tempMin = -4;
        molMaxReator = 12;
        Proximo();
        aparecerLog(`Você passou de nível, agora é ${Faculdade}`);

    }
    else if (NivelAtual == NivelMestrado && molextraidos >= personagem.molDoutorado) {
        NivelAtual = NivelDoutorado;
        molextraidos -= personagem.molDoutorado;
        PHmin = -5;
        PHmax = 5;
        tempMax = 5;
        tempMin = -5;
        molMaxReator = 16;
        Proximo();

        aparecerLog(`Você passou de nível, agora é ${Faculdade}`);

    }
    else if (NivelAtual == NivelDoutorado) {
        aparecerLog(`Você já chegou ao nível máximo`, true)
    }
    else {
        aparecerLog(`Você não tem mols suficiente para melhorar de nível`, true)
    }
}
function upgradeReator() {
    if ((reator < reatorMax && acao >= reatorAcao && dinheiro >= reatorCost) && molMaxReator <= 12) {
        reator += 1;
        retirarAcaoDinheiro(reatorCost, reatorAcao);
        molMaxReator += 4;
        NupgradeReator = 1;
        Trofeus()
        atualizar();
        aparecerLog(`Melhorou seu Reator`)

    }
    else if (molMaxReator >= 16) {

        aparecerLog(`O seu reator já está no nível máximo`);
    }
    else {
        //; 
        test = true

        aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`, true);
    }
}

function upgradePHmetro() {
    if (PHmetro < PHmetroMax && acao >= PHmetroAcao && dinheiro >= personagem.PHmetroCost) {
        PHmetro += 1;
        acao -= PHmetroAcao;
        dinheiro -= personagem.PHmetroCost;
        PHmax += 1;
        PHmin -= 1;
        NupgradePH = 1;
        Trofeus()
        atualizar();
        aparecerLog(`Melhorou seu pHmetro`)
    }
    else if (PHmetro == PHmetroMax) {

        aparecerLog(`O seu pHmetro já está no nível máximo`, true);
    }
    else {

        aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`, true);
    }
}

function upgradeTermometro() {
    if (termometro < termometroMax && acao >= termometroAcao && dinheiro >= personagem.termometroCost) {
        termometro += 1;
        acao -= termometroAcao;
        dinheiro -= personagem.termometroCost;
        tempMax += 1;
        tempMin -= 1;
        NupgradeTemp = 1;
        Trofeus()
        atualizar();
        aparecerLog(`Melhorou sua chapa térmica`)

    }
    else if (termometro == termometroMax) {

        aparecerLog(`A sua chapa térmica já está no nível máximo.`);
    }
    else {

        aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`);
    }
}
//FUNÇÕES DE NÍVEL E UPGRADE FIM ---------------------


function eventosAleatorios() {
    if (localStorage.getItem('jedai/level') == '1') {
        botaoEventoOnOFF = false
    }
    if (botaoEventoOnOFF) {
        evento = Math.floor(Math.random() * 100);
        if (evento <= 30) {
            if (evento <= 5) {
                if (molextraidos >= 3) {
                    molextraidos -= 2
                    contagemeventos += 1

                    aparecerLog(`Eventos aleatórios: Você perdeu 2 mols.`)
                }
            }
            else if (evento <= 15) {
                PHsinal = -1
                GrupoPHRT = GrupoPH
                acaoDinheiro(0, 0)
                tempSinal = -1
                GrupoPHRT = GrupoTemp
                contagemeventos += 1
                acaoDinheiro(0, 0)
                aparecerLog(`Eventos aleatórios: Você perdeu temperatura e pH`)
            }
            else {
                dinheiro -= 5
                acao -= 1
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você perdeu 5 ₵réditos e 1 ação`)
            }
        }
        else if (evento >= 70) {
            if (evento >= 95) {
                // eu sei que nada se perde e nada se cria, porem pode ser usada para retirar mols do coleguinha quando tiver interacao
                molextraidos += 3
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você ganhou mais 3 mols`, true)
            }
            else if (evento >= 85) {
                tempSinal = 1
                GrupoPHRT = GrupoTemp
                contagemeventos += 1
                acaoDinheiro(0, 0)
                aparecerLog(`Eventos aleatórios: Sua temperatura aumentou`)
            }
            else {
                acao += 2
                dinheiro += 10
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você recebeu mais 2 ações e 10 ₵réditos`)
            }
        }
        else {
            aparecerLog(`Eventos aleatórios: Nada ocorreu`)
        }
    }

}

//FUNÇÕES PARA EXCLUIR INÍCIO------------
//botoes para facilitar os testes
x = 3
function maismol() { //MUDAR ISSO AQUI DEPOIS!!!!!!!!!!!!!!!!!!!!!
    molextraidos += 3
    if (x > 0) {
        x -= 1
        console.log(x)
        alert("ok")
    }
    else {
        console.log("else")
    }



    atualizar()
} function mestra() { //funçao para somar açao e dinheiro quando necessario
    acao += 10
    dinheiro += 20
    atualizar()
}
function botaoEvento() { botaoEventoOnOFF = !botaoEventoOnOFF; atualizar() }
//FUNÇÕES PARA EXCLUIR FIM ------------
function testelogica() {

}

//Sistemas de trofeus e recompensas

function Trofeus() {

    //Mestrado em 11 Turnos
    if (turno <= 11) {
        if (NivelAtual >= NivelMestrado) {
            Mestrado11turnos = true
            TrofeusClass.mestre11 = true
            console.log(TrofeusClass.mestre11)
        }
    } 
    //Doutorado em 22 turnos
    if (turno <= 22) {
        if (NivelAtual >= NivelDoutorado){
            Doutorado22turnos = true
            TrofeusClass.doutor22 = true
        }
    }
    //Chegar em 100% de probabilidade
    // Problema: Probabilidade dinamica muda sempre que é mudado algo no Ph e Temp
    // Verificar sempre quando muda a chance da reacao ocorrer
    if (ProbDinamica >= 100) {
        Prob100 = true
    }
    //Chegar em 0% de probabilidade
    if (ProbDinamica <= 0) {
        Prob0 = true
    }
    //Aqui significa que vc modificou Temperatura e PH
    if (!ModificacaoTemp || !ModificacaoPH) {
        ModificacaoTempPH = false
    }
    //Aqui diz que vc fez upgrade de algum equipamento
    if (NupgradeTemp == 1 || NupgradeReator == 1 || NupgradePH == 1) {
        NupgradeEquipamentos = false
    }
    if (jogoTerminado) {
        if (NivelAtual == NivelIC){
            TerminarJogoIC = true
        }
    }
    atualizar()
}


function GameOver() {
    if (turno == tempoDeJogo) { //em X turnos
        jogoTerminado = true
        Trofeus()
        if (JogoNivel == 1) {
            if (molextraidos >= objPrincipal) { //fazer 18 mols em 20 turnos
                aparecerLog(`O jogo acabou! Você ganhou no nível fácil.`)
                //variaveisIniciais()
            } else {
                aparecerLog(`O jogo acabou! Você perdeu no nível fácil.`)
                //variaveisIniciais()
            }

        }
        if (JogoNivel == 2) {
            if (molextraidos >= objPrincipal && (SomaDificil + SomaFacil || SomaDificilNegacao + SomaFacilNegacao > 0)) { // fazer ao menos 30 mols com 1 trofeu

                aparecerLog(`O jogo acabou! Você ganhou no nível médio.`)
                variaveisIniciais()
            }
            else {

                aparecerLog(`O jogo acabou! Você perdeu no nível médio.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 3) {
            if (molextraidos >= objPrincipal && (SomaFacil + SomaDificil >= 3 || SomaDificilNegacao + SomaFacilNegacao <= 2)) { //fazer 40 mols com 3 trofeus

                aparecerLog(`O jogo acabou! Você ganhou no nível difícil.`)
                variaveisIniciais()
            }
            else {

                aparecerLog(`O jogo acabou! Você perdeu no nível difícil.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 4) {
            if (molextraidos >= objPrincipal && (SomaDificil >= 2 || SomaDificilNegacao <= 3)) { //fazer 50 mols e ao menos 2 trofeus 

                aparecerLog(`O jogo acabou! Você ganhou no nível impossível.`)
                variaveisIniciais()
            }
            else {

                aparecerLog(`O jogo acabou! Você perdeu no nível impossível.`)
                variaveisIniciais()
            }
        }
        FimDeJogo()
    }
}

function FimDeJogo() {
    var avaliacao = confirm(`Sua pesquisa acabou ${localStorage.getItem('jedai/username')}, tente novamente :( \n\nResultados do Jogo:
        • ⭐ Turnos: ${turno}
        • 🧪 Mol: ${molextraidos}
        • 💰 Dinheiro: ${dinheiro} ₵  \n\n Gostou do jogo? Então avalie, sua opinião é muito importante!
    `)
    if (avaliacao == true) {
        window.open("https://forms.gle/idu625JeWDG4sS6G8", "_blank");
    } 
    else {
        window.location.href="./select"
        alert("Não desanime, vamos retomar a sua pesquisa!")
    }
    
    variaveisIniciais()
}

class TrofeusClass {
    mestre11 = false
    doutor22 = false
    terJGIC = false
    ProbabilidadeEm100 = false
    ProbabilidadeEm0 = false
    NaoModificarPH = true
    NaoModificarTemp = true
    NaoModificarPHeTemp = true
    NaoUsarMetodoExtracaoRapida = true
    NaoFazerUpgrade = true
}
TrofeusJogador = TrofeusClass()
/*
*Sobre a função aparecerLog()
 *  a função mostra uma lista com conteudo das coisas que aconteceram com o jogador
 *  
 */
logList = [] // apenas para aparecer no console

function aparecerLog(logLine, linhaCor = false) {
    listaLog = document.getElementById('showLog')

    logList.push(logLine)
    console.log(logLine)
    itemLog = document.createElement('li') //cria uma linha na lista
    itemLog.setAttribute("id", `logContagem${logContagem}`)
    //itemLog.style.color = 'red'

    itemLog.innerHTML = logLine
    listaLog.appendChild(itemLog)
    if (linhaCor) {
        document.getElementById(`logContagem${logContagem}`).style.color = '#FF7F24'
        logContagem += 1
    } else {
        logContagem = logContagem + 1
    }

    $target = $('#showLog');
    //$target.animate({scrollTop: $target.height()});
    $target.scrollTop(9999999999999999999999999)
    fraseLog = false
}
function mudancaDeMolsTotal() {
    if (molextraidos != molsAnteriores) {
        aparecerLog(`Você conseguiu mais ${molextraidos} mols.`)
    }
}
function probc() {
    if (molReagente2 > 1) { //x
        if (molReagente1 >= 3) { //y
            if (molProduto1 >= 1) { //z
                //f1
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente2 - 1) * 5 + (molReagente1 - 3) * 5 - molProduto1 * 20
            } else {
                //f2
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente2 - 1) * 5 + (molReagente1 - 3) * 5
            }
        } else { //y > 3 false
            if (molProduto1 >= 1) {
                //f3
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente2 - 1) * 5 - molProduto1 * 20
            } else {
                //f4
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente2 - 1) * 5
            }
        }
    } else { //x > 1 false
        if (molReagente1 > 3) {
            if (molProduto1 >= 1) {
                //f5
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente1 - 3) * 5 - molProduto1 * 20
            } else {
                //f6
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH + (molReagente1 - 3) * 5
            }
        } else { //z > 3 false
            if (molProduto1 >= 1) {
                //f7
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH - molProduto1 * 20
            } else {
                //f8
                ProbDinamica = personagem.ProbInicial - 5 * Math.abs(temp) - 5 * PH
            }
        }
    }
    Trofeus()
    atualizar()
}


function confirmacao() {
    JogoNivel = localStorage.getItem('jedai/level')
    console.log(JogoNivel)
}

if (JogoNivel == 1) {
    objPrincipal = 18 //Quantidade de mols que precisa extrair
    botaoEventoOnOFF = false
    botaoEvento()
    nivelDoJogo = `Fazer 18 mols em ${tempoDeJogo} turnos`
    aparecerLog(`Fazer 18 mols em ${tempoDeJogo} turnos`)
    atualizar()
}
if (JogoNivel == 2) {
    objPrincipal = 30
    botaoEventoOnOFF = true
    nivelDoJogo = `Fazer 30 mols com 1 trofeu em ${tempoDeJogo} turnos`
    aparecerLog(`Fazer 30 mols com 1 trofeu em ${tempoDeJogo} turnos`)
    atualizar()
}
if (JogoNivel == 3) {
    objPrincipal = 39
    botaoEventoOnOFF = true
    nivelDoJogo = `Fazer 40 mols com 3 troféus em ${tempoDeJogo} turnos`
    aparecerLog(`Fazer 40 mols com 3 troféus em ${tempoDeJogo} turnos`)
    atualizar()
}
if (JogoNivel == 4) {
    objPrincipal = 48
    botaoEventoOnOFF = true
    nivelDoJogo = `Fazer 50 mols e 2 troféus dificeis em ${tempoDeJogo} turnos`
    aparecerLog(`Fazer 50 mols e 2 troféus dificeis em ${tempoDeJogo} turnos`)
    atualizar()
}

function loop() {
    while (true) {
        Proximo()
    }
}

function teste() {
    dinheiro = 200
    acao = 200
}




//o arquivo que estou trabalhando é o select.js
//localStorage.getItem('jedai/level') variavel de nivel
//localStorage.getItem('jedai/time') variavel de rodadas de jogo
//localStorage.getItem('jedai/tabuleiro')


//acertar probabilidade *resolvido*
//quebrar loop game over (alert) *depende do front*
//troufeus *aparentemente resolvido*
//resolver iniciacao cientifica *resolvido*

/*

// falta resolver:
*/
function botaoConfirmar(){
    personagem = localStorage.getItem('jedai/personagem')
    console.log(personagem)
    testedepersonagens = 1
    mudarStatus()
}
function mudarStatus(){
    testedepersonagens = 1
    console.log(testedepersonagens)
}
function decantarCor(decantarColorido, qualID) {
    if (decantarColorido) {
        document.getElementById(`${qualID}`).style.color = 'red'
    }else{ 
        document.getElementById(`${qualID}`).style.color = 'white'
    }
}


//desligar botao eventos aletaorios no nivel facil
//localStorage.getItem('jedai/level') nivel do jogo
//localStorage.getItem('jedai/personagem')