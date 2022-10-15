import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'

function Product({id,title,image, price,rating}) {
  const[{basket}, dispatch]=useStateValue();
  // console.log("this is the basket",basket)

  const addToBasket = () => {
// dispatch the item to the data layer
dispatch({
  type:"ADD_TO_BASKET",
  item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating,
  },
});
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81GAJWuhyLL._AC_UL320_.jpg' />
      <button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default Product
