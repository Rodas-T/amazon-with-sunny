import React from 'react'
import  './Header.css'
import {FaSearch } from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {
  const[{basket, user},dispatch]= useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
     <div className="header">
      <Link to = "/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
         <div className="header__search">
        <input className="header__searchInput" type="text" />      
        <FaSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to ={!user && '/Login'}> 
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user?'Guest':user.email }
            </span>
            <span className="header__optionLineTwo">
              {user? "Sign Out": "Sign In"}
            </span>        
          </div>
        </Link>
        {/* <div className="header__clearlink"> */}
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        {/* </div> */}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="./Checkout">
        <div className="header__optionBasket">
            <FaShoppingBag />
            <span className="header__optionLineTwo header__basketCount">
             {basket?.length}
            </span>
          </div>
          </Link>

             </div>
      
    </div>
  )
}

export default Header
