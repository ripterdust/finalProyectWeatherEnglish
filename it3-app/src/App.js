import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Geo } from './components/Geo';
import { Hydro } from './components/Hydro';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';
import { Solar } from './components/Solar';
import { Wind } from './components/Wind';

export const App = () => {
  return <Router>

    <Navbar />
    <Switch>

      <div className="container mt-4">
        <Route exact path='/' component={ MainPage } />
        <Route path='/wind' component={Wind} />
        <Route path="/geo" component={Geo} />
        <Route paht="/hydro" component={Hydro} />
        <Route paht="/solar" component={Solar} />
      </div>


    </Switch>
  </Router>
}

