import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setCategory } from '../Redux/Slices/CategorySlice'
import FoodData from '../Data/FoodData'

function CategoryMenu({category}) {

const [categories,setCategories] =useState([])

const ListUniqueCategory = ()=>{
   const uniqueCategory = [...new Set(FoodData.map((item)=> item.category))]
   setCategories(uniqueCategory)
   //console.log(uniqueCategory)
}

useEffect(()=>{
   ListUniqueCategory();
},[])

const selectedCategory = useSelector((state)=>state.category.category)

const dispatch = useDispatch();
  return (
   <div className='mx-3 '>
      <h3 className='font Bold text-gray-600 mb-3 text-3xl'>Find your Faviroute Food</h3>
     <div className='ml-5 flex gap-3 overflow-scroll overflow-smooth lg:overflow-hidden mb-10'>
        
        <button
        onClick={()=> dispatch(setCategory("All"))} className={`px-2 py-1 bg-gray-200 rounded-lg  font-bold hover:bg-green-600 hover:text-white ${selectedCategory === "All" && "bg-green-600 text-white"}`}>All</button>

        {
         categories.map((category,index)=>{
            return <button key={index}
            onClick={()=> dispatch(setCategory(category))}
            className={`px-2 py-1 bg-gray-200 rounded-lg  font-bold hover:bg-green-600 hover:text-white ${selectedCategory === category && "bg-green-600 text-white"}`}>{category}</button>
         })
        }
        
     </div>
     </div>
  )
}

export default CategoryMenu