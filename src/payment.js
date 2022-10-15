import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import Checkout from './Checkout';
import './payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



function Payment() {
    const [{basket,user}, dispatch]= useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {
      // do all the fancy stuff ...
    } 
    const handleChange = e => {
      
    }
    
    return (
      <div className="payment">
        <div className="payment__container">
         <h1>Checkout(<Link to="/Checkout">{basket?.length}items</Link>
         )</h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 react lane</p>
              <p>Ethiopia</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
             {basket.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}     
                />
             ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              {/* stripe magic will go*/}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
              </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Payment;
  