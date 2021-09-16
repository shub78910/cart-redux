import "./cart.css";

const Subtotal = ({ itemSubtotal, savings }) => {
    let totalSum = 0;
    let totalSavings = 0;

    let pricesArray = Object.values(itemSubtotal);
    let savingsArray = Object.values(savings);

    pricesArray.map((price) => {
        totalSum = totalSum + price;
    });

    savingsArray.map((price) => {
        totalSavings = totalSavings + price;
    });

    return (
        <>
            <div className="subtotal_wrapper">
                <h4>
                    Sub total: <span>{totalSum + totalSavings}</span>
                </h4>
                <h4>
                    Discount: <span>{totalSavings}</span>
                </h4>
            </div>
            <h1 className="total">Total: {totalSum} </h1>
        </>
    );
};

export default Subtotal;
