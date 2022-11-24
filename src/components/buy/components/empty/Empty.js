import React from 'react'
import s from './Empty.module.scss'
import { NavLink } from 'react-router-dom';

export const Empty = (props) => {
  return (
    <div className={s.emptyPage} >
      <h1 className={s.title} >
      Корзина пустая   😕
      </h1>
      <p className={s.description}>Вероятней всего, вы не заказывали ещё пиццу.
       Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img  className={s.shoppingCart} src='shopping-cart-colour.png' alt ='назад'/>
      <NavLink to = '/' className={s.link}>Вернуться назад</NavLink>

    </div>
  )
}
