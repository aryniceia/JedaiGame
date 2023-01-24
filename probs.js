// Houve uma pequena confusão e a reação que está implementada é a de produção de sabão

// Na função Proximo() temos que adicionar a possibilidade dos produtos serem convertidos de volta a reagentes.

// adicionei uma nova variável equilibrio: 0 não é reação de equilíbrio, 1 é reação de equilíbrio e tem um if a mais para verificar.

// Tentativa (não testada) de implementação da função Proximo() com a possibilidade de produtos serem convertidos em reagentes para reações de equilíbrio.

function Proximo(){ //funcao para passar turno
	if((molReagente2 >= fatorDeConversaoReagente2 && molReagente1 >= fatorDeConversaoReagente1) || (molProduto2 >= fatorDeConversaoReagente2 && molProduto1 >= fatorDeConversaoReagente1)){
		probabilidade(ProbDinamica) //ira executar a funcao para saber se a reacao ira ocorrer
		if(resultado == 1){
		    alert(`Reagentes foram convertidos em produtos!`)
		    molProduto1 += fatorDeConversaoReagente2
            	    molProduto2 += fatorDeConversaoReagente1
            	    molReagente1 -= fatorDeConversaoReagente1 // Duvida se vira 0 ou nao
           	    molReagente2 -= fatorDeConversaoReagente2 // Idem
		}
		else if (resultado == 0){
			if(equilibrio==0){
		    		alert(`Reagentes não foram convertidos em produtos!`)
		    	}
		    	else if(equilibrio==1) {
				if(molProduto2 >= fatorDeConversaoReagente2 && molProduto1 >= fatorDeConversaoReagente1){
		    			alert(`Produtos foram convertidos em reagentes!`)
		    			molProduto1 -= fatorDeConversaoReagente2
            	    			molProduto2 -= fatorDeConversaoReagente1
            	    			molReagente1 += fatorDeConversaoReagente1 // Duvida se vira 0 ou nao
           	    			molReagente2 += fatorDeConversaoReagente2 // Idem
           	    		}
           	    		else{alert(`Reagentes não foram convertidos em produtos!`)}
		    	}
		}
    }
    //trmasformar isso em funcao
acao = 2
molextraidos += decantarR4 + filtrarR2
decantarR4 = decantarR3
decantarR3 = decantarR2
decantarR2 = decantarR1
decantarR1 = 0 
filtrarR2 = filtrarR1
filtrarR1 = 0
NivelJogador()
turno += 1 //para saber quantos turnos se tem
if (dinheiro <= dinheiroMax - mesada){ dinheiro+=mesada}//limite para nao ultrapassar de 30 dinheiros
else{dinheiro = dinheiroMax }
eventosAleatorios()
Trofeus()
atualizar()
	                    
}



//funçao que calcula a taxa de reaçao -> função de probabilidade para as reações Biodiesel e Sabão
	function TaxaDeReacao(PHa,tempa){
	ProbDinamica = ProbInicial + PHa * 5 + tempa * 5;
    if (ProbDinamica >= 100){
        ProbDinamica = 100
    }
	}
	
	
// tem que escrever o adendo para a probabilidade da reação do Ac. Graxo, que é bem mais complicada.

// Função copiada do matemática para a reação de equilíbrio (Ac Graxo):
// x -> reagente2
// y -> reagente1
// z -> produto1
// prob0 -> ProbInicial
// ph -> PHa
// temp -> tempa
// Abs -> função valor absoluto.
// A sintaxe da função If no código de mathematica é:
// If[teste, valor que retorna se o teste for verdadeiro, valor que retorna se o teste for falso]

probc = If[x > 1,
   If[y > 3,
    If[z >= 1,
     prob0 - 5*Abs[temp] - 5*ph + (x - 1)*5 + (y - 3)*5 - z*20,
     prob0 - 5*Abs[temp] - 5*ph + (x - 1)*5 + (y - 3)*5],
    If[z >= 1, prob0 - 5*Abs[temp] - 5*ph + (x - 1)*5 - z*20,
     prob0 - 5*Abs[temp] - 5*ph + (x - 1)*5]],
   If[y > 3,
    If[z >= 1,
     prob0 - 5*Abs[temp] - 5*ph + (y - 3)*5 - z*20,
     prob0 - 5*Abs[temp] - 5*ph + (y - 3)*5],
    If[z >= 1, prob0 - 5*Abs[temp] - 5*ph - z*20,
     prob0 - 5*Abs[temp] - 5*ph]]]; 
     

// Headers para os diferentes tabuleiros.

// Tabuleiro Ácido Graxo -> Centrífuca
reagente1 = "Água"
reagente2 = "Triacilglicerídeo"
produto1 = "Glicerol"
produto2 = "Ácido Graxo"
fatorDeConversaoReagente1 = 3
fatorDeConversaoReagente2 = 1
equilibrio = 1 //nova variável para dizer se a reação é de equilíbrio ou não

// Tabuleiro Biodiesel -> Centrífuga
reagente1 = "Etanol"
reagente2 = "Triacilglicerídeo"
produto1 = "Glicerol"
produto2 = "Biodiesel"
fatorDeConversaoReagente1 = 3
fatorDeConversaoReagente2 = 1
equilibrio = 0 //nova variável para dizer se a reação é de equilíbrio ou não


// Tabuleiro Sabão -> Filtro 
reagente1 = "Hidróxido de Sódio"
reagente2 = "Triacilglicerídeo"
produto1 = "Glicerol"
produto2 = "Sal de Ácido Graxo"
fatorDeConversaoReagente1 = 3
fatorDeConversaoReagente2 = 1
equilibrio = 0 //nova variável para dizer se a reação é de equilíbrio ou não
