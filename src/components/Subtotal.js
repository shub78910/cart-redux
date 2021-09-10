
const Subtotal = ({ itemSubtotal, savings }) => {
    let totalSum = 0;
    let totalSavings = 0;

    let pricesArray = Object.values(itemSubtotal)
    let savingsArray = Object.values(savings)

    pricesArray.map((price)=>{
        totalSum = totalSum + price
    })

    savingsArray.map((price)=>{
        totalSavings = totalSavings + price
    })

    let subtotal = totalSavings+totalSum
    return (
        <div className="subtotal_wrapper">
        <h4>Sub total: {subtotal}</h4>
            <h3>discount: {totalSavings}</h3>
            <h1>Total: {totalSum}</h1>
        </div>
    )
}

export default Subtotal;
