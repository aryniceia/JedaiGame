import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './Home';
import Select from './Window/select';
import Tutorial from './Window/tutorial';
import Config from './Window/config';
import Credit from './Window/credit';
import Test from './Window/test';
import Detail from './Window/detail';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} /> 
      <Route path="/select" component={Select} />
      <Route path="/tutorial" component={Tutorial}/>
      <Route path="/config" component={Config}/>
      <Route path="/credit" component={Credit}/>
      <Route path="/test" component={Test}/>
      <Route path="/detail" component={Detail}/>
    </Router>
  );
}