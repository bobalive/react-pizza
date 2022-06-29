import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import s from '../../Buy.module.scss'

export const PizzaCard = (props) => {

  let pizzaType = props.pizzaType.map(type=>{
    if(type.isActive){
      return type.name
    }else{
      return ''
    }
  })
  let pizzaSize = props.pizzaSize.map(type=>{
    if(type.isActive){
      return type.name
    }else{
      return ''
    }
  })
  return (
    <div className={s.pizzaCard}>
      <div className={s.cardInfo}>
        <img src = {props.imageUrl} alt ={props.name} className={s.pizzaImg}/>
        <div className={s.about}>
          <h4 className={s.pizzaName}>{props.name}</h4>
          <span className={s.description}>{pizzaType} тесто, {pizzaSize}см</span>
        </div>
      </div>
      <div className={s.changeBox}>
        <FontAwesomeIcon icon ={faMinus} className={s.minusIcon}
        onClick ={()=>{
          if(props.count >=2){
             props.decreasePrice(props.price, 1)
             props.decreasePizzaPrice(props.id)
          }
          else if(props.count>=1){
            props.removeActive(props.id)
            props.decreasePrice(props.price,1)
            props.decreasePizzaPrice(props.id, true)
          }

        }}/>
        {props.count}
        <FontAwesomeIcon icon ={faPlus} className = {s.plusIcon}
        onClick ={()=>{
          props.increasePrice(props.price)
          props.addPizzaPrice(props.id)
        }}
        />
      </div>
      <div className={s.pizzaPrice}>{props.count*props.price}₽</div>
      <FontAwesomeIcon icon ={faPlus} className ={s.deleteIcon}
      onClick ={()=>{
        props.removeActive(props.id)
        props.decreasePrice(props.price*props.count, props.count)
        props.decreasePizzaPrice(props.id, true)
      }}
      />
    </div>
  )
}
