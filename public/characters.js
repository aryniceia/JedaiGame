// class Character {
//     constructor(name, ){
//         this._name = name
//     }
// }
/**
 * Personagens:
 * 1 - Capivara
 * 2 - Guara
 * 3 - Cuca
 * 4 - Miquito
 * 5 - Pintada
 * 6- Tuca
    Miquito:
        Vantagem: suas colunas de extração demoram um turno a menos;
        Desvantagem: Probabilidade inicial = 30
    Cuca:
        Vantagem: Rápida para se formar ->  molMestrado = 6,  molDoutorado = 12
        Desvantagem: custo para melhoria dos equipamentos e uso da coluna rápida +2, 
    Tuca:
        Vantagem: 30% a mais de dinheiro por turno
        Desvantagem: sua coluna de extração normal demora um turno a mais.
    Pintada:
        Vantagem: Probabilidade inicial = 60
        Desvantagem: recebe 20% a menos de dinheiro por turno.
    Guará:
        Vantagem: Toda compra de triacilglicerídeo vem com 2 mols
        Desvantagem: Toda compra de triacilglicerídeo custa 2 ações
    Capi:
        Vantagem: 1 ação a mais por turno
        Desvantagem: Demora mais para se formar ->  molMestrado = 12, mol, molDoutorado = 18



Colunas de extracao 
Probabilidade Inicial ✅
molMestrado ✅
molDoutorado ✅
Melhoria de equipamentos e uso da coluna rapida
dinheiro por turno  ✅
compra de triacilglicerideo $$$ e Acao
Acao 

*/
// personagem = 0
window.onload = botaoConfirmar
function botaoConfirmar(){
    numeroDoPersonagem = localStorage.getItem('jedai/personagem')
    console.log("ok1")
    var personagem = new PersonagemDefault(1, 2, 3, 4, 5)

    // var personagem = new PersonagemDefault(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
    console.log(personagem.acao)
}
class PersonagemDefault {
    constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
        this.ProbInicial = ProbInicial
        this.molMestrado = molMestrado
        this.molDoutorado = molDoutorado
        this.dinheiro = dinheiro
        this.acao = acao
    }
}
class TestandoEsseKCT {
    constructor(name) {
        this.name = name
    }
    
}
// var personagem = TestandoEsseKCT("Lorran")
// class Capi extends PersonagemDefault {
//     constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
//         // ProbInicial = 40
//         super(ProbInicial)
//         super(molMestrado)
//         super(molDoutorado)
//         super(dinheiro)
//         super(acao)
//         // super(ProbInicial)
//         // super(this.molMestrado)
        
//     }
// }
class Guara extends PersonagemDefault {

}
class Cuca extends PersonagemDefault {

}
class Miquito extends PersonagemDefault {

}
class Pintada extends PersonagemDefault {

}
class Tuca extends PersonagemDefault {

}
// class Developer extends Person {
//     constructor(name, idade){
//         super(name)
//         this._idade = idade
//     }
// }
