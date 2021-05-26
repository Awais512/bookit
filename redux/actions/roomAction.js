import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILED,
  ROOMS_DETAILS_SUCCESS,
  ROOMS_DETAILS_FAILED,
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

//Get room details
export const getRoomDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: ROOMS_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOMS_DETAILS_FAILED,
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
