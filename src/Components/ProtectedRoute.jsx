import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({element}) {
  
    const CartItems = useSelector((state)=> state.cart.cart)
    return CartItems.length > 0 ? element : <Navigate to="/" />
  
}

export default ProtectedRoute