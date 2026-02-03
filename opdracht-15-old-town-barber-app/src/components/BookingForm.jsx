import { useState } from "react";
import { toast } from "react-toastify";
import { shopData } from "./ShopInfo";

function BookingForm({ user, onAdd }) {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    const service = shopData.services.find(s => s.id === Number(serviceId));

    onAdd({
      id: Date.now(),
      serviceName: service.name,
      price: service.price,
      date,
      time
    });

    toast.success("Afspraak geboekt!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Boek Afspraak</h2>

      <p>{user.name}</p>

      <select value={serviceId} onChange={e => setServiceId(e.target.value)}>
        <option value="">Kies service</option>
        {shopData.services.map(service => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="">Tijd</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>14:00</option>
        <option>15:00</option>
      </select>

      <button>Boek</button>
    </form>
  );
}

export default BookingForm;
