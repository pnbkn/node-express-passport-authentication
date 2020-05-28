import {setUsersAction, createUserAction, updateUserAction, deleteUserAction} from "./actions";
import axios from "axios";

// SET USERS THUNK
export const setUsersThunk = () => {
    return async (dispatch) => {
      const users = (await axios.get("/api/users")).data;
      console.log("USERS THUNKS ", users)
      dispatch(setUsersAction(users));
    };
  };
  
  // CREATE USER THUNK
export const createUserThunk = (user) => {
    return async (dispatch) => {
      const newUser = (await axios.post("/api/register", user)).data;
      dispatch(createUserAction(newUser));
    };
  };

  // UPDATE THUNK
export const updateUserThunk = (id, payload) => async (dispatch) => {
    const user = (await axios.put(`/api/users`, { id: id, ...payload })).data;
    dispatch(updateUserAction(user));
  };

// DELETE THUNK
  export const deleteUserThunk = (id, user) => {
    return async (dispatch) => {
      await axios.delete(`/api/users/${id}`);
      dispatch(deleteUserAction(user));
    }
  }
  