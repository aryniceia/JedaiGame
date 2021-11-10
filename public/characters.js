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
        ✅ Vantagem: suas colunas de extração demoram um turno a menos;
        Desvantagem: Probabilidade inicial = 30
    Cuca:
        ✅ Vantagem: Rápida para se formar ->  molMestrado = 6,  molDoutorado = 12
        Desvantagem: custo para melhoria dos equipamentos (2 C mais caro) e uso da coluna rápida +2 (filtrocost e filtroacao + 2), 
    Tuca:
        Vantagem: 30% a mais de dinheiro por turno
        ✅ Desvantagem: sua colunas de extração normal demora um turno a mais.
    Pintada:
        ✅ Vantagem: Probabilidade inicial = 60
        Desvantagem: recebe 20% a menos de dinheiro por turno.
    Guará:
        ✅ Vantagem: Toda compra de triacilglicerídeo vem com 2 mols
        ✅ Desvantagem: Toda compra de triacilglicerídeo custa 2 ações
    Capi:
        ✅ Vantagem: 1 ação a mais por turno
        ✅ Desvantagem: Demora mais para se formar ->  molMestrado = 12, mol, molDoutorado = 18



Colunas de extracao ✅
Probabilidade Inicial ✅
molMestrado ✅
molDoutorado ✅
Melhoria de equipamentos e uso da coluna rapida✅
dinheiro por turno  ✅
compra de triacilglicerideo $$$ e Acao
Acao 

*/
// personagem = 0
class PersonagemDefault {
    constructor(){
        this.ProbInicial = 50
        this.molMestrado = 9
        this.molDoutorado = 15
        this.dinheiro = 10
        this.acao = 2
        this.decantarR1 = 0;
        this.decantarR2 = 0;
        this.decantarR3 = 0;
        this.decantarR4 = 0
        this.decantarR5 = 0
        this.costReagente2 = 5
        this.acaoReagente2 = 1
        this.molReagente2 = 1
    }
    decantar() {
        molextraidos += decantarR4 + filtrarR2
        decantarR4 = decantarR3
        decantarR3 = decantarR2
        decantarR2 = decantarR1
        decantarR1 = 0
        filtrarR2 = filtrarR1
        filtrarR1 = 0
    }
}

class Capi extends PersonagemDefault {
    constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
        super(ProbInicial, dinheiro)
        this.acao = 3
        this.molMestrado = 12
        this.molDoutorado = 18
    }
}
    class Guara extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
            this.acaoReagente2 = 2
            this.molReagente2 = 2
        }
    }
    class Cuca extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, dinheiro, acao)
            this.molMestrado = 6
            this.molDoutorado = 12
        }
    }
    class Miquito extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(molMestrado, molDoutorado, dinheiro, acao)
            this.decantarR1 = 0;
            this.decantarR2 = 0;
            this.decantarR3 = 0;
            this.ProbInicial = 30
        }
        decantar(){
            molextraidos += decantarR3 + filtrarR2
            decantarR3 = decantarR2
            decantarR2 = decantarR1
            decantarR1 = 0
            filtrarR2 = filtrarR1
            filtrarR1 = 0
            console.log("decantarMiquito")
            console.log(this.decantarR1, this.decantarR2, this.decantarR3, this.decantarR4)
        }
    }
    class Pintada extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(molMestrado, molDoutorado, dinheiro, acao)
            this.ProbInicial = 60
        }
    }
    class Tuca extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
        decantar(){
            molextraidos += decantarR5 + filtrarR2
            decantarR5 = decantarR4
            decantarR4 = decantarR3
            decantarR3 = decantarR2
            decantarR2 = decantarR1
            decantarR1 = 0
            filtrarR2 = filtrarR1
            filtrarR1 = 0 
            console.log("passou no Tuca")

        }
    }
    numeroDoPersonagem = parseInt(localStorage.getItem('jedai/personagem'))
    if (numeroDoPersonagem == 1){
        var personagem = new Capi()
    }else if (numeroDoPersonagem == 2){
        var personagem = new Guara()
    }else if (numeroDoPersonagem == 3){
        var personagem = new Cuca()
    }else if (numeroDoPersonagem == 4){
        var personagem = new Miquito()
    }else if (numeroDoPersonagem == 5){
        var personagem = new Pintada()
    }else if (numeroDoPersonagem == 6){
        var personagem = new Tuca()
    }else {
        console.log('error!')
    }


    //motivo de nao ter usado  switch: nao funciona
    // switch (numeroDoPersonagem){
    //     case 1:
    //         var personagem = new Capi(6, 7, 8, 9, 10)
    //     case 2:
    //         var personagem = new Guara()
    //     case 3:
    //         var personagem = new Cuca()
    //     case 4:
    //         var personagem = new Miquito()
    //     case 5:
    //         var personagem = new Pintada()
    //     case 6:
    //         var personagem = new Tuca()
    //     default:
    //         console.log('error!')
    // }
