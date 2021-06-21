import React from 'react';
import GitProvider from './context/GitProvider';
import PersonInfo from './components/index'
import Login from './components/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Repositories from './components/repositories';
import Followers from './components/followers';

function App() {
  return (
    <GitProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/Home"  exact={true} component={PersonInfo} />
          <Route path="/Repositories" exact={true} component={Repositories} />
          <Route path="/Followers" exact={true} component={Followers} />
        </Switch>
    </BrowserRouter>
    </GitProvider>
  );
}
export default App;
