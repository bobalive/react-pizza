import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import s from "./Cards.module.scss";

export const Card = (props) => {
  return (
    <div className={s.card}>
      <img className={s.cardImg} src={props.imageUrl} alt={props.name}/>
      <h3 className={s.pizzaName}>{props.name}</h3>
      <div className={s.pizzaInfo}>
        <div className={s.pizzaTypeBox}>
          {props.pizzaType.map((item, i) => {
            return (
              <div
                className={
                  props.pizzaType[i].isActive
                    ? `${s.pizzaType} ${s.active}`
                    : `${s.pizzaType}   `
                }
                onClick={() => {
                  props.togglePizzaType(props.id, item.name)
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={s.pizzaSizeBox}>
          {props.pizzaSize.map((item, i) => {
            return (
              <div
                className={
                  props.pizzaSize[i].isActive
                    ? `${s.pizzaSize} ${s.active}`
                    : `${s.pizzaSize}`
                }
                onClick={() => {
                 props.togglePizzaSize(props.id, item.name)
                }}
              >
                {item.name}см
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.priceBox} >
        <span className={s.price}>от {props.price}₽</span>
        <span
          className={ props.isActive?`${s.add} ${s.active}`:`${s.add}`}
          onClick={() => {
            props.increasePrice(Number(props.price));
            props.addPizzaPrice(props.id)
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faPlus} className={s.plus} />
          Добавить
          <span className={props.isActive?s.count:'' }>{props.isActive?props.count:''}</span>
        </span>
      </div>
    </div>
  );
};
