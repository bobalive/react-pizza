import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faSortUp } from "@fortawesome/free-solid-svg-icons";
import s from "./Nav.module.scss";

export const Sort = (props) => {

  let [isActive, toggleActive] = useState(false);
    
  return (
    <div className={s.sort}>
      <div className={s.sortBy}  
      
      onClick = {()=>{toggleActive(isActive = !isActive)}}>
        <FontAwesomeIcon icon={faSortUp} className={isActive ? `${s.sortIcon} ${s.active}` : `${s.sortIcon}`} />
        сортировать по:
        <div className= {s.activeSort}>{props.sortBy}</div> 
      </div>
      <ul className={isActive ? `${s.sortBox} ${s.active}` : `${s.sortBox}`}>
        {props.sort.map((item) => {
          return (
            <li
              className={
                item.isActive ? `${s.sortItem} ${s.active}` : `${s.sortItem}`
              }
              onClick={() => {
                props.toggleSort(item.id)
                props.setSortBy(item.name)
                props.sortPizza(item.name)
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
