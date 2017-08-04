import * as APIUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//async actions
export function requestCurrentUser(){
	return(dispatch) => {
		return APIUtil.fetchCurrentUser().then(obj => dispatch(receiveCurrentUser(obj)) );
	};
}

export function updateCurrentUser(formData){
	return(dispatch) => {
		return APIUtil.updateCurrentUser(formData).then(obj => dispatch(receiveCurrentUser(obj)) );
	};
}

//SYNC ACTIONS

export const receiveCurrentUser = currentUser => {
	debugger 
	return {
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
	}
  
};