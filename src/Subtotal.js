import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const[{basket}, dispatch]=useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <div>
          <p>
            {/* part of the homework */}
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
      )}
      decimalScale={2}
// part of the homework 
      value={getBasketTotal(basket)}   
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
    <button onClick={e => history.push('/payment')}>proceed to checkout</button>
   
  </div>
  )
}

export default Subtotal
