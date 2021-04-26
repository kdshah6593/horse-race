import './App.css';
import GamePage from './components/GamePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GamePage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
