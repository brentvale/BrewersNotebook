import {
  receiveCurrentUser
} from '../actions/user_actions';

export const fetchCurrentUser = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users/current_user`
  })
);

export const updateCurrentUser = (formData) => (
	$.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.userId}`,
		data: formData
  })
);