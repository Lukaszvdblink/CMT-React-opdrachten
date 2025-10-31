import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../components/Card.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/animals/${animalId}`);
  };

  return (
    <section>
      <h1>Welkom bij mijn website</h1>
      <h2>Onze Dieren</h2>
      
      {animalList.map(animal => (
        <Card
          key={animal.id}
          animals={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Home;