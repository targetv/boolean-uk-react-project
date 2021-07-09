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
import LogIn from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import { useHistory } from "react-router-dom";

function App() {
  const [dealsShopData, setDealsShopData] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [gameSearchInput, setGameSearchInput] = useState("");
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState("SignUpMod");

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((resp) => resp.json())
      .then(setDealsShopData);
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/userprofile")
      .then((resp) => resp.json())
      .then(setCurrentUsers);
  }, [setCurrentUsers]);

  return (
    <div className="App">
      <Header setModal={setModal} />

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
        <Route path="/login">
          <LogIn currentUsers={currentUsers} />
        </Route>
        <Route path="/signup">
          <SignUpModal
            setCurrentUsers={setCurrentUsers}
            currentUsers={currentUsers}
          />
        </Route>
        {/* Complete 404 Page */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
