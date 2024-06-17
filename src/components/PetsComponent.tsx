import React, { useEffect, useState } from 'react';

interface IPet {
  id: number;
  title: string;
  variety: string;
  gender: string;
  age: string;
  info: string;
  location: string;
  imageurl: string;
}

const PetsComponent = () => {
  const [pet, setPets] = useState<IPet[]>([]);

  useEffect(() => {
    fetch('/api/v1/pet')
      .then((response) => response.json())
      .then((jsonData) => setPets(jsonData))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      {pet.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.title}</h3>
          <p>{pet.variety}</p>
          <p>{pet.gender}</p>
          <p>{pet.age}</p>
          <p>{pet.info}</p>
          <p>{pet.location}</p>
          <img src={pet.imageurl} alt={pet.title} />
        </div>
      ))}
    </div>
  );
};

export default PetsComponent;
