import React from 'react'
import NavBar from '../Components/NavBar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodCard from '../Components/FoodCard'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

function Home() {
  return (
    <>
    <NavBar />
    <CategoryMenu />
    <FoodItems />
    <Cart />
    </>
  )
}

export default Home