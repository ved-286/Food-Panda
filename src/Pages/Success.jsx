import React, { useEffect, useState } from 'react'
import {RingLoader} from 'react-spinners'

function Success() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-screen text-center'>
      {loading ? <RingLoader color="#00FF00"/> :
      <div>
        <img className="fixed top-[20%] w-[400px] h-[400px] lg:h-[200px] lg:w-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2" src="./panda.png" alt="" />
      <h2 className='text-4xl font-Bold text-green-600'>Order Successfull!!</h2>
      <h2 className='text-3xl '>Your Order Has Been Placed SuccessFully!!</h2>
      </div>}
    </div>
  )
}

export default Success