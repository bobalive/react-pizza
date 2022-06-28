import React from 'react'
import s from './Nav.module.scss'
import { Sort } from './Sort'
import Tabs from './Tabs'

const Nav = (props) => {
  return (
    <div className={s.nav}>
      <Tabs tabs = {props.tabs} toggleTabs= {props.toggleTabs} setCategory= {props.setCategory}/>
      <Sort sort = {props.sort} toggleSort = {props.toggleSort} 
      sortBy ={props.sortBy} setSortBy ={props.setSortBy} 
      sortPizza = {props.sortPizza}/>

    </div>
  )
}
export default Nav
