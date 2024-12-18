import React from 'react'
import FoodData from '../Data/FoodData'
import FoodCard from './FoodCard'

function FoodItems() {
  return (
   <div className='flex flex-wrap justify-center lg:justify-start gap-8 lg:ml-7 mb-6 '>
   {
    FoodData.map((food)=>{
       return <FoodCard 
        key={food.id}
        img={food.img}
        price={food.price}
        rating={food.rating}
        desc={food.desc}
        name={food.name}
        id={food.id}
         />
    })
   }
   
   </div>
  )
}

export default FoodItems