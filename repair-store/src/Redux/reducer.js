import { LOGIN, LOGOUT, ORDER } from "./actions";

const init = {
  user: [],
  order: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, }
    case ORDER:
      return {...store, order: payload}
    default:
      return store;
  }
};
