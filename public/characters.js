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
class PersonagemDefault {
    constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
        this.ProbInicial = ProbInicial
        this.molMestrado = molMestrado
        this.molDoutorado = molDoutorado
        this.dinheiro = dinheiro
        this.acao = acao
    }
}

class Capi extends PersonagemDefault {
    constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
        super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
    }
}
    class Guara extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
    }
    class Cuca extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
    }
    class Miquito extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
    }
    class Pintada extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
    }
    class Tuca extends PersonagemDefault {
        constructor(ProbInicial, molMestrado, molDoutorado, dinheiro, acao){
            super(ProbInicial, molMestrado, molDoutorado, dinheiro, acao)
        }
    }
    numeroDoPersonagem = parseInt(localStorage.getItem('jedai/personagem'))
    if (numeroDoPersonagem == 1){
        var personagem = new Capi(6, 7, 8, 9, 10)
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
