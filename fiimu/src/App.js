import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Details from './pages/Details';
import Loading from './pages/Loading';
import './style.css';

const App = () => {
return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/please-wait">
          <Loading/>
        </Route>
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
