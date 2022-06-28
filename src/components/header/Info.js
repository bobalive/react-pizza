import React from 'react'
import s from "./info.module.css"

const Info = () => {
  return (
    <div className={s.info}>
      <img src ={require('../../assets/images/logo.png')} alt = 'logo'/>
      <div className={s.description}>
        <h3 className={s.title}>REACT PIZZA</h3>
        <p className={s.about}>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  )
}

export default Info
