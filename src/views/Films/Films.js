import React, { useState, useEffect } from 'react';

import { fetchFilms } from '../../services/films';



export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(()=> {
    const everyFilmFunct = async () => {
      const everyFilm = await fetchFilms();
      setFilms(everyFilm);
    };
    everyFilmFunct();
  }, []);

  return (
    <div>Films:
      {films.map((data)=> (
        <div className='films' key={data.id}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
}




