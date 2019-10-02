import React, {useReducer} from "react";
import GuestContext from "./guestContext";
import guestReducer from './guestReducer'
const GuestState = props => {
  const initialState = {
    guests: []
  };
  const [state, dispatch] = useReducer(guestReducer, initialState)
  return <GuestContext.Provider value ={{
      guests: state.guests
  }} >{props.childred}</GuestContext.Provider>;
};

export default GuestState;
