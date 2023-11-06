import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Lazy load your components
const Koti = lazy(() => import('./components/Etusivu'));
const Kurssit = lazy(() => import('./components/Kurssit'));
const Romania = lazy(() => import('./components/Romania'));
const Meistä = lazy(() => import('./components/Meistä'));
const Yhteistiedot = lazy(() => import('./components/Yhteistiedot'));
const Tentti = lazy(() => import('./components/Tentti'));
const LääkeRomania = lazy(() => import('./components/LääkeRomania'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/LääketiedeRomaniassa" component={LääkeRomania} />
          <Route path="/Tenttivaatimukset" component={Tentti} />
          <Route path="/Kurssit" component={Kurssit} />
          <Route path="/Romania" component={Romania} />
          <Route path="/Meistä" component={Meistä} />
          <Route path="/Yhteistiedot" component={Yhteistiedot} />
          <Route path="/" component={Koti} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
