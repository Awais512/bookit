import { combineReducers } from 'redux';
import { allRoomsReducer, roomDtailseReducer } from './roomReducers';
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDtailseReducer,
});

export default reducer;
