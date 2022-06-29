import React, { useEffect } from 'react'
import Cart from './Cart'
import Info from './Info'
import s from './Header.module.scss'
import { Routes, Route } from 'react-router-dom';

const Header = (props) => {
  useEffect(()=>{
    props.SetPizzaThunkCreator()
   },[])
  return (
    <header className={s.header}>
        <Info/>
        <Routes>
          <Route path ='/' element={<Cart {...props}/>}></Route>
        </Routes>

    </header>
  )
}
export default Header
