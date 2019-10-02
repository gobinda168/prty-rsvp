import React, { useContext } from "react";
import Guest from "./Guest";
import GuestContext from "../../context/guestContext/guestContext";

const Guests = () => {
  const { guests, filterGuest } = useContext(GuestContext);
  return (
    <div className="guests">
      {guests
        .filter(guest => !filterGuest || guest.isconfirmed)
        .map(guest => (
          <Guest key={guest.id} guest={guest} />
        ))}
    </div>
  );
};

export default Guests;
