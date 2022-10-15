import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Payment from './payment';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise =loadStripe(
  'pk_test_51Lt4dCCL7iVCiyXfD5ZFmaN35wrW9gdDyX6d9jWABjdWjvbOYGwdZ7oqslHRZrXDhBxaZolBFUuNMlXbJunka8U8007FCLJ3H1');

function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user is ***', authUser );

      if(authUser) {
// the user is logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

// the user is logged out
      }
    })
  }, []);
  return (
    <Router>
    <div className="App">
    
    <Switch>
      <Route path='/Login'>               
          <Login/>
      </Route>
      <Route path='/checkout'>
          <Header />
          <Checkout/>
      </Route>
      <Route path='/payment'>
          <Header />
          <Elements stripe = {promise}>
          <Payment  />
          </Elements>
     
      </Route>

      <Route path='/'>
          <Header />
          <Home />
      </Route>
    </Switch>     
      
    </div>
    </Router>
  );
}

export default App;
