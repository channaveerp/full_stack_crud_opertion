import axios from 'axios';
import * as types from './actionType';

const getData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios
    .get('https://fakestoreapi.com/products', payload)
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_DATA_FAILURE, payload: err.data })
    );
};

// fetchingData

export { getData };
