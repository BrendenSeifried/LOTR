import './App.css';
import Films from './views/Films/Films';
import Books from './views/Books/Books';


import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path='/'>
            <Main />
          </Route> */}
          <Route path = '/books'>
            <Books />
          </Route>


          {/* <Route path = './characters'>
            <Characters stars={characters}/>
          </Route> */}

          <Route path = '/films'>
            <Films/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
