import React, { useContext } from "react";
import Guest from "./Guest";
import GuestContext from "../../context/guestContext/guestContext";

const Guests = () => {
  const { guests, filterGuest } = useContext(GuestContext);
  const filteredGuests = guests.filter(g=>g.isconfirmed===true)
  return (
    <div className="guests">
    {!filterGuest ? 
      guests.map(guest => (
        <Guest key={guest.id} guest={guest} />
      ))
     : filteredGuests.map(guest => (
      <Guest key={guest.id} guest={guest} />
    ))}
    </div>
    
  );
};

export default Guests;
