// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// Action Creators
export const loginUser = (data) => ({
    type: LOGIN,
    payload: data,
});

export const logoutUser = (data) => ({
  type: LOGOUT,
  payload: data,
});
