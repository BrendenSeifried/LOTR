import React, { useEffect, useState } from 'react';
import './App.css';
// import Main from './views/Main';
// import Books from './views/Books/Books';
import Films from './views/Films/Films';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { fetchBooks } from './services/books';
import { fetchFilms } from './services/films';

function App() {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  // useEffect(()=> {
  //   const everyItem = async () => {
  //     const everyBook = await fetchBooks();
  //     setBooks(everyBook);
  //   };
  //   everyItem();
  // }, []);


  useEffect(()=> {
    const everyItem = async () => {
      const everyFilm = await fetchFilms();
      setFilms(everyFilm);
    };
    everyItem();
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path='/'>
            <Main />
          </Route> */}
          {/* <Route path = '/books'>
            <Books books={books}/>
          </Route> */}

          <Route path = '/films'>
            <Films movies={films}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
