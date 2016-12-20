import { connect } from 'react-redux';

import { getAllBatches } from '../../reducers/selectors';
import CustomNav from './custom_nav';


const mapStateToProps = state => ({
  batches: getAllBatches(state)
});

export default connect(
  mapStateToProps,
  null
)(CustomNav);