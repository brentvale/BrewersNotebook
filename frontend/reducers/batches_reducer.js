import * as BatchActions from '../actions/batch_actions';
import merge from 'lodash/merge';

const batchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case BatchActions.RECEIVE_BATCHES:
      action.payload.batches.forEach(batch => newState[batch.id] = batch);
      return newState;
    case BatchActions.RECEIVE_BATCH:
      const newBatch = {[action.batch.id]: action.batch}
      newState = merge({}, state, newBatch);
      return newState;
    default:
      return state;
  }
};

export { batchesReducer };