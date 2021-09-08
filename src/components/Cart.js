import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

import CartItem from './CartItem'

function Cart() {

    const cartItems = useSelector((state)=>state.productReducer)

    return (
        <div className="cart">

        <div className="cartItems">
            {cartItems.map((item)=>(
                <CartItem item={item} key={item.id} />
            ))}
        </div>
            
            <Link to="/">
                <button>Back to products</button>
            </Link>
        </div>
    )
}

export default Cart
