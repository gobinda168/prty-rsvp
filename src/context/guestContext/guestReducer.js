import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST } from "../types";
export default (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest
      };
    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        search: state.guests.filter(g => g.name.match(reg))
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null
      };
      case ADD_GUEST:
        return{
          ...state,
          guests:[...state.guests, payload]
        }
    default:
      return state;
  }
};
