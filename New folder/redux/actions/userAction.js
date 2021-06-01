import axios from 'axios';

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

//Register user
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/auth/register', userData, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    if (error.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data;
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log(error.request);
    } else {
      // Some other errors
      console.log('Error', error.message);
    }
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
