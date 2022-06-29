import React from 'react'
import s from '../../Buy.module.scss'
import { PizzaCard } from './PizzaCard';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faMinus, faTrashCan, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

export const Order = (props) => {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <h2 className={s.title}>
            <FontAwesomeIcon icon ={faCartShopping} className={s.cartIcon}/>
            Корзина
            </h2>
            <div className={s.deleteCart}
                onClick={()=>{
                    props.activePizza.forEach(card=>{
                        
                        props.removeActive(card.id)
                        props.decreasePrice(card.count*card.price, card.count)
                        props.decreasePizzaPrice(card.id, true)
                    })
                    
                }}
            >
                <FontAwesomeIcon icon = {faTrashCan} className = {s.trashIcon}/>
                очистить корзину
            </div>
        </div>
        <div className={s.pizzaCardsBox}>
            {props.activePizza.map(card=>{
                return(<PizzaCard {...card}
                    increasePrice ={props.increasePrice}
                    decreasePrice={props.decreasePrice}
                    addPizzaPrice ={props.addPizzaPrice}
                    decreasePizzaPrice ={props.decreasePizzaPrice}
                    removeActive = {props.removeActive} />)
            })}
        </div>
        <div className={s.info}>
            <span className={s.count}>Всего типа пицц <span className={s.countNum}>{props.totalCount}шт</span></span>
            <span className={s.price}>Сумма заказа <span className={s.priceNum}>{props.totalPrice}₽</span></span>
        </div>
        <div className={s.links}>
            <NavLink to ='/' className={s.back}> 
            <FontAwesomeIcon icon ={faAngleLeft} className={s.backIcon}/>
            Вернуться назад</NavLink>
            <span className={s.order}>
            Оплатить сейчас
            </span>
        </div>

    </div>
  )
}
