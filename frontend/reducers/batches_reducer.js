import * as BatchActions from '../actions/batch_actions';
import merge from 'lodash/merge';

const initialState = {
  "1": {
    id: 1,
	nameOfBeer: "GumballHead - Batch 1",
	typeOfBrewing: "extract",
	gallonsToBrew: 10
  },
  "2": {
    id: 2,
	nameOfBeer: "GumballHead - Batch 2",
	typeOfBrewing: "extract",
	gallonsToBrew: 5
  },
  "3": {
    id: 3,
	nameOfBeer: "GumballHead - Batch 3",
	typeOfBrewing: "extract",
	gallonsToBrew: 10
  },
};

const batchesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case BatchActions.RECEIVE_BATCHES:
      action.batches.forEach(batch => newState[batch.id] = batch);
      return newState;
    case BatchActions.RECEIVE_BATCH:
      const newBatch = {[action.batch.id]: action.batch}
      newState = merge({}, state, newBatch);
      return newState;
    default:
      return state;
  }
};

export { batchesReducer, initialState };