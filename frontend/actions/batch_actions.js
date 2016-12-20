import * as util from '../util/batch_api_util';

export const RECEIVE_BATCHES = "RECEIVE_BATCHES";
export const RECEIVE_BATCH = "RECEIVE_BATCH";

//async actions
export function requestBatches(){
	return(dispatch) => {
		return util.fetchBatches().then(batches => dispatch(receiveBatches(batches)));
	};
}

//sync actions
export const receiveBatches = batches => ({
  	type: RECEIVE_BATCHES,
	payload: batches
}); 

export const receiveBatch = batch => ({
  	type: RECEIVE_BATCH,
  	payload: batch
}); 