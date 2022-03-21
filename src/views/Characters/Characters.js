import React, { useState, useEffect } from 'react';

import { fetchCharacters } from '../../services/characters';



export default function Characters() {
  const [stars, setStars] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  useEffect(()=> {
    const everyStarFunct = async () => {
      const everyStar = await fetchCharacters(race, query);
      setStars(everyStar);
      console.log(everyStar);
    };
    everyStarFunct();
  }, []);

  return (
    <div>Characters:
      {stars.map((data)=> (
        <div className='stars' key={data.id}>
          <h1>{data.name}</h1>
          <p></p>
        </div>
      ))}
    </div>
  );
}