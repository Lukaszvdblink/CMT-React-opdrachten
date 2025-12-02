import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../components/Card.jsx';

const Home = () => {

  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  const [searchInput, setsearchInput] = useState('');

  const goToDetail = (animalId) => {
    navigate(`/animals/${animalId}`);
  };

  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setsearchInput(newSearch);

    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setAnimalList(filteredAnimals);
  };

  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="zoek hier uw dier" 
          name="search" 
          onChange={searchHandler}
        />
      </div>

      <section className="container">
        {animalList.map((animal) => (
          <Card
            key={animal.id}
            animals={animal}
            onShowDetail={goToDetail}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
