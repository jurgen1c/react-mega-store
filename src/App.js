import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
