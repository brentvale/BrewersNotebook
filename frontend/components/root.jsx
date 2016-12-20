import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Main from './main.jsx';

import BatchListContainer from './batch_list/batch_list_container';
import BatchShowContainer from './batch_show/batch_show_container.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="my_beers" component={BatchListContainer} />
		<Route path="batches/:name_of_beer" component={BatchShowContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;