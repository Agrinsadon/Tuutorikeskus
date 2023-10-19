import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Koti from './components/Etusivu';
import Kurssit from './components/Kurssit';
import Romania from './components/Romania';
import Meistä from './components/Meistä';
import Yhteistiedot from './components/Yhteistiedot';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Kurssit" component={Kurssit} />
        <Route path="/Romania" component={Romania} />
        <Route path="/meistä" component={Meistä} />
        <Route path="/Yhteistiedot" component={Yhteistiedot} />
        <Route path="/" component={Koti} />
      </Switch>
    </Router>
  );
};

export default App;
