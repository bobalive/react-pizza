import React from 'react'
import s from './Nav.module.scss'

const Tabs = (props) => {
  return (
    <div>
    <div className={s.tabs}>
          {props.tabs.map((item,i )=>{
        return(
          <div 
          className={item.isActive?`${s.tab} ${s.active}`:s.tab}
          onClick={()=> {
            props.toggleTabs(item.id)
            props.setCategory(i)
            }}>
            {item.name}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Tabs
