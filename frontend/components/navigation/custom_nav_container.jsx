import { connect } from 'react-redux';
import * as UserActions from '../../actions/user_actions';
import { getAllBatches, getCurrentUser } from '../../reducers/selectors';
import { requestCurrentUser } from '../../actions/user_actions';
import CustomNav from './custom_nav';


const mapStateToProps = state => ({
  batches: getAllBatches(state), 
	currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
	requestCurrentUser: () => dispatch(UserActions.requestCurrentUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNav);