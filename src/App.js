import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Koti from './components/Etusivu';
import Kurssit from './components/Kurssit';
import Romania from './components/Romania';
import Meistä from './components/Meistä';
import Yhteistiedot from './components/Yhteistiedot';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Koti} />
        <Route path="/Kurssit" component={Kurssit} />
        <Route path="/Romania" component={Romania} />
        <Route path="/Meistä" component={Meistä} />
        <Route path="/Yhteistiedot" component={Yhteistiedot} />
        {/* Redirect from root path to Etusivu */}
        <Redirect from="/" to="/Etusivu" />
      </Switch>
    </Router>
  );
};

export default App;
