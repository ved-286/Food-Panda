import React from 'react'
import FoodData from '../Data/FoodData'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';


function FoodItems() {

  const category = useSelector((state)=> state.category.category)
 const search = useSelector((state)=> state.search.search)
 const handleToast =(name)=> toast.success(`Successfully Added ${name}!`)


  return (
    <>
    <Toaster position="top-center" reverseOrder={false}
/>
   <div className='flex flex-wrap justify-center lg:justify-start gap-8 lg:ml-7 mb-6 '>
   {
    FoodData.filter((food)=>{
      if(category === "All"){
        return food.name.toLowerCase().includes(search.toLowerCase());
      }else{
       return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
      }
    }).map((food)=>(
      <FoodCard 
      key={food.id}
      img={food.img}
      price={food.price}
      rating={food.rating}
      desc={food.desc}
      name={food.name}
      id={food.id}
      handleToast={handleToast}
      category={food.category}
       />
    ))
    
   }
  
   </div>
</>
  )
}

export default FoodItems