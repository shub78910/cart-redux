import React from 'react'
import { useDispatch } from "react-redux"

import {incrementProductCount, decrementProductCount} from "../actions/index";

function CartItem({item}) {

    const dispatch = useDispatch()
    return (
        <div>
            <div className="cartItem">
                <h1>{item.payload.name}</h1>
                <h2>Rs {item.payload.price}</h2>
                <h3>{item.payload.count}</h3>

                {/* <button >+</button>
                <span>{item.payload.count}</span>
                <button>-</button> */}
            </div>

            
        </div>
    )
}

export default CartItem
