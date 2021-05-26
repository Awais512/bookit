import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILED,
  ROOMS_DETAILS_SUCCESS,
  ROOMS_DETAILS_FAILED,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAILED:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//Room details reducer
export const roomDtailseReducer = (state = { rooms: {} }, action) => {
  switch (action.type) {
    case ROOMS_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };
    case ROOMS_DETAILS_FAILED:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
