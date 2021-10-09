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

      <div className="container mt-4">
        <Route exact path='/' component={ MainPage } />
        
      </div>


    </Switch>
  </Router>
}

