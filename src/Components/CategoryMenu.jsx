import React from 'react'

function CategoryMenu() {
  return (
     <div className='ml-5 flex gap-3 overflow-scroll overflow-smooth lg:overflow-hidden mb-10'>
        
        <button className='border rounded-lg py-2 px-3 font-bold bg-gray-200 hover:bg-green-500 hover:text-white'>All</button>
        <button className='border rounded-lg py-2 px-3 font-bold bg-gray-200 hover:bg-green-500 hover:text-white'>Lunch</button>   
        <button className='border rounded-lg py-2 px-3 font-bold bg-gray-200 hover:bg-green-500 hover:text-white'>BreakFast</button>
        <button className='border rounded-lg py-2 px-3 font-bold bg-gray-200 hover:bg-green-500 hover:text-white'>Dinner</button>
        <button className='border rounded-lg py-2 px-3 font-bold bg-gray-200 hover:bg-green-500 hover:text-white'>Snacks</button>
     </div>
  )
}

export default CategoryMenu