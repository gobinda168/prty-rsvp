import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guestContext";

const Guest = ({ guest }) => {
  const { removeGuest, updateGuest,editGuest } = useContext(GuestContext);
  const { id, name, phone, dietary, isconfirmed } = guest;
  // const handleUpdate = guest => {
  //   //
  // };

  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label>
            Confirmed
            <i className={`fas fa-check-square ${isconfirmed && "confirm"}`}>
              <input
                type="checkbox"
                onClick={() =>
                  updateGuest({ ...guest, isconfirmed: !isconfirmed })
                }
              />
            </i>
          </label>
        </div>
        <div>
          <button onClick={() => editGuest(guest)}>
            <i className="fas fa-user-edit"></i>
          </button>
          <button onClick={() => removeGuest(id)}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span
          className={
            `badge ` +
            (dietary === "Non-Veg"
              ? "red"
              : dietary === "Vegan"
              ? "green"
              : "seaGreen")
          }
        >
          {dietary}
        </span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
