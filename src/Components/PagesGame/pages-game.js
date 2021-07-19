import '../PagesGame/pages-game.css';

function PageGame({children}) {
  return (
    <div className="App-game">
      <header className="App-header-game">
        
            
        
      </header>
      
      <body className="body"> 
        <div className="div-esquerda">
          {children}
        </div>

        <div className="div-direita">

        </div>
      </body>
      
      <footer className="footer">

      </footer>

    </div>
  );
}

export default PageGame;
