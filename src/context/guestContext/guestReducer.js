import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  CLEAR_EDIT,
  EDIT_GUEST
} from "../types";
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
      return {
        ...state,
        guests: [...state.guests, payload]
      };
    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map(g => (g.id === payload.id ? payload : g))
      };
    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(g => g.id !== payload)
      };
    case EDIT_GUEST:
      return {
        ...state,
        editable: payload
      };
    case CLEAR_EDIT:
      return {
        ...state,
        editable: null
      };
    default:
      return state;
  }
};
