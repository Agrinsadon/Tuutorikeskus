import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kurssit from './components/Kurssit';
import Romania from './components/Romania';
import Meistä from './components/Meistä';
import Yhteistiedot from './components/Yhteistiedot';
import Tentti from './components/Tentti';
import LääkeRomania from './components/LääkeRomania'

const Koti = lazy(() => import('./components/Etusivu'));


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Switch>
        <Route path="/LääketiedeRomania" component={LääkeRomania} />
        <Route path="/Tenttivaatimukset" component={Tentti} />
        <Route path="/Kurssit" component={Kurssit} />
        <Route path="/Romania" component={Romania} />
        <Route path="/Meistä" component={Meistä} />
        <Route path="/Yhteistiedot" component={Yhteistiedot} />
        <Route path="/" component={Koti} />
      </Switch>
    </Router>
    </Suspense>
  );
};

export default App;
