import Films from './views/Films/Films';
import { fetchFilms } from './services/films';
import React, { useEffect, useState } from 'react';


export default function Main() {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    const everyItem = async () => {
      const everyFilm = await fetchFilms();
      setFilms(everyFilm);
    };
    everyItem();
  }, []);
  
  return (
    <div>Main

      <div className='dropdown'>
        <Films films={films}/>

      </div>
    </div>
  );
}
