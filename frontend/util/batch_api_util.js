export const fetchBatches = success => {
  return $.ajax({
    method: 'GET',
    url: '/api/batches',
    success
  });
};