import react from "react";

const Subtotal = ({ cartItems }) => {
    let pricesArray = []
    let idArray = []

    let totalSum = 0

    cartItems.map((item)=>{
        if(!idArray.includes(item.payload.id)){
            pricesArray.push(item.payload.price)
            idArray.push(item.payload.id)
        }
    })

    // const totalSum = pricesArray.reduce(function (total, price) {
    //     return total + price;
    // }, 0);


    cartItems.map((item)=>{
        totalSum = totalSum + (item.payload.price * item.payload.count)
    })


    return (
        <div>
            <h1>Total: {totalSum}</h1>
        </div>
    )
}

//only thing remains is adding discount thingy

export default Subtotal;
