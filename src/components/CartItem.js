import React from 'react'
import { useDispatch } from "react-redux"

import {incrementProductCount, decrementProductCount} from "../actions/index";

function CartItem({item}) {

    const dispatch = useDispatch()
    return (
        <div>
            <div className="cartItem" key={item.payload.name}>
                <h1>{item.payload.name}</h1>
                <h2>Rs {item.payload.price}</h2>

                <button onClick={ () => dispatch(incrementProductCount(item.payload)) } >+</button>
                <span>{item.payload.count}</span>
                <button onClick={ () => dispatch(decrementProductCount(item.payload))}>-</button>
            </div>
        </div>
    )
}

export default CartItem
