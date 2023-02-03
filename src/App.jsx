import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <div className="">
      <Nav cartData={cartData} setCartData={setCartData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route
          path="/product/:productId"
          element={<Product setCartData={setCartData} />}
        />
        <Route path="/checkout" element={<Checkout cartData={cartData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
