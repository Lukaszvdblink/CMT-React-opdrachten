function BookingsList({ appointments }) {
  const sorted = [...appointments].sort(
    (a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`)
  );

  return (
    <div>
      <h2>Mijn Afspraken</h2>

      {sorted.map(a => (
        <div key={a.id}>
          {a.date} {a.time} – {a.serviceName} (€{a.price})
        </div>
      ))}
    </div>
  );
}

export default BookingsList;
