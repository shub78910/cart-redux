import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

import "./cart.css"
import { updateCartItems, removeItem } from '../actions'


function CartItem({ item, itemSubtotal, checkWhichproduct, savings }) {

    const dispatch = useDispatch()

    //for updating the qty
    const [updatedQty, setUpdatedQty] = useState(item.count)

    const cartItems = useSelector((state) => state.productReducer)

    const addProduct = () => {
        setUpdatedQty(Number(updatedQty) + 1)
        updateCart();
    }
    const removeProduct = () => {
        let reducedQty = Number(updatedQty) - 1

        if (reducedQty == -1) {
            removeProductFromCart(item.id)
            console.log("cannot have negative quantity.")
            setUpdatedQty(0);
        } else {
            setUpdatedQty(reducedQty)
            updateCart();
        }

    }

const removeProductFromCart = (id) =>{
    
    dispatch(removeItem({
        type: "REMOVEITEM",
        payload: {
            id: item.id,
        }
    }))
}
    const updateCart = () => {

        dispatch(updateCartItems({
            type: "UPDATEITEM",
            payload: {
                name: item.name,
                price: item.price,
                id: item.id,
                count: Number(updatedQty)
            }
        }))
    }

    //to rerun the function of calculating the subtotal.
    useEffect(() => {
        cartItems.map((item) => {
            checkWhichproduct(item)
        })

    }, [updatedQty])

    return (
        <div>
            <div className="cartItem">

                <div>
                    <div>
                        <h2>{item.name}</h2>
                    </div>

                    <div>
                        Rs. {item.price} * {item.count} =
                        {itemSubtotal[item.name]}
                    </div>

                </div>

                <div>
                    <div className="itemQty">

                        <div><button onClick={addProduct}>+</button></div>
                        <h4>{item.count}</h4>
                        <div><button onClick={removeProduct}>-</button></div>

                    </div>



                    <div>You saved: {savings[`${item.name}Saving`]}</div>
                    {/* can implement a conditional rendering if the saving is 0. */}

                </div>
            </div>


        </div>
    )
}

export default CartItem
