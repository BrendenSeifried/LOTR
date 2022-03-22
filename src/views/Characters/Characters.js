import React, { useState, useEffect } from 'react';

import { fetchCharacters } from '../../services/characters';
import SearchRace from '../../components/SearchRace';


export default function Characters() {
  const [stars, setStars] = useState([]);
  const [race, setRace] = useState('All');
  const [query] = useState('');
  useEffect(()=> {
    const everyStarFunct = async () => {
      const everyStar = await fetchCharacters(race, query);
      setStars(everyStar);
    };
    everyStarFunct();
  }, [race]);




  return (
    <div> <SearchRace setRace={setRace}/>
      {stars.map((data)=> (
        <div className='stars' key={data.id}>
          <h1>{data.name}</h1>
          <p>Born: {data.birth} </p>
          <p>Got yeeted: ({data.death}) R.I.P. In peace.</p>
          <p>Race: {data.race} </p>
        </div>
      ))}
    </div>
  );
}