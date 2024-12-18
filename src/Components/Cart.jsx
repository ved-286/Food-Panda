import React, { useState } from 'react'
import ItemCard from './ItemCard';
import { IoMdClose } from "react-icons/io";
import {useSelector} from 'react-redux'
import CartSlice from '../Redux/Slices/CartSlice';
import { FaCartShopping } from "react-icons/fa6";

function Cart() {

  const [isActive,setIsActive] = useState(false)

  const CartItems = useSelector((state)=> state.cart.cart)

  const TotalQty = CartItems.reduce((Totalqty,item)=> Totalqty + item.qty,0)
  const TotalAmount = CartItems.reduce((TotalAmount,item)=> TotalAmount + item.price * item.qty,0)


  return (
    <>
    <div className={`lg:w-[23vw] w-full h-full bg-white fixed top-0 right-0  ${isActive ? "translate-x-0" : "translate-x-full"} transistion-all z-50 duration-500 `}>
      <div className='flex justify-between items-center p-3 mt-2'>
        <span className='font-bold text-gray-700'> Your Order</span>
        <IoMdClose onClick={()=> setIsActive(!isActive)} className='border-2 border-gray-600 hover:text-red-600 hover:border-red-600 rounded-md cursor-pointer mb-3' />
      </div>

      {CartItems.length > 0 ?
        CartItems.map((food)=>{
          return <ItemCard 
                key={food.id}
                img={food.img}
                price={food.price}
                name={food.name}
                qty={food.qty}
                id={food.id}
          />
                  }): <h2 className='text-center font-bold text-gray-600 mt-6'>Your Cart Is Empty</h2>
      }
      <div className='absolute bottom-2 p-4'>
        <h3>Total Items: {TotalQty}</h3>
        <h3>Total Amount: {TotalAmount}</h3>
        <hr className='mb-3'/>
        <button className='bg-green-500 rounded-lg p-1 font-semibold hover:bg-green-600 text-xl hover:text-white w-[90vw] lg:w-[20vw]'>CheckOut</button>
      </div>

    </div>
    <FaCartShopping onClick={()=> setIsActive(!isActive)} className={` fixed bottom-10 text-5xl  right-4 bg-white rounded-full p-3 ${CartItems.length>0 && "animate-bounce delay-500"  }`} />
    </>
  )
}

export default Cart