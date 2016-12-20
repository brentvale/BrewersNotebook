import { connect } from 'react-redux';
import { getAllBatches } from '../../reducers/selectors';
import BatchShow from './batch_show';

const mapStateToProps = state => ({
  batches: getAllBatches(state)
});

export default connect(
  mapStateToProps,
  null
)(BatchShow);