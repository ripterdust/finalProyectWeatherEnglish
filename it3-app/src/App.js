import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Geo } from './components/Geo';
import { Hydro } from './components/Hydro';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';
import { Wind } from './components/Wind';
import { SolarRouter } from './routers/SolarRouter';

export const App = () => {
    return <Router>

      <Navbar />
      <div className="container mt-4">
        <Switch>
            <Route exact path='/' component={ MainPage } />
            <Route path='/wind' component={Wind} />
            <Route path='/geo' component={Geo} />
            <Route path='/hydro' component={Hydro} />
            <Route path='/solar' component={SolarRouter} />
        </Switch>
      </div>
    </Router>
  
}

