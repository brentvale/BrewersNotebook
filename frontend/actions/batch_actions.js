export const RECEIVE_BATCHES = "RECEIVE_BATCHES";
export const RECEIVE_BATCH = "RECEIVE_BATCH";

export const receiveBatches = batches => ({
  type: RECEIVE_BATCHES,
  batches
}); 

export const receiveBatch = batch => ({
  type: RECEIVE_BATCH,
  batch
}); 
