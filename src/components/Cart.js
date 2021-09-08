import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Subtotal from './Subtotal';

import CartItem from './CartItem'

function Cart() {

    const cartItems = useSelector((state) => state.productReducer)

    let filteredCartItem=[]
    let idArray = []

    cartItems.map((item)=>{
        if(!idArray.includes(item.payload.id)){
            idArray.push(item.payload.id)
            item.payload.count = item.payload.count+1 
            filteredCartItem.push(item)
        }
    })

    return (
        <div className="cart">

            <div className="cartItems">
                {filteredCartItem.map((item) => (
                    <CartItem item={item} key={ Math.floor(Math.random() * 1000) }/>
                ))}
            </div>

            <div>
                <Subtotal  cartItems={cartItems} />
            </div>

            <Link to="/">
                <button>Back to products</button>
            </Link>
        </div>
    )
}

export default Cart
