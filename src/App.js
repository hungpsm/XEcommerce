// import logo from "./logo.svg";
import ProductList from "components/ProductList/ProductList";
import { useEffect, useState } from "react";
import productAPI from "api/productAPI";

import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "components/Home/Home";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import PageNotFound from "components/PageNotFound/PageNotFound";
import Navigator from "components/Navigator/Navigator";
import Carousels from "components/Carousels/Carousels";

import cart from "images/cart.png";

function App() {
  const [productList, setProductList] = useState({ data: [] });

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 100,
        };
        const response = await productAPI.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();

    return () => {
      console.log("Cleanup data");
    };
  }, []);

  return (
    <>
      <div className="app">
        <Router>
          <Header> </Header>
          <div className="home-page">
            <Navigator />
            <Carousels />

            <div className="container">
              {/* <div className="cart-image">
                <img src={cart} alt="cart" />
              </div> */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" component={ProductList} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>

          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
