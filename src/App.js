import './App.css';
import Navbar from './Components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './pages/movies';
import CreateMovies from './pages/createMovies';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>Welcom to my MONGO API</h1>
          <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/createMovies' component={CreateMovies} />
          </Switch>
      </Router>
    </>
  );
}

export default App;