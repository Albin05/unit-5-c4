import { LOGIN, LOGOUT } from "./actions";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {...store, }
    default:
      return store;
  }
};
