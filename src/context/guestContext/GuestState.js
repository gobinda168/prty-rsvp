import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import uuid from "uuid";

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
const GuestState = props => {
  const initialState = {
    editable: null,
    search: null,
    filterGuest: false,
    guests: [
      {
        id: 1,
        name: "Gobinda Das",
        phone: "24345 6677",
        dietary: "Vegan",
        isconfirmed: false
      },
      {
        id: 2,
        name: "Bhaskar Das",
        phone: "24345 6677",
        dietary: "Non-Veg",
        isconfirmed: true
      },
      {
        id: 3,
        name: "Gourango Das",
        phone: "24345 6677",
        dietary: "Pascatarian",
        isconfirmed: true
      },
      {
        id: 4,
        name: "Milan Das",
        phone: "24345 6677",
        dietary: "Vegan",
        isconfirmed: false
      }
    ]
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

  //ACTIONS
  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER
    });
  };
  const searchGuest = guest => {
    dispatch({
      type: SEARCH_GUEST,
      payload: guest
    });
  };
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH
    });
  };
  const addGuest = guest => {
    guest.id = uuid;
    guest.isconfirmed = false;
    dispatch({
      type: ADD_GUEST,
      payload: guest
    });
  };
  const updateGuest = guest => {
    dispatch({
      type: UPDATE_GUEST,
      payload: guest
    });
  };
  const removeGuest = id => {
    dispatch({
      type: REMOVE_GUEST,
      payload: id
    });
  };
  const editGuest = guest => {
    dispatch({ type: EDIT_GUEST, payload: guest });
  };
  const clearEdit = () => {
    dispatch({ type: CLEAR_EDIT });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        editable: state.editable,
        search: state.search,
        filterGuest: state.filterGuest,
        toggleFilter,
        searchGuest,
        clearSearch,
        addGuest,
        editGuest,
        removeGuest,
        updateGuest,
        clearEdit
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
