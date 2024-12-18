import React from 'react'

function NavBar() {
  return (
    
     <nav className='flex justify-between flex-col lg:flex-row py-3 mb-7 mx-4  '>
        <div className='mb-3'>
       <h3 className='text-2xl font-bold text-gray-500'>{new Date().toUTCString().slice(0,16)}</h3>
       <h3 className='text-2xl font-bold text-gray-900'>Food Panda</h3>
       </div>
       <div>
        <input 
        type="text" 
        placeholder='search Here'
        autoComplete='off'
        name='search'
        className='p-3 text-sm border border-gray-400 rounded-md w-full lg:w-[25vw]  outline-none'

         />
       </div>
     </nav>

    
  )
}

export default NavBar