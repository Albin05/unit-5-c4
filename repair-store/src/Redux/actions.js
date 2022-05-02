// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ORDER = "ORDER";

// Action Creators
export const loginUser = (data) => ({
    type: LOGIN,
    payload: data,
});

export const logoutUser = (data) => ({
  type: LOGOUT,
  payload: data,
});

export const placeOrder = (data) => {
  return {
    type: ORDER,
    payload: data,
  }
}