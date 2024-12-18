import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState :{
        cart:[]
    },
    reducers:{
        addTocart: (state,action)=>{
            const isExistItem = state.cart.find((item)=> item.id === action.payload.id)
            if (isExistItem) {
                state.cart =state.cart.map((item)=>item.id === action.payload.id ? {...item,qty: item.qty + 1 }:item)
                
            } else{
                state.cart.push(action.payload)
            }       
        },
        removeFromCart : (state,action)=>{

            state.cart = state.cart.filter((item)=> item.id !== action.payload.id )
            console.log('remove From Cart',action)
        },
        incremeantQty : (state,action)=>{
            state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item,qty: item.qty +1} : item )
        },
        decreamentQty : (state,action)=>{
           state.cart = state.cart.map((item)=>{
            if (item.id === action.payload.id) {
                return {...item,qty:item.qty > 1 ? item.qty -1 : item.qty}
            }else{
                return item
            }
           })
        }
    }
})

export const {addTocart,removeFromCart,incremeantQty,decreamentQty} = cartSlice.actions 
export default cartSlice.reducer
