import "./App.css";
import "./styleSheets/HomePage.css";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";

function App() {
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
          <ShopPage />
        </Route>
        {/* Complete 404 Page */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
