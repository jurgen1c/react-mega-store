import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
