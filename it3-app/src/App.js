import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';
import { SolarRouter } from './routers/SolarRouter';

export const App = () => {
    return <Router>

      <Navbar />
     
        <Switch>
            <Route exact path='/' component={ MainPage } />
            <Route path='/solar' component={SolarRouter} />

            <Redirect to="/" />
        </Switch>


    </Router>
  
}

