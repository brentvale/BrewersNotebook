import { combineReducers } from 'redux';
import { batchesReducer } from './batches_reducer';
import { usersReducer } from './users_reducer';

const rootReducer = combineReducers({
  batches: batchesReducer,
	users: usersReducer
});

export default rootReducer;