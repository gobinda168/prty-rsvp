import { TOGGLE_FILTER } from "../types";
export default (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest
      };
    default:
      return state;
  }
};
