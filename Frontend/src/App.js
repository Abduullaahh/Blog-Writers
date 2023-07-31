import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import View from './Components/View';

function App() {
  return (
    <div className="App">
    {/* <Router> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Create' component={Create} />
        <Route exact path='/View' component={View} />
      </Switch>
    {/* </Router> */}
    </div>
  );
}

export default App;