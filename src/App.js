import "./App.css";
import "./styleSheets/HomePage.css";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import { useState, useEffect } from "react";
import CartPage from "./pages/CartPage";

function App() {
  const [dealsShopData, setDealsShopData] = useState([]);
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((resp) => resp.json())
      .then(setDealsShopData);
  }, []);

  const [gameSearchInput, setGameSearchInput] = useState("");
  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage
            ShopDeals={dealsShopData}
            gameSearchInput={gameSearchInput}
            setGameSearchInput={setGameSearchInput}
            setDealsShopData={setDealsShopData}
          />
        </Route>
        <Route path="/product/:title/:steamAppID">
          <ProductPage setBasket={setBasket} basket={basket} />
        </Route>
        <Route path="/cart">
          <CartPage basket={basket} setBasket={setBasket} />
        </Route>
        {/* Complete 404 Page */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
