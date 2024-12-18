import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/Slices/CartSlice';

function FoodCard({id,name,img,price,rating,desc}) {

  const dispatch = useDispatch()

  return (
    
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
    <img
      src={img}
      alt=""
      className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
    />
    <div className="text-sm flex justify-between">
      <h2>{name}</h2>
      <span className="text-green-500 ">₹{price}</span>
    </div>
    <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
    <div className="flex justify-between ">
      <span className="flex justify-center items-center">
        <FaStar className="mr-1 text-yellow-400" /> {rating}
      </span>
        <button onClick={()=> dispatch(addTocart({id,name,price,img,qty:1,desc,rating}))} className='bg-green-500 rounded-lg p-1 font-semibold hover:bg-green-600 hover:text-white ' >Add To Cart</button>
    </div>
       
    </div>
   
  )
}

export default FoodCard