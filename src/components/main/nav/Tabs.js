import { click } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState } from 'react'
import s from './Nav.module.scss'

const Tabs = (props) => {
  const [isOpened, setIsOpened] = useState(false)
  useEffect(()=>{
    document.body.addEventListener('click' , (e)=>{
      if(!e.target.classList.value.includes(s.choosen )){
        setIsOpened(false)
      };
    },)
})
  return (
    <div className={s.tabsWrapper}>
      {props.tabs.map((item)=>{
        if(item.isActive){
          return<div 
          className={s.choosen +' '+ s.tab + ' '+s.active}
          onClick = {()=>{
            setIsOpened(!isOpened)
          }}
          >
          {item.name}
         </div>
         }
         return <></>
        }
      )}

        <div className={isOpened? s.tabs +' '+s.opened: s.tabs}>
          {props.tabs.map((item,i )=>{

            
        return(

          <div 
          className={s.tab}
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
