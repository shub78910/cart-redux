import React from 'react'

import { useDispatch } from "react-redux"
import { addItem } from '../actions'

function Product({ item }) {


    const dispatch = useDispatch()

    const addToCart = () => {
        console.log("add");
        dispatch(addItem({
            type:"ADDITEM",
            payload:{
                name:item.name,
                price:item.price,
                id:item.id,
                count:item.count
            }
        }))
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
