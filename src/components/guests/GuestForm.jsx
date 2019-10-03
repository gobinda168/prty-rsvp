import React, { useState, useContext, useEffect } from "react";
import GuestContext from "../../context/guestContext/guestContext";
const GuestForm = () => {
  const { addGuest, editable, updateGuest, clearEdit } = useContext(
    GuestContext
  );
  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg"
  });
  useEffect(() => {
    if (editable !== null) {
      setGuest(editable);
    } else {
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
  }, [editable]);

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (guest.name === "" || guest.phone === "")
      return alert("Fields are empty!!");
    if (editable !== null) {
      updateGuest(guest);
      clearEdit();
    } else {
      addGuest(guest);
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
  };

  const { name, phone, dietary } = guest;
  return (
    <div className="invite-section">
      <h1>{editable === null ? "Invite Someone" : "Edit Guest"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">
            Non-veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === "Non-Veg"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              onChange={handleChange}
              checked={dietary === "Vegan"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Pascatarian
            <input
              type="radio"
              name="dietary"
              value="Pascatarian"
              onChange={handleChange}
              checked={dietary === "Pascatarian"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <input
          type="submit"
          value={editable !== null ? "Edit Guest" : "Add Guest"}
          className="btn"
        />
        {editable !== null ? (
          <input
            type="button"
            value="cancel"
            className="btn clear"
            onClick={clearEdit}
          />
        ) : null}
      </form>
    </div>
  );
};

export default GuestForm;
