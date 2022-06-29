import React from 'react'
import { Order } from './components/order/Order';
import { Empty } from './components/empty/Empty';


export const Buy = (props) => {
  return (
    <>{props.activePizza.length > 0
    ?<Order {...props}/>
    :<Empty/>}</>
  )
}
