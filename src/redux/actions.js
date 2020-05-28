//Action Types
export const SET_USERS = "SET_USERS";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

//Set Action
export const setUsersAction = (users) => (console.log("USERS ACTIONS ", users), { type: SET_USERS, users });

//Create Action
export const createUserAction = (user) => ({ type: CREATE_USER, user: user });

//Update Action
export const updateUserAction = (user) => ({ type: UPDATE_USER, user });

//Delete Action
export const deleteUserAction = user => ({type: DELETE_USER, user: user});