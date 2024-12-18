import React from 'react'
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../Redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import { incremeantQty,decreamentQty } from '../Redux/Slices/CartSlice';

function ItemCard({id,img,price,name,qty}) {
    console.log('item card',{id,img,price,name,qty});
  const dispatch = useDispatch();
  return (
    <>
    <div className='flex  gap-5  shadow-lg border-gray-100 border p-3 rounded-lg mb-3 m-3' >
        <img className='w-[60px] h-[60px] ml-3' src={img} alt="" />
        <MdDelete onClick={()=> dispatch(removeFromCart({id:id}))} className='absolute right-7 hover:text-white hover:bg-red-600 hover:border-none hover:rounded-lg transition-all ease-linear cursor-pointer'/>
    <div className='leading-5'>
        <h2 className='font-semibold text-gray-800 '>{name}</h2>
        <div className='flex justify-between items-center gap-4 mt-3 '>
            <span className='text-green-500 font-bold '>₹{price}</span>

        <div className='flex justify-between items-center  gap-2 absolute right-8 '>
            <CiSquarePlus onClick={()=> dispatch(incremeantQty({id}))} className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <CiSquareMinus onClick={()=> dispatch(decreamentQty({id}))} className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer' />
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ItemCard