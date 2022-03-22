import React, { useState, useEffect } from 'react';

import { fetchBooks } from '../../services/books';



export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(()=> {
    const everyBookFunct = async () => {
      const everyBook = await fetchBooks();
      setBooks(everyBook);
    };
    
    everyBookFunct();
  }, []);

  return (
    <div>Novels:
      {books.map((data)=> (
        <div className='books' key={data.id}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
}


