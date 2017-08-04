import { connect } from 'react-redux';
import * as UserActions from '../../actions/user_actions';
import { getCurrentUser } from '../../reducers/selectors';
import { requestCurrentUser } from '../../actions/user_actions';

import Brew from './brew';

const mapStateToProps = state => ({
	currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
	requestCurrentUser: () => dispatch(UserActions.requestCurrentUser())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Brew);