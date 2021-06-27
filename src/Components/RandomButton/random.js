import './random.css';

var level = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
}
var time = {
    0: '0', 
    1: '1',
    2: '2',
}
var tabuleiro = {
    0: '0',
    1: '1',
    2: '2',
}
var personagem = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
}

function getRandom() {
    var inputLevel = document.getElementById('level')
    inputLevel.value = level[Math.floor(Math.random() * 4)];

    var inputTime = document.getElementById('time')
    inputTime.value = time[Math.floor(Math.random()*3)];

    var inputTabuleiro = document.getElementById('tabuleiro')
    inputTabuleiro.value = tabuleiro[Math.floor(Math.random() * 3)];

    var inputChar = document.getElementsByName('personagem');
    inputChar[Math.floor(Math.random() * 6)].checked = true;
}  

function RandomButton ({className, onClick, level, time, tabuleiro, char}) {
    return (
        <div className="random">
            <button onClick={getRandom}>Aleatório</button>
        </div>
    ); 
}

export default RandomButton; 