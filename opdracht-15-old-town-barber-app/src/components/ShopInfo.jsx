const ShopInfo = () => {
  const shopData = {
  name: "Old Town Barber",
  hours: "Ma-Za: 9:00 - 18:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25, duration: 30 },
    { id: 2, name: "Baard trimmen", price: 15, duration: 15 },
    { id: 3, name: "Knip + Baard", price: 35, duration: 45 },
    { id: 4, name: "Haar wassen", price: 10, duration: 15 }
  ]
};

  return (
  <div>
    <h2>{shopData.name}</h2>
    <p>{shopData.hours}</p>

    <ul>
      {shopData.services.map((service) => (
        <li key={service.id}>
          {service.name}  €{service.price}  {service.duration} min
        </li>
      ))}
    </ul>
  </div>
);
};

export default ShopInfo;