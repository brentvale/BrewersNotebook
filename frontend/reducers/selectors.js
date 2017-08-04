const getAllBatches = ({ batches }) => (
  Object.keys(batches).map(id => batches[id])
);

const getCurrentUser = ({ users }) => {
	return users.currentUser;
}

export { getAllBatches, getCurrentUser };