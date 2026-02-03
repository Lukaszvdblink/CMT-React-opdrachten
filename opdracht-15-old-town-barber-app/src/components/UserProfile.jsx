import { useState } from "react";
import { toast } from "react-toastify";

function UserProfile({ onSave, initialData }) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast.error("Alle velden zijn verplicht");
      return;
    }

    onSave({ name, email, phone });
    toast.success("Profiel opgeslagen!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Profiel</h2>

      <input
        placeholder="Naam"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Telefoon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Opslaan</button>
    </form>
  );
}

export default UserProfile;
