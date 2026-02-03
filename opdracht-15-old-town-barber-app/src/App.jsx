import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

import {
  getUserProfile,
  setUserProfile,
  getAppointments,
  setAppointments
} from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(getUserProfile());
  const [appointments, setAllAppointments] = useState(getAppointments());

  useEffect(() => {
  const now = new Date();

  appointments.forEach(a => {
    const appointmentTime = new Date(`${a.date} ${a.time}`);
    const diff = (appointmentTime - now) / 1000 / 60;

    if (diff > 0 && diff <= 15) {
      toast.info(` Reminder: ${a.serviceName} om ${a.time}`);
    }
  });
}, []);


  function saveProfile(profile) {
    setUserProfile(profile);
    setUser(profile);
  }

  function addAppointment(appointment) {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    setAllAppointments(updated);
  }

  return (
    <div>
      <ToastContainer />

      {!user ? (
        <UserProfile onSave={saveProfile} />
      ) : (
        <>
          <h1>Old Town Barber</h1>

          <ShopInfo />
          <BookingForm user={user} onAdd={addAppointment} />
          <BookingsList appointments={appointments} />
        </>
      )}
    </div>
  );
}

export default App;
