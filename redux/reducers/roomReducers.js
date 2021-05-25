import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILED,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        roomsCount: action.payload.rooms,
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