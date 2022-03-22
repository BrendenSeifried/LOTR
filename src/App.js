import './App.css';
import Films from './views/Films/Films';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Main from './views/Main/Main';
import GoHome from './components/GoHome';


import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <GoHome />

        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>

          <Route path = '/books'>
            <Books />
          </Route>


          <Route path = '/characters'>
            <Characters />
          </Route>

          <Route path = '/films'>
            <Films/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
