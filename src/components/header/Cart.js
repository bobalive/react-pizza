import React from 'react'
import s from './Cart.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  return (
    <NavLink to ='/buy'className={s.cart}>
      <div className={s.price}>
       {props.totalPrice} ₽
      </div>
      <div className={s.count}>
          <FontAwesomeIcon icon={faCartShopping} className = {s.cartIcon}/> {props.totalCount}
       
      </div>
    </NavLink>
  )
}
export default Cart
