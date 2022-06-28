import React, { useEffect } from 'react'
import { Card } from './Card'
import s from './Cards.module.scss'
import { Preloader } from './Preloader'

export const Cards = (props) => {
  useEffect(()=>{
    props.SetPizzaThunkCreator()
   },[])
  return (
    <div className= {s.main}>
     <h2 className={s.title}> Все пиццы</h2>
     <div className={s.cards}>
      {props.pizza.cards
      ?props.pizza.sortedCards.map(card=>{
        return(<Card 
          {...card}
          increasePrice = {props.increasePrice}
          togglePizzaSize={props.togglePizzaSize}
          togglePizzaType ={props.togglePizzaType}
          decreasePizzaPrice ={props.decreasePizzaPrice }
          addPizzaPrice={props.addPizzaPrice}
          />)
      })
    :<Preloader/>}
      </div>
    
    </div>

  )
}
