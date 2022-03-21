import { useEffect, useState } from 'react/cjs/react.production.min';
import './App.css';
import Main from './views/Main';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    
  });


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
