import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
const GuestState = props => {
  const initialState = {
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
        isconfirmed: false
      },
      {
        id: 3,
        name: "Milan Das",
        phone: "24345 6677",
        dietary: "Pascatarian",
        isconfirmed: false
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
  return (
    <GuestContext.Provider
      value={{
        guests: state.guests
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
