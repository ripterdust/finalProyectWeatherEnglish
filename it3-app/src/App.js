import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';


export const App = () => {
  return <Router>

    <Navbar />
    <Switch>
      <Route exact path='/' component={ MainPage } />


      <Redirect to='/'></Redirect>
    </Switch>
  </Router>
}

