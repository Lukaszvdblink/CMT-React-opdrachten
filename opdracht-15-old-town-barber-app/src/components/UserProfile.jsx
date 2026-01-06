import { useState } from "react";

const UserProfile = ({ onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Vul alle velden in!");
      return;
    }

    const profile = { name, email, phone };

    localStorage.setItem("userProfile", JSON.stringify(profile));

    onSave(profile); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Naam"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefoon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Opslaan</button>
    </form>
  );
};

export default UserProfile;
