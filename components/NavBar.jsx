import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';

import {Cart} from './';
import { useStateContext } from '../context/statecontext';

function NavBar() {
  const {showCart , setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">BEAtS HeadPhones</Link>
      </p>

      <button type='button'
      className='cart-icon' onClick={()=> setShowCart(true)}>
        <AiOutlineShopping/>
        {totalQuantities?<span className='cart-item-qty'>{totalQuantities}</span>:null}
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default NavBar