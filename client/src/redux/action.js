import axios from 'axios';
import * as types from './actionType';

// posting data

const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POST_DATA_REQUEST });

  return axios
    .post('http://localhost:5000/register', payload)
    .then((res) =>
      dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.POST_DATA_FAILURE, payload: err.data })
    );
};

// getting data
const getData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios
    .get('http://localhost:5000/getusers', payload)
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_DATA_FAILURE, payload: err.data })
    );
};
// delete user

const deleteUser =
  (id) =>
  ({ payload, dispatch }) => {
    return axios
      .delete(`http://localhost:5000/delete/${id}`, payload)
      .then((res) => dispatch({ type: types.DELETE_DATA, payload: res.data }))
      .catch((err) => console.log(err));
  };

// editUser action creator
const editUser = (id, formData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/edit/${id}`,
      formData
    );

    dispatch({
      type: types.EDIT_USER_DATA,
      payload: response.data, // Assuming the response data contains the updated user data
    });

    return response.data; // Return the updated user data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getData, postData, deleteUser, editUser };
