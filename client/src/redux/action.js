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

// fetchingData

export { getData, postData };
