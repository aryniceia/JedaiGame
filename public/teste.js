document.getElementById("helpPopup").innerHTML = `
    <p>• Custos:</p>
    <blockquote>- pH: ${PHAcao}☕ | ${PHcost}₵</blockquote>
     <blockquote>- : ${personagem.filtroAcao}☕ | ${personagem.filtrocost}₵ </blockquote>
    <blockquote>- Chapa térmica: ${tempAcao}☕ | ${tempcost}₵</blockquote>
    <blockquote>-Reagente 1 (${reagente1}): ${acaoReagente1}☕ | ${costReagente1}₵</blockquote>
    <blockquote>-Reagente 2 (${reagente2}): ${acaoReagente2}☕ | ${costReagente2}₵</blockquote>
    <p>• Upgrades:</p>
    <blockquote>- pHmetro:  ${PHmetroAcao}☕ | ${PHmetroCost}₵</blockquote>
    <blockquote>- Chapa térmica:  ${termometroAcao}☕ | ${personagem.termometroCost}₵</blockquote>
    <blockquote>- Reator: 1☕ | 10₵</blockquote>
    <blockquote>- Nível mestrado: ${personagem.molMestrado}🧪</blockquote>
    <blockquote>- Nïvel doutorado: ${personagem.molDoutorado}🧪 </blockquote>
    * Obs: os custos e melhorias se referem aos dados sem a ação dos personagens!
    `