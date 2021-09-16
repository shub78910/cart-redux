import Products from "./components/Products";
import Cart from "./components/Cart";
import Offers from "./components/Offers";
function App() {
    return (
        <>
            <Offers />
            <div className="appWrapper">
                <Products />
                <Cart />
            </div>
        </>
    );
}

export default App;
