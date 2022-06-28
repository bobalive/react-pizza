import React from 'react'
import { Cards } from './cards/Cards'
import CardsContainer from './cards/CardsContainer'
import NavContainer from './nav/NavContainer'

const Main = () => {
  return (
    <main>
      <NavContainer/>
      <CardsContainer/>
    </main>
  )
}


export default Main