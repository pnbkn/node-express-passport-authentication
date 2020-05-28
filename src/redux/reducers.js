import { combineReducers } from "redux";
import { SET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER} from "./actions";
  
  const userReducer = (state = [], action) => {
    console.log("USERS REDUCER ", action.users)
    switch (action.type) {
      case SET_USERS:
        return action.users;
      case CREATE_USER:
        return [...state, action.user];
      case DELETE_USER:
        return [...state].filter((u) => u.id !== action.user.id);
      default:
        return state;
    }
  };
  export const reducer = combineReducers({users: userReducer});