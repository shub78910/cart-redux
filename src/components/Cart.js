
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Subtotal from './Subtotal';

import CartItem from './CartItem'
import { emptyCart } from '../actions';

import "./cart.css"
import "./product.css"


function Cart() {

    const dispatch = useDispatch()

    //to retirve the cart items from the store
    const cartItems = useSelector((state) => state.productReducer)

    //to calculate and maintain the subtotal according to offers of the particular products.
    const [itemSubtotal, setItemSubtotal] = useState({ "bread": 0, "cheese": 0, "soup": 0, "butter": 0, "milk": 0 });

    //calculate savings per item.
    const [savings, setSavings] = useState({
        "breadSaving": 0, "cheeseSaving": 0, "milkSaving": 0, "soupSaving": 0, "butterSaving": 0,
    })



    //to check the soup availability and therefore apply offers.
    let isSoupInCart = false;
    let soupCount;
    cartItems.map((item) => {
        if (item.name == "soup") {
            isSoupInCart = true;
            soupCount = item.count;
        }
    })


    //empty the whole cart.
    const emptyFullCart = () => {
        dispatch(emptyCart());
        setItemSubtotal(
            { "bread": 0, "cheese": 0, "soup": 0, "butter": 0, "milk": 0 }
        )
        setSavings({
            "breadSaving": 0, "cheeseSaving": 0, "milkSaving": 0, "soupSaving": 0, "butterSaving": 0,
        })
    }

    //checks the prod and calculates its subtotal accordingly.
    const checkWhichproduct = (item) => {
        
        if (item.name == "cheese") {
            let cheeseSubtotal = item.price * Math.ceil(item.count / 2)
            let cheeseSaving = ((item.count * item.price) - cheeseSubtotal)
            setItemSubtotal(prevState => ({ ...prevState, "cheese": cheeseSubtotal, "cheeseSaving": cheeseSaving }))

            setSavings(prevState => ({ ...prevState, "cheeseSaving": cheeseSaving }))
        }
        else if (item.name == "butter") {
            let freeItems = Math.floor(item.count / 3)
            let butterSubtotal = ((item.count * item.price) - (freeItems * item.price))

            let butterSaving = ((item.count * item.price) - butterSubtotal)

            setItemSubtotal(prevState => ({ ...prevState, "butter": butterSubtotal }))

            setSavings(prevState => ({ ...prevState, "butterSaving": butterSaving }))

        }
        else if (item.name == "bread") {
            let breadSubtotal;
            let breadSaving;
            if (!isSoupInCart) {
                breadSubtotal = (item.count * item.price)
                breadSaving = 0;
            }
            else if (isSoupInCart) {
                if (soupCount >= Number(item.count)) {
                    breadSubtotal = (item.count * (item.price / 2))
                    breadSaving = breadSubtotal / 2
                }
                else if (soupCount < Number(item.count)) {
                    breadSubtotal = ((((item.count - soupCount) * item.price) + (soupCount * (item.price / 2))))
                    breadSaving = (soupCount * (item.price / 2))
                }
            }


            setItemSubtotal(prevState => ({ ...prevState, "bread": breadSubtotal }))

            setSavings(prevState => ({ ...prevState, "breadSaving": breadSaving }))

        }
        else if (item.name == "milk") {
            let milkSubtotal = ((item.count * item.price))
            setItemSubtotal(prevState => ({ ...prevState, "milk": milkSubtotal }))

        }
        else if (item.name == "soup") {
            let soupSubtotal = ((item.count * item.price))
            setItemSubtotal(prevState => ({ ...prevState, "soup": soupSubtotal }))
        }
    }



    return (
        <div className="cart">

            <div>
                <div className="cart_div" >
                    <Link to="/"><button className="button">Back to products</button></Link>
                    <button className="button" onClick={emptyFullCart} >Empty Cart</button>
                </div>

                <div className="cartItems">
                    {cartItems.map((item) => {
                        return <CartItem item={item} key={item.id} itemSubtotal={itemSubtotal} setItemSubtotal={setItemSubtotal} checkWhichproduct={checkWhichproduct} savings={savings} />
                    }
                    )}
                </div>
            </div>

            <div>
                <Subtotal itemSubtotal={itemSubtotal} savings={savings} />
            </div>

        </div>
    )
}

export default Cart
