import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
          <Products />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
