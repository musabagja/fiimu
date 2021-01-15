import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Details from './pages/Details';
import './style.css';

const App = () => {
return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/:id">
          <Details/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
