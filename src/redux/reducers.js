import * as types from './actionType';

const initState = {
  loading: false,
  error: false,
  data: [],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return { ...state, loading: true };

    case types.GET_DATA_FAILURE:
      return { ...state, error: true };

    case types.GET_DATA_SUCCESS:
      return { ...state, error: false, loading: false, data: action.payload };
    default:
      return state;
  }
};

export { Reducer };
