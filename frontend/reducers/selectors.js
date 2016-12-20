const getAllBatches = ({ batches }) => (
  Object.keys(batches).map(id => batches[id])
);

export { getAllBatches };