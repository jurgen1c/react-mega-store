import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import {loadStripe } from '@stripe/stripe-js';
import {Elements } from '@stripe/react-stripe-js';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Payment from './pages/payment/Payment';

const promise = loadStripe('pk_test_51IDcemDalhLGaLp7sZPfPDkpBe9LhPkZyzzRwLIcQ0p0vl6lp6jfdqPnyCRQr8g0QEzUyrNzpT7OpzSrvG8B7qUb00xG7Lj4Fh');

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
