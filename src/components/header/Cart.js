import React from 'react'
import s from './Cart.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  return (
    <div className={s.cart}>
      <div className={s.price}>
       {props.totalPrice} ₽
      </div>
      <div className={s.count}>
     
          <FontAwesomeIcon icon={faCartShopping} className = {s.cartIcon}/> {props.totalCount}
       
      </div>
    </div>
  )
}
export default Cart
