import { combineReducers } from 'redux';
import { batchesReducer } from './batches_reducer';

const rootReducer = combineReducers({
  batches: batchesReducer
});

export default rootReducer;