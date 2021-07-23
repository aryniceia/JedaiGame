//DECLARAÇÃO DE VARIAVEIS INÍCIO -----------------
//import { func } from 'assert-plus';
//import React from 'react';
//import ReactDOM from 'react-dom';
NomeJogador = localStorage.getItem('jedai/username')
jogadorName = document.getElementById('nomeJogador').innerHTML = localStorage.getItem('jedai/username')
molsAnteriores = 0
logContagem = 2
logStatus = false
listaLog = document.getElementById('showLog')
logLine = `Você começou o jogo.`
dRdP = 0
logList = []
reagente1 = "Água"
reagente2 = "Triacilglicerídeo"
produto1 = "Glicerol"
produto2 = "Ácido Graxo"
fatorDeConversaoReagente2 = 3
fatorDeConversaoReagente1 = 1
// PH & Temperatura (olhar o PHSinal)
//Manter esses valores maximos em PH e Temp
//// Trofeus:
objPrincipal = 100
//adicionar os preços aqui


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
molMestrado = 9;
molDoutorado = 15;
Faculdade = `Iniciação Científica`;
//Teste A B Grupo A sao dos reagentes, grupo B PH  e C Temperatura
GrupoReagentes = 1; //A = Reagentes
GrupoPH = 2; //B = PH
GrupoTemp = 3; //C = Temperatura
GrupoFiltro = 4;
GrupoPHRT = 0;
//Dinheiro
let dinheiro = 10; //inicio do dinheiro
mesada = 10; //dinheiro ganho cada vez que passa o turno
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
TerminarJogoIC = 0      //dificil
Prob100 = 0        //Modificacao esta em Trofeus()
Prob0 = 0        //Modificacao esta em Trofeus()
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
JogoNivel = 0;
limiteTurnos = 20;
SomaDificil/* Maior que 1*/ = Mestrado11turnos+
Doutorado22turnos+
TerminarJogoIC;
SomaDificilNegacao=
ModificacaoTempPH+ //Negacao
NupgradeEquipamentos; //negacao

SomaFacil = Prob100+
Prob0+
NupgradePH+
NupgradeReator+
NupgradeTemp;

SomaFacilNegacao=
ExtracaoRapida+ //negacao
ModificacaoPH+ //negacao
ModificacaoTemp //negacao


function variaveisIniciais(){
    molsAnteriores = 0
    logContagem = 2
    logStatus = false
    logLine = `Você começou o jogo.`
    dRdP = 0
    logList = []
    reagente1 = "Água"
    reagente2 = "Triacilglicerídeo"
    produto1 = "Glicerol"
    produto2 = "Ácido Graxo"
    fatorDeConversaoReagente2 = 3
    fatorDeConversaoReagente1 = 1
    // PH & Temperatura (olhar o PHSinal)
    //Manter esses valores maximos em PH e Temp
    //// Trofeus:
    objPrincipal = 100
    //adicionar os preços aqui
    
    
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
    molMestrado = 9;
    molDoutorado = 15;
    Faculdade = `Iniciação Científica`;
    //Teste A B Grupo A sao dos reagentes, grupo B PH  e C Temperatura
    GrupoReagentes = 1; //A = Reagentes
    GrupoPH = 2; //B = PH
    GrupoTemp = 3; //C = Temperatura
    GrupoFiltro = 4;
    GrupoPHRT = 0;
    //Dinheiro
    let dinheiro = 10; //inicio do dinheiro
    mesada = 10; //dinheiro ganho cada vez que passa o turno
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
    TerminarJogoIC = 0      //dificil
    Prob100 = 0        //Modificacao esta em Trofeus()
    Prob0 = 0        //Modificacao esta em Trofeus()
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
    JogoNivel = 0;
    limiteTurnos = 20;
    SomaDificil/* Maior que 1*/ = Mestrado11turnos+
    Doutorado22turnos+
    TerminarJogoIC;
    SomaDificilNegacao=
    ModificacaoTempPH+ //Negacao
    NupgradeEquipamentos; //negacao
    
    SomaFacil = Prob100+
    Prob0+
    NupgradePH+
    NupgradeReator+
    NupgradeTemp;
    
    SomaFacilNegacao=
    ExtracaoRapida+ //negacao
    ModificacaoPH+ //negacao
    ModificacaoTemp //negacao
atualizar()
}

//DECLARAÇÃO DE VARIÁVEIS FIM -----------------------

//AÇÕES DE COMPRAR INÍCIO-----------------
//funcoes que mexem na probabilidade
function SubirPH(){ //versao 2 do botao subirPH
    GrupoPHRT = GrupoPH; //definindo qual grupo pertence
    PHsinal = 1; //sinal positivo indica que o PH vai aumentar
    ModificacaoPH = 0;
    fraseLog = `Subiu PH`
    acaoDinheiro(PHcost, PHAcao); // indica a funcao o custo do PH e quantas acoes ele consome
}
function DiminuirPH(){ //botao para diminuir ph
    GrupoPHRT = GrupoPH; //definindo qual grupo pertence
    PHsinal = -1; //sinal negativo indica que PH desce
    ModificacaoPH = 0;
    fraseLog = `Diminuiu PH`
    acaoDinheiro(PHcost, PHAcao);
}

function AumentarTemp(){ //botao para aumentar a temperatura
    GrupoPHRT = GrupoTemp;
    tempSinal = 1;
    ModificacaoTemp = 0;
    fraseLog = `Aumentou Temperatura`
    acaoDinheiro(tempcost, tempAcao);
}

function DiminuirTemp(){ //botao para diminuir a temperatura
    GrupoPHRT = GrupoTemp;
    tempSinal = -1;
    ModificacaoTemp = 0;
    fraseLog = `Diminuiu Temperatura`
    acaoDinheiro(tempcost, tempAcao);
}

function AdicionarH2O(){ //funcao para adicionar agua por meio do botao
    if(molSoma < molMaxReator){ //teste de quantidade de mols no reator
        QualMol = 1;
        GrupoPHRT = GrupoReagentes;
        fraseLog = `Você comprou ${reagente1}`
        acaoDinheiro(costReagente1, acaoReagente1);
    }
}
function AdicionarTri(){ 
    if(molSoma < molMaxReator){ //teste de quantidade de mols no reator
        QualMol = 0;
        GrupoPHRT = GrupoReagentes;
        fraseLog = `Você comprou ${reagente2}`
        acaoDinheiro(costReagente2, acaoReagente2);
    }
}
//AÇÕES DE COMPRAR FIM-----------------

//botoes adicionais
function Proximo(){ //funcao para passar turno
	if(molReagente2 >= fatorDeConversaoReagente1 && molReagente1 >= fatorDeConversaoReagente2){
        probabilidade(ProbDinamica) //ira executar a funcao para saber se a reacao ira ocorrer
		if(resultado == 1){
            logteste = true
		    aparecerLog(`Reagentes foram convertidos em produtos!`)
		    molProduto1 += fatorDeConversaoReagente1
            molProduto2 += fatorDeConversaoReagente2
            molReagente1 -= fatorDeConversaoReagente2 // Duvida se vira 0 ou nao
            molReagente2 -= fatorDeConversaoReagente1 // Idem
            
		}
		else if (resultado == 0){
            logteste = true //apagar todos logteste
		    aparecerLog(`Reagentes não foram convertidos em produtos!`)
		}
    }
    //trmasformar isso em funcao
    acao = 2
    molsAnteriores = molextraidos
    molextraidos += decantarR4 + filtrarR2
    //mudancaDeMolsTotal()
    decantarR4 = decantarR3
    decantarR3 = decantarR2
    decantarR2 = decantarR1
    decantarR1 = 0 
    filtrarR2 = filtrarR1
    filtrarR1 = 0
    //NivelJogador()
    if (dinheiro <= dinheiroMax - mesada){ dinheiro+=mesada}//limite para nao ultrapassar de 30 dinheiros
    else{dinheiro = dinheiroMax }
    turno += 1 //para saber quantos turnos se tem
    Trofeus()
    GameOver()  
    //probabilidadedRdP()
    // ProbabilidadeVolta()
    aparecerLog(`⭐⭐⭐⭐⭐Turno ${turno}⭐⭐⭐⭐⭐`)
    probc()
    eventosAleatorios()
    atualizar()
}
//AÇÕES DE CONVERTER OS MOLS INÍCIO ----------------------
function Decantar(){ //funcao para ir para a extracao longa
	if(molProduto2 >= fatorDeConversaoReagente2 && molProduto1 >= fatorDeConversaoReagente1){
        decantarR1 += molProduto2
		molProduto2 = 0
        molProduto1 = 0
        molReagente1 = 0
        molReagente2 = 0
        PH = 0
        temp = parseInt(temp/2); //a temperatura vai para a metade inteira
        //logLine = `Entrou em processo de decantação.`
        logteste = true
        aparecerLog(`Entrou em processo de decantação.`)
		atualizar()
	}else{
        aparecerLog(`Não há produtos para serem decantados.`, true)
    }     
}
function Filtro(){
    if((molProduto2 >= fatorDeConversaoReagente2 && molProduto1 >= fatorDeConversaoReagente1) && (NivelAtual == NivelMestrado || NivelAtual == NivelDoutorado)){ // Leia-se: se tiver reagentes suficientes e nivel adequado
        GrupoPHRT = GrupoFiltro
        ExtracaoRapida = 1
        acaoDinheiro(filtrocost, filtroAcao)
        aparecerLog(`Entrou em processo de filtragem.`)
        
    }
    else if ((molProduto2 >= fatorDeConversaoReagente1 && molProduto1 >= fatorDeConversaoReagente2) && !(NivelAtual == NivelMestrado || NivelAtual == NivelDoutorado)){
        logteste = true
        aparecerLog(`Você não tem habilidade suficiente para usar o filtro`, true)
    }else{
        aparecerLog(`Você não pode filtrar.`, true)
    }
    
}
function Expurgo(){//funcao para esvaziar o reator
    molReagente1 = molReagente2 = molProduto1 = molProduto2 = PH = temp = 0;
    //TaxaDeReacao(PH,temp);
    //window.probc()
    aparecerLog(`Você jogou fora todos os reagentes e produtos.`)
    atualizar();
}
//AÇÕES DE CONVERTER OS MOLS FIM ----------------------

//FUNÇÕES DE PROBABILIDADE INÍCIO ---------------------
function probabilidade(a){ // a é a probabilidade dinamica
    d100 = Math.floor(Math.random() * 100); //D100
    logteste = true
    aparecerLog(`Você rolou ${d100} no d100`)    
    if (a >= d100){ //caso esteja dentro da probabilidade ela vai ocorrer
        resultado = 1 // resultado para afirmativo na funcao decantar
    }
    else{ //caso o resultado seja desfavoravel
        resultado = 0
    }
}

let ProbInicial = 50; //probabilidade inicial fixa
TaxaDeReacao(PH,temp); //probabilidade que vai mudar sempre
//nao consigo pensar agora algo mais inteligente que fazer o NivelAtual receber NivelIC
NivelAtual = NivelIC;
atualizar();
//funçao que calcula a taxa de reaçao
    function TaxaDeReacao(PHa,tempa){
    
    ProbDinamica = ProbInicial + PHa * (5/2) + tempa * (5/2) + dRdP * 5;
    if (ProbDinamica >= 100){
        ProbDinamica = 100
    }
    }
//FUNÇÕES DE PROBABILIDADE FIM ---------------------


//ainda nao sei onde colocar
function atualizar(){ //funcao para atualizar todas as informacoes de uma so vez
    
    //mudar o nome do h1
                //variaveis que mudam de acordo com a reaçao
jogadorName = document.getElementById('nomeJogador').innerHTML = localStorage.getItem('jedai/username')

rea1 = document.getElementById('reagente001').innerHTML = `${reagente1}`
rea2 = document.getElementById('reagente002').innerHTML = `${reagente2}`
r1 = document.getElementById('reagente01').innerHTML = `${molReagente1} ${reagente1}`;
p1 = document.getElementById('produto01').innerHTML = `${molProduto1} ${produto1}`;
p2 = document.getElementById('produto02').innerHTML = `${molProduto2} ${produto2}`;
r2 = document.getElementById('reagente02').innerHTML = `${molReagente2} ${reagente2}`;
//mudar = document.getElementById('turno').innerHTML = `Esse é o turno ${turno} e você está no nível ${Faculdade}`;
acdin = document.getElementById('acdin').innerHTML = `Você tem ${acao} ações e ${dinheiro} ₵réditos`; // acdin = açao/dinheiro
extracao = document.getElementById('extracao').innerHTML = `${decantarR1} mols no estágio 1 | ${decantarR2} mols no estágio 2 | ${decantarR3} mols no estágio 3 | ${decantarR4} mols no estágio 4`;
temperatura = document.getElementById('temperatura').innerHTML = `${temp} °C`;
ShowPH = document.getElementById('phtotal').innerHTML = `${PH} PH`;
ShowProb = document.getElementById('probabilidade').innerHTML = `${ProbDinamica} % de chance da reação ocorrer.`;   
extracaofiltro = document.getElementById('extracaofiltro').innerHTML = `${filtrarR1} mols no estágio 1 | ${filtrarR2} mols no estágio 2`;
extraido = document.getElementById('totalextraido').innerHTML = `Total ${molextraidos} de mols de ${produto2} extraidos`;
//var interacao = document.getElementById('p#eventosProb').innerHTML = `${evento}`
//var contagemeventos1 = document.getElementById('p#contagemeventos').innerHTML = `${contagemeventos}`
eventosprobabilisticos = document.getElementById('eventos').innerHTML = `${evento}/d100 ${contagemeventos} Botao eventos: ${botaoEventoOnOFF}`
trofeus = document.getElementById('trofeus').innerHTML = 
    `
    Objetivo: ${nivelDoJogo} <br>
    Trofeus adquiridos: <br>
    Mestrado em 11 turnos (Dificil): ${Mestrado11turnos ? "Mestre dos 11 🥇" : "Ainda não 😥"}<br>
    Doutorado em 22 Turnos (Dificil): ${Doutorado22turnos ? "Doutor dos 22 🏆" : "Ainda não 😓"}<br>
    Terminar o jogo com IC (Dificil): ${TerminarJogoIC ? "Impressionante 😲" : "Esse não vai ser fácil hein 🤯"}<br>
    Chegar em probabilidade de 100%: ${Prob100 ? "Essa foi difícil mas conseguiu 🥳" : "Essa você consegue?"}<br>
    Chegar em probabilidade de 0%: ${Prob0 ? "Uhul, conseguiu 😊" : "Ainda não chegou 🤨"}<br>
    Nao fazer nenhuma modulaçao do PH: ${ModificacaoPH ? "Tente não fazer essa 😜" : "Infelizmente não foi dessa vez 😐"}<br>
    Nao fazer nenhuma modulaçao da Temperatura: ${ModificacaoTemp ? "Não feito por enquanto 🤔" : "Não era para ter feito 😔"}<br>
    Nao fazer nenhuma modulaçao do PH e Temperatura (Dificil): ${ModificacaoTempPH ? "Não feito por enquanto 🙂" : "Fez 😵‍💫"}<br>
    Nao usar o método de extraçao rapida: ${ExtracaoRapida ? "Não usado por enquanto 😋" : "Usou #Fail 😣"}<br>
    Nao fazer nenhum upgrade de equipamento (Dificil): ${NupgradeEquipamentos ? "Nenhum feito ainda 😋" : "Poxa, infelizmente você fez 😡"}<br>
    `
}


function acaoDinheiro(ValorRecebido, AcaoRecebida){ // para generalizar o custo das acoes e dinheiro (nao funcionando ainda)
   
    if (ValorRecebido <= dinheiro && AcaoRecebida <= acao){ //caso o dinheiro e acao seja suficiente
        
        //aqui vai entrar uma funcao para de fato mexer nos reagentes, PH e temperatura
        if (GrupoPHRT == GrupoReagentes){
            
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            UsarReagentes(QualMol);
            if (fraseLog){aparecerLog(fraseLog)}
        }
        //esses dois else if verificam se o grupo eh do PH ou temperatura, verifica se a variavel esta entre os maximos ou minimos
        //se tiver no maximo e tiver colocando pra baixo ele passa e o inverso da no mesmo
        //essas duas funçoes estavam quebradas em alguns
        else if ((GrupoPHRT == GrupoTemp) && (temp < tempMax && temp > tempMin) || (temp == tempMax &&  tempSinal == -1 || temp == tempMin && tempSinal == 1)){
            temp += tempSinal; 
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            if (fraseLog){aparecerLog(fraseLog)}

        }
        else if ((GrupoPHRT == GrupoPH) && (PH < PHmax && PH > PHmin) || (PH == PHmax && PHsinal == -1 || PH == PHmin && PHsinal == 1)){ //verificando se pertence ao grupo PH e se pode comprar (entre 4 e -4) (mesma coisa do temperatura)
            PH += PHsinal; 
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida);
            //if (fraseLog){aparecerLog(fraseLog)}
        }
        else if (GrupoPHRT == GrupoFiltro){
            filtrarR1 = molProduto2;
            molProduto2 = 0;
		    molProduto1 = 0;
            temp = parseInt(temp/2); //a temperatura vai para a metade inteira
            PH = 0;
            molReagente1 = 0;
            molReagente2 = 0;
            ProbDinamica = ProbInicial;
            retirarAcaoDinheiro(ValorRecebido, AcaoRecebida); 
        }
        
        else{ 
            if ((PH == PHmax && PHsinal == 1 || PH == PHmin && PHsinal == -1) || (temp == tempMax &&  tempSinal == 1 || temp == tempMin && tempSinal == -1)){
                logteste = true
                aparecerLog(`Já está no seu máximo ou mínimo, não é possivel continuar`, true);
            }
            else {alert(`Erro 404! Not found`);alert(GrupoPHRT)} //nao espero que esse erro seja anunciado na tela, porem precaucao
        }
        logteste = true
        //aparecerLog()
    }
    else{
        logteste = true
        aparecerLog(`Nao pode ser comprado, lhe falta acao ou ₵réditos.`, true)
    }
    fraseLog = false
}

function UsarReagentes(QualReagente){ //funcao para retirar os valores dos reagentes
    
    if (QualReagente == 0){ 
        molReagente2 += 1;
        atualizar()
    }
    else if (QualReagente == 1){
        molReagente1 += 1;
        atualizar()
    }
}

function retirarAcaoDinheiro(din, ac){ //essa funçao vai ser a unica que vai tirar dinheiro e ação
    dinheiro -= din;
    acao -= ac;  
    TaxaDeReacao(PH,temp);
    probc()
    atualizar();
}
//FUNÇÕES DE NÍVEL E UPGRADE INÍCIO ---------------------
function NivelJogador(){
    if(NivelAtual == NivelIC){
        mesada = 10
        acao = 2
        dinheiroMax = 30
    }
    else if (NivelAtual == NivelMestrado){
        mesada = 15
        acao = 4
        dinheiroMax = 35
        Faculdade = `Mestrado`
    }
    else if (NivelAtual == NivelDoutorado){
        mesada = 20
        acao = 6
        dinheiroMax = 40
        Faculdade = `Doutorado`
    }
}
function upgrade(){
    if (NivelAtual == NivelIC && molextraidos >=molMestrado){
        NivelAtual = NivelMestrado;
        molextraidos -= molMestrado;
        PHmax = 4;
        PHmin = -4;
        tempMax = 4;
        tempMin = -4;
        molMaxReator = 12;
        Proximo();
        aparecerLog(`Você passou de nível, agora é ${Faculdade}`);
        
    }
    else if (NivelAtual == NivelMestrado && molextraidos >= molDoutorado){
        NivelAtual = NivelDoutorado;
        molextraidos -= molDoutorado;
        PHmin = -5;
        PHmax = 5;
        tempMax = 5;
        tempMin = -5;
        molMaxReator = 16;
        Proximo();
        logteste = true
        aparecerLog(`Você passou de nível, agora é ${Faculdade}`);
        
    }
}
function upgradeReator(){
	if ((reator < reatorMax && acao>= reatorAcao && dinheiro >=reatorCost) && molMaxReator <= 12){
		reator += 1;
        retirarAcaoDinheiro(reatorCost, reatorAcao);
		molMaxReator += 4;
        NupgradeReator = 1;
		atualizar();
        aparecerLog(`Melhorou seu Reator`)

	}
	else if (molMaxReator >= 16){
        logteste = true
		aparecerLog(`O seu reator já está no nível máximo`);
	}
	else {
        //logteste = true; 
        test = true
        
		aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`, true);
	}
}

function upgradePHmetro(){
	if (PHmetro < PHmetroMax && acao>= PHmetroAcao && dinheiro >=PHmetroCost){
		PHmetro += 1;
		acao -= PHmetroAcao;
		dinheiro -= PHmetroCost;
		PHmax += 1;
		PHmin -= 1; 
        NupgradePH = 1;
		atualizar();
        aparecerLog(`Melhorou seu Peagâmetro`)
	}
	else if (PHmetro == PHmetroMax){
        
		aparecerLog(`O seu pHmetro já está no nível máximo`);
	}
	else {
        
		aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`);
	}
}

function upgradeTermometro(){
	if (termometro < termometroMax && acao>= termometroAcao && dinheiro >=termometroCost){
		termometro += 1;
		acao -= termometroAcao;
		dinheiro -= termometroCost;
		tempMax += 1;
		tempMin -= 1; 
        NupgradeTemp = 1;
		atualizar();
        //aparecerLog(`Melhorou seu Termômetro`)

	}
	else if (termometro == termometroMax){
        logteste = true
		aparecerLog(`O seu termômetro já está no nível máximo.`);
	}
	else {
        logteste = true
		aparecerLog(`Você não tem ações, ₵réditos ou nível suficiente para fazer essa melhoria.`);
	}
}
function Facil(){
    objPrincipal = 18 //Quantidade de mols que precisa extrair
    botaoEventoOnOFF = false
    JogoNivel = 1 
    limiteTurnos = 20
    nivelDoJogo = `Fazer 18 mols em ${limiteTurnos} turnos`
    atualizar()
}
function Medio(){
    objPrincipal = 30
    botaoEventoOnOFF = true
    JogoNivel = 2
    limiteTurnos = 25
    nivelDoJogo = `Fazer 30 mols com 1 trofeu em ${limiteTurnos} turnos`
    atualizar()
}
function Dificil(){
    objPrincipal = 39
    botaoEventoOnOFF = true
    JogoNivel = 3
    limiteTurnos = 30
    nivelDoJogo = `Fazer 40 mols com 3 troufeus em ${limiteTurnos} turnos`
    atualizar()
}
function Impossivel(){
    objPrincipal = 48
    botaoEventoOnOFF = true
    JogoNivel = 4
    limiteTurnos = 30
    nivelDoJogo = `Fazer 50 mols e 2 troufeus dificeis em ${limiteTurnos} turnos`
    atualizar()
}


//FUNÇÕES DE NÍVEL E UPGRADE FIM ---------------------


function eventosAleatorios(){
    logteste = true
    if (botaoEventoOnOFF){
        evento = Math.floor(Math.random() * 100);
        if(evento <=30){
            if(evento <=5){
                if (molextraidos >= 3){
                    molextraidos -= 2
                    contagemeventos += 1
                    
                    aparecerLog(`Eventos aleatórios: Você perdeu 2 mols.`)
                }
            }
            else if (evento <= 15){
                PHsinal = -1
                GrupoPHRT = GrupoPH
                acaoDinheiro(0, 0)
                tempSinal = -1
                GrupoPHRT = GrupoTemp
                contagemeventos += 1
                acaoDinheiro(0, 0)
                aparecerLog(`Eventos aleatórios: Você perdeu temperatura e PH`)
            }
            else{
                dinheiro -= 5
                acao -=1
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você perdeu 5 ₵réditos e 1 ação`)
            }
        }
        else if(evento >= 70){
            if(evento >= 95){
                // eu sei que nada se perde e nada se cria, porem pode ser usada para retirar mols do coleguinha quando tiver interacao
                molextraidos += 3
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você ganhou mais 3 mols`, true )
            }
            else if (evento >= 85){
                tempSinal = 1
                GrupoPHRT = GrupoTemp
                contagemeventos += 1
                acaoDinheiro(0, 0)
                aparecerLog(`Eventos aleatórios: Sua temperatura aumentou`)
            }
            else{
                acao += 2
                dinheiro += 10
                contagemeventos += 1
                aparecerLog(`Eventos aleatórios: Você recebeu mais 2 ações e 10 ₵réditos`)
            }
        }
        else{
            aparecerLog(`Eventos aleatórios: Nada ocorreu`)
        }
    }

}

//FUNÇÕES PARA EXCLUIR INÍCIO------------
//botoes para facilitar os testes
x = 3
function maismol(){ //MUDAR ISSO AQUI DEPOIS!!!!!!!!!!!!!!!!!!!!!
    molextraidos += 3
    if (x > 0){
        x-=1
        console.log(x)
        alert("ok")
    }
    else {
        console.log("else")
    }

    
    
    atualizar()
}function mestra(){ //funçao para somar açao e dinheiro quando necessario
    acao += 10
    dinheiro += 20
    atualizar()
}
function botaoEvento(){botaoEventoOnOFF = !botaoEventoOnOFF; atualizar()}
//FUNÇÕES PARA EXCLUIR FIM ------------
function testelogica(){

}

//Sistemas de trofeus e recompensas
function Trofeus(){
    
    //Mestrado em 11 Turnos
    if (NivelAtual == NivelMestrado && turno <= 11){ 
        Mestrado11turnos = 1
    }
    //Doutorado em 22 turnos
    if (NivelAtual == NivelDoutorado && turno <= 22){
        Doutorado22turnos = 1
    }
    //Chegar em 100% de probabilidade
    if (ProbDinamica >= 100){
        Prob100 = 1
    }
    //Chegar em 0% de probabilidade
    if (Prob0 <= 0){
        Prob0 = 1
    }
    //Aqui significa que vc modificou Temperatura e PH
    if (ModificacaoTemp == 1 || ModificacaoPH == 1){
        ModificacaoTempPH = 1
    }
    //Aqui diz que vc fez upgrade de algum equipamento
    if (NupgradeTemp == 1 || NupgradeReator == 1 || NupgradePH == 1){
        NupgradeEquipamentos = 1
    }
    
}



function GameOver(){
    if (turno > limiteTurnos){ //em 20 turnos
        if (JogoNivel == 1){
            if(molextraidos >= objPrincipal){ //fazer 18 mols em 20 turnos
                logteste = true
                aparecerLog(`O jogo acabou! Você ganhou no nível fácil.`)
                
                variaveisIniciais()
            }else{
                logteste = true
            aparecerLog(`O jogo acabou! Você perder no nivel facil.`)
            variaveisIniciais()
        }
        
        }
        if (JogoNivel == 2){
            if (objPrincipal <= molextraidos && (SomaDificil + SomaFacil || SomaDificilNegacao + SomaFacilNegacao > 0)){ // fazer ao menos 30 mols com 1 trofeu
                logteste = true
                aparecerLog(`O jogo acabou! Você ganhou no nível médio.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                aparecerLog(`O jogo acabou! Você perdeu no nivel medio.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 3){
            if (objPrincipal <= molextraidos && (SomaFacil + SomaDificil >= 3 || SomaDificilNegacao + SomaFacilNegacao <= 2)){ //fazer 40 mols com 3 trofeus
                logteste = true
                aparecerLog(`O jogo acabou! Você ganhou no nível difícil.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                aparecerLog(`O jogo acabou! Você perdeu no nivel dificil.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 4){
            if (objPrincipal <= molextraidos && (SomaDificil >= 2 || SomaDificilNegacao <= 3)){ //fazer 50 mols e ao menos 2 trofeus 
                logteste = true
                aparecerLog(`O jogo acabou! Você ganhou no nível impossível.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                aparecerLog(`O jogo acabou! Você perdeu no nivel impossivel.`)
                variaveisIniciais()
            }
        }
    }
    
}
function QuaisTrofeus(){
    trofeusAdquiridos = 
    `
    Objetivo: ${nivelDoJogo} <br>
    Trofeus adquiridos: <br>
    Mestrado em 11 turnos (Dificil): ${Mestrado11turnos ? "Mestre dos onze" : "Ainda não"}<br>
    Doutorado em 22 Turnos (Dificil): ${Doutorado22turnos ? "Doutor dos 22" : "Ainda não"}<br>
    Terminar o jogo com IC (Dificil): ${TerminarJogoIC ? "Impressionante 'O'" : "Esse não vai ser fácil hein"}<br>
    Chegar em probabilidade de 100%: ${Prob100 ? "Essa foi difícil mas conseguiu" : "Essa você consegue?"}<br>
    Chegar em probabilidade de 0%: ${Prob0 ? "Uhul, conseguiu" : "Ainda não chegou"}<br>
    Nao fazer nenhuma modulaçao do PH: ${ModificacaoPH ? "Tente não fazer essa" : "Infelizmente não foi dessa vez"}<br>
    Nao fazer nenhuma modulaçao da Temperatura: ${ModificacaoTemp ? "Não feito por enquanto" : "Não era para ter feito 😔"}<br>
    Nao fazer nenhuma modulaçao do PH e Temperatura (Dificil): ${ModificacaoTempPH ? "Não feito por enquanto" : "Fez :("}<br>
    Nao usar o método de extraçao rapida: ${ExtracaoRapida ? "Não usado por enquanto" : "Usou #Fail"}<br>
    Nao fazer nenhum upgrade de equipamento (Dificil): ${NupgradeEquipamentos ? "Nenhum feito ainda" : "Poxa, infelizmente você fez"}<br>
    `
}
function probc() {
    if(molReagente2 > 1){ //x
        if(molReagente1 >= 3){ //y
            if(molProduto1 >= 1){ //z
                //f1
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente2 - 1)*5 +(molReagente1 - 3)*5 - molProduto1*20
            }else{
                //f2
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente2 - 1)*5 +(molReagente1 - 3)*5
            }
        }else{ //y > 3 false
            if( molProduto1 >= 1){
                //f3
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente2 - 1)*5 - molProduto1*20
            }else{
                //f4
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente2 - 1)*5
            }
        }
    }else{ //x > 1 false
        if(molReagente1 > 3){
            if(molProduto1 >=1){
                //f5
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente1 - 3)*5 -molProduto1*20
            }else{
                //f6
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH + (molReagente1 - 3)*5
            }
        }else{ //z > 3 false
            if(molProduto1 >=1){
                //f7
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH - molProduto1*20
            }else{
                //f8
                ProbDinamica = ProbInicial - 5*Math.abs(temp) - 5*PH
            }
        }
    }
    atualizar()
}
/*
*Sobre a função aparecerLog()
 *  a função mostra uma lista com conteudo das coisas que aconteceram com o jogador
 *  
 */
logList = [] // apenas para aparecer no console

function aparecerLog(logLine, linhaCor = false){ 
        listaLog = document.getElementById('showLog')

       logList.push(logLine)
       //console.log(logList)
       console.log(logLine)
       itemLog = document.createElement('li') //cria uma linha na lista
       itemLog.setAttribute("id", `logContagem${logContagem}`)
       //itemLog.style.color = 'red'
       
       itemLog.innerHTML = logLine
       listaLog.appendChild(itemLog)
       if (linhaCor){
           document.getElementById(`logContagem${logContagem}`).style.color = 'red'
           logContagem += 1
        }else{
           logContagem = logContagem + 1
        }
    
    $target = $('#showLog');
    //$target.animate({scrollTop: $target.height()});
    $target.scrollTop(9999999999999999999999999)
    

}
function mudancaDeMolsTotal(){
    if ( molextraidos != molsAnteriores){
        aparecerLog(`Você conseguiu mais ${molextraidos} mols.`) 
    }
}