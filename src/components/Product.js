import React, { useState } from 'react'

import { useDispatch } from "react-redux"
import { updateCartItems } from '../actions'

import "./product.css"

function Product({ item }) {

    const [qty, setQty] = useState(0)


    const dispatch = useDispatch()

    //sending the payload to the reducer through actions.
    const addToCart = () => {
        if(qty==0){
            alert("Enter qty before adding to cart")
        }
        dispatch(updateCartItems({
            type: "UPDATEITEM",
            payload: {
                name: item.name,
                price: item.price,
                id: item.id,
                count: Number( qty )
            }
        }))
    }

    return (
        <div className="productWrapper">
            <div>
                <h2>{item.name}</h2>
                <input onChange={(e) => setQty(e.target.value)} type="number" placeholder="Add qty" min="1" />
            </div>

            <div>
                <h4>Rs. {item.price}</h4>
                <button className="button" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
