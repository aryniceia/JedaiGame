import './page.css';

function Page({children}) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="background">
            {children}
            <div className="grama" />
        </div>
      </header>
    </div>
  );
}

export default Page;
