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
                //aparecerLog(`O jogo acabou! Você ganhou no nível fácil.`)
                
                variaveisIniciais()
            }else{
                logteste = true
            //aparecerLog(`O jogo acabou! Você perder no nivel facil.`)
            variaveisIniciais()
        }
        
        }
        if (JogoNivel == 2){
            if (objPrincipal <= molextraidos && (SomaDificil + SomaFacil || SomaDificilNegacao + SomaFacilNegacao > 0)){ // fazer ao menos 30 mols com 1 trofeu
                logteste = true
                //aparecerLog(`O jogo acabou! Você ganhou no nível médio.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                //aparecerLog(`O jogo acabou! Você perdeu no nivel medio.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 3){
            if (objPrincipal <= molextraidos && (SomaFacil + SomaDificil >= 3 || SomaDificilNegacao + SomaFacilNegacao <= 2)){ //fazer 40 mols com 3 trofeus
                logteste = true
                //aparecerLog(`O jogo acabou! Você ganhou no nível difícil.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                //aparecerLog(`O jogo acabou! Você perdeu no nivel dificil.`)
                variaveisIniciais()
            }
        }
        if (JogoNivel == 4){
            if (objPrincipal <= molextraidos && (SomaDificil >= 2 || SomaDificilNegacao <= 3)){ //fazer 50 mols e ao menos 2 trofeus 
                logteste = true
                //aparecerLog(`O jogo acabou! Você ganhou no nível impossível.`)
                variaveisIniciais()
            }
            else{
                logteste = true
                //aparecerLog(`O jogo acabou! Você perdeu no nivel impossivel.`)
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
    Nao fazer nenhuma modulaçao da Temperatura: ${ModificacaoTemp ? "Não feito por enquanto" : "Não era para ter feito kkk"}<br>
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
*Sobre a função //aparecerLog()
 *  a função mostra uma lista com conteudo das coisas que aconteceram com o jogador
 *  
 */
logList = [] // apenas para aparecer no console

function aparecerLog(logLine, linhaCor = false){ // resolver "comprou H2O"
   
       logList.push(logLine)
       //console.log(logList)
       console.log(logLine)
       const itemLog = document.createElement('li') //cria uma linha na lista
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
    
    var $target = $('#showLog');
    //$target.animate({scrollTop: $target.height()});
    $target.scrollTop(9999999999999999999999999)
    

}
function mudancaDeMolsTotal(){
    if ( molextraidos != molsAnteriores){
        //aparecerLog(`Você conseguiu mais ${molextraidos} mols.`) 
    }
}


function teste() {
    dinheiro = 200
    acao = 200
}