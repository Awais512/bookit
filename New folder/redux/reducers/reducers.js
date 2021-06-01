import { combineReducers } from 'redux';
import { allRoomsReducer, roomDtailseReducer } from './roomReducers';
import { authReducer } from './userReducers';
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDtailseReducer,
  auth: authReducer,
});

export default reducer;
