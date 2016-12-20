import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { requestBatches } from './actions/batch_actions';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
  	window.store = configureStore;
	window.requestBatches = requestBatches
	
	ReactDOM.render(<Root store={configureStore} />, root);
});
