import { connect } from 'react-redux';
import { requestBatches } from '../../actions/batch_actions';
import { getAllBatches } from '../../reducers/selectors';
import BatchList from './batch_list';

const mapStateToProps = state => ({
  batches: getAllBatches(state)
});

const mapDispatchToProps = dispatch => ({
  requestBatches: () => dispatch(requestBatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BatchList);