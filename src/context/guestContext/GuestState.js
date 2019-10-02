import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import { TOGGLE_FILTER } from "../types";
const GuestState = props => {
  const initialState = {
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
        name: "Milan Das",
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
  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER
    });
  };
  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest:state.filterGuest,
        toggleFilter
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
