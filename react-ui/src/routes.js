import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import SearchResults from './components/SearchResults';
import NotFound from './components/Shared/NotFound/NotFound';

import history from './history';


const Switches = () => (
    <Switch history={history}>
      <Route exact path="/" component={SearchResults}/>
      <Route path="*" component={NotFound}/>
      <Redirect from="*" to="/404"/>
    </Switch>
);

export default Switches;

