import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router'

import Layout from './layout/Layout.jsx'
import Home from './home/Home.jsx';
import Profile from './profile/Profile.jsx'
import Set from './set/Set.jsx'
import Type from './type/Type.jsx'
import SetSearch from './search/SetSearch.jsx'
import TypeSearch from './search/TypeSearch.jsx'

const AppRouter = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={ Layout }>
          <Route path="/" component={ Home } />
          <Route path="/profile" component={ Profile } />
          <Route path="/set" component={ Set } />
          <Route path="/set/:id" component={ Set } />
          <Route path="/type" component={ Type } />
          <Route path="/type/:id" component={ Type } />
          <Route path="/setsearch" component={ SetSearch } />
          <Route path="/typesearch" component={ TypeSearch } />
          <Redirect from="/*" to="/" />
        </Route>
      </Router>
    );
  }
});

export default AppRouter;
