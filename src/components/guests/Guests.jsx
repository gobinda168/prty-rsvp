import React, { useContext } from "react";
import Guest from "./Guest";
import GuestContext from "../../context/guestContext/guestContext";

const Guests = () => {
  const { guests } = useContext(GuestContext);
  return (
    <div className="guests">
      {guests.map(guest => (
        <Guest key={guest.id} />
      ))}
    </div>
  );
};

export default Guests;
