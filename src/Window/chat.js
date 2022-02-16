import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Join from '../Chat/src/components/Join/Join'
import Chat from '../Chat/src/components/Chat/Chat'

const App = () => (
    <Router>
        <Route path ="/" exact component = {Join}/>
        <Route path ="/chat" component = {Chat}/>
    </Router>
);

export default App;


/*import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Chat1 from '../Chat/src/components/Chat/Chat'
//import Page from '../../src/Components/Pages/page';
import './Styles/tutorial.css';

function Chat () {
    return (
        <Router>
            <Chat1>
                <div className='Chat'>
                    <h1 className='App-title'>Chat?</h1>
                </div>            
            </Chat1>
        </Router>
    );
}

export default Chat;*/