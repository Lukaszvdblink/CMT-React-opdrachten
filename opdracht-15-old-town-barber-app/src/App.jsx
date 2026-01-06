import './App.css';
import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";

function App() {
const [userProfile, setUserProfile] = useState(null);

useEffect(() => {
  const stored = localStorage.getItem("userProfile");
  if (stored) setUserProfile(JSON.parse(stored));
}, []);

  
  return (
    <div>
    {userProfile === null ? (
      <UserProfile onSave={setUserProfile} />
    ) : (
      <h1>Welkom {userProfile.name}</h1>
    )}
  </div>
  );
}

export default App;
