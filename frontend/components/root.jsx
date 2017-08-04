import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
//COMPONENTS
import Main from './main.jsx';
import BatchListContainer from './batch_list/batch_list_container';
import BatchShowContainer from './batch_show/batch_show_container';
import HomeContainer from './home/home_container';

import BrewContainer from './brew/brew_container';
import EditBatchContainer from './batch_list/edit_batch_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
				<IndexRoute component={HomeContainer} />
				<Route path="brew" component={BrewContainer} />
				<Route path="edit_batches" component={EditBatchContainer} />
				<Route path="batches" component={BatchListContainer} />
				<Route path="batches/:name_of_beer" component={BatchShowContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;