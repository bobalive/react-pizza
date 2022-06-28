import React from 'react'
import Cart from './Cart'
import Info from './Info'
import s from './Header.module.scss'


const Header = (props) => {
  return (
    <header className={s.header}>
        <Info/>
        <Cart {...props}/>
    </header>
  )
}
export default Header
