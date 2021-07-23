import './tela.css';

function Tela({children}) {
  return (
    <div className="App_game">
      <header className="App-header_game">
        <div className="background_game">
            {children}
        </div>
      </header>
    </div>
  );
}

export default Tela;