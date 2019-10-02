import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guestContext";

const GuestCounter = () => {
  const { guests } = useContext(GuestContext);
  const atteningGuests = guests.filter(g => g.isconfirmed);
  const totalAttendingGuest = atteningGuests.length;
  const totalGuests = guests.length;
  const totalGuestsByType = type =>
    guests.filter(g => g.dietary === type).length;
  const totalAttendingGuestsByType = type =>
    atteningGuests.filter(a => a.dietary === type).length;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{totalGuestsByType("Non-Veg")}</td>
            <td>{totalAttendingGuestsByType("Non-Veg")}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{totalGuestsByType("Vegan")}</td>
            <td>{totalAttendingGuestsByType("Vegan")}</td>
          </tr>
          <tr>
            <th>Pescetarians</th>
            <td>{totalGuestsByType("Pascatarian")}</td>
            <td>{totalAttendingGuestsByType("Pascatarian")}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalGuests}</td>
            <td>{totalAttendingGuest}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GuestCounter;
