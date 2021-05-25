import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILED,
  CLEAR_ERRORS,
} from '../constants/roomConstants';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

//Get all rooms
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);

    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAILED,
      payload: error.response.data.message,
    });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
